<template>
  <div>
    <apexchart
      ref="donut"
      width="350"
      type="donut"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  name: "DonutExample",
  data: function () {
    return {
      chartOptions: {
        labels: ["Blue", "Green", "Yellow", "Red"],
      },
      series: [11, 32, 45, 32],
    };
  },
};
</script>
