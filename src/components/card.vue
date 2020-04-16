<template>
  <div>
    <div
      class="dark-bg-white flex justify-between min-h-0 min-w-0 rounded-lg px-6 py-4 transform hover:scale-105 cursor-pointer shadow-lg"
    >
      <div>
        <h3 class="text-center font-bold mb-3" v-bind:style="{ color: customColor }">{{ country }}</h3>
        <h6 class="active">Active Cases: {{ active }}</h6>
        <h6 class="deaths">Deaths: {{ deaths }}</h6>
        <h6 class="recovered">Recovered: {{ recovered }}</h6>
        <h6 class="confirmed">Confirmed Cases: {{ confirmed }}</h6>
      </div>
      <div>
        <Chart :chartdata="chartdata"></Chart>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "./chart";
export default {
  name: "Card",
  components: {
    Chart
  },
  data() {
    const rand = Math.random()
      .toString()
      .substring(2, 8);
    return {
      customColor: `#${rand}`,
      chartdata: [
        ["Active", this.active],
        ["Deaths", this.deaths],
        ["Recovered", this.recovered]
      ]
    };
  },
  props: ["country", "active", "deaths", "recovered", "confirmed"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.active {
  color: #ffc107;
  font-weight: bold;
}
.deaths {
  color: #dc3545;
  font-weight: bold;
}
.recovered {
  color: #28a745;
  font-weight: bold;
}
.confirmed {
  color: #17a2b8;
  font-weight: bold;
}
</style>
