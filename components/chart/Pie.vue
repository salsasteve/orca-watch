<template>
  <section class="container">
    <Pie
      v-if="!loading"
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </section>
</template>

<script>
import { Pie } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'
import EthplorerService from '../../services/EthplorerService'
import CoinGeckoService from '../../services/CoinGeckoService'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'PieChart',
  components: {
    Pie,
  },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart',
    },
    datasetIdKey: {
      type: String,
      default: 'label',
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: '',
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
    tokenId: '',
  },
  data() {
    return {
      loading: true,
      chartData: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: ['#0074D9', '#FF4136', '#2ECC40', '#39CCCC', '#01FF70', '#85144b', '#F012BE', '#3D9970', '#111111', '#AAAAAA', '#DD1B16'],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'left',
          },
        },
      },
    }
  },
  async mounted() {
    const limit = 10
    try {
      this.loading = true
      const coinData = await CoinGeckoService.getCoinData(this.tokenId)
      const contractAddress = coinData.data.platforms.ethereum
      const { data } = await EthplorerService.getTopTokenHolders(contractAddress, limit)

      const addresses = data.holders.map((x) => String(x.address)).slice(0, 10)
      addresses.push('Everyone Else')
      this.chartData.labels = addresses

      const arrTopTenShare = data.holders.map((x) => x.share).slice(0, 10)
      const shareOfTopTen = arrTopTenShare.reduce((a, b) => a + b, 0)
      const othersShare = 100 - shareOfTopTen
      arrTopTenShare.push(othersShare)
      this.chartData.datasets[0].data = arrTopTenShare

      this.loading = false
    } catch (e) {
      this.loading = false
      console.log(e)
    }
  },
}
</script>
