<template>
  <div>
    <b-taglist>
      <b-tag type="is-primary" size="is-large">Current {{ $route.params.id }} price is {{ tokenPrice }}</b-tag>
    </b-taglist>
    <PieChart :tokenId="$route.params.id" />
    <TopHoldersTable :tokenId="$route.params.id" />
    <hr />
    <small>Token ID: {{ $route.params.id }}</small>
  </div>
</template>

<script>
import TopHoldersTable from '../../../components/TopHoldersTable'
import CoinGeckoService from '../../../services/CoinGeckoService'
import PieChart from '../../../components/chart/Pie.vue'

export default {
  components: {
    TopHoldersTable,
    PieChart,
  },
  async asyncData({ error, route }) {
    const { id } = route.params
    try {
      const { data } = await CoinGeckoService.getSimplePrice(id, 'usd')
      const tokenPrice = data[id].usd

      return {
        tokenPrice,
      }
    } catch (e) {
      error(e)
    }
  },
  data() {
    return {
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true,
    }
  },
  head() {
    return {
      title: this.$route.params.id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place for Blockchain Analytics',
        },
      ],
    }
  },
}
</script>

<style></style>
