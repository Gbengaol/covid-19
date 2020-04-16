<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span @click="closeModal" class="close block">&times;</span>
      <h3 class="text-center font-bold mb-3 text-black">World Data</h3>
      <div
        class="dark-bg-white flex justify-between m-5 mt-8 flex-wrap lg:h-64 items-center rounded-lg px-6 py-4 cursor-pointer shadow-lg"
      >
        <div>
          <h6 class="active">Active Cases: {{ active }}</h6>
          <h6 class="deaths">Deaths: {{ deaths }}</h6>
          <h6 class="recovered">Recovered: {{ recovered }}</h6>
          <h6 class="confirmed">Confirmed Cases: {{ confirmed }}</h6>
        </div>
        <div class="mt-4 md:mt-0">
          <Chart :chartdata="chartModaldata"></Chart>
        </div>
      </div>
      <h3 class="font-bold text-black text-center">
        Developed by
        <a
          href="https://twitter.com/Gbengacodes"
          class="underline text-blue-700"
          target="_blank"
        >Gbenga Olufeyimi</a> using data from
        <a
          href="https://covid19-api.com/docs"
          target="_blank"
        >https://covid19-api.com/docs</a>
      </h3>
    </div>
  </div>
</template>

<script>
import Chart from "./chart";
import { formatNumber } from "../utils/formatNumber";
export default {
  props: ["closeModal", "totalData", "chartModaldata"],
  data() {
    return {
      active: formatNumber(this.totalData.active),
      deaths: formatNumber(this.totalData.deaths),
      recovered: formatNumber(this.totalData.recovered),
      confirmed: formatNumber(this.totalData.confirmed)
    };
  },
  components: {
    Chart
  },
  formatNumber
};
</script>

<style scoped lang="scss">
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 10px;
  border: 1px solid #888;
  width: 60%;
  position: relative;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
}

/* The Close Button */
.close {
  color: #000;
  position: relative;
  left: 95%;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
