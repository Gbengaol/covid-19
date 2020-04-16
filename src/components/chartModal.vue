<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span @click="closeModal" class="close block">&times;</span>
      <h3 class="text-center font-bold mb-3 text-black">
        World Data
      </h3>
      <div
        class="dark-bg-white flex justify-between m-5 mt-8  flex-wrap lg:h-64 items-center rounded-lg px-6 py-4 cursor-pointer shadow-lg"
      >
        <div>
          <h6 class="active">Active Cases: {{ totalData.active }}</h6>
          <h6 class="deaths">Deaths: {{ totalData.deaths }}</h6>
          <h6 class="recovered">Recovered: {{ totalData.recovered }}</h6>
          <h6 class="confirmed">Confirmed Cases: {{ totalData.confirmed }}</h6>
          <h6 class="confirmed">
            Total Cases:
            {{
              Number(totalData.confirmed) +
                Number(totalData.recovered) +
                Number(totalData.active) +
                Number(totalData.deaths)
            }}
          </h6>
        </div>
        <div class="mt-4 md:mt-0">
          <Chart :chartdata="chartdata"></Chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getTotalReport } from "../utils/apis";
import Chart from "./chart";
export default {
  props: ["closeModal"],
  components: {
    Chart,
  },
  created() {
    this.getData();
  },
  data() {
    return {
      totalData: {},
      chartdata: [],
    };
  },
  methods: {
    async getData() {
      try {
        const data = await axios({
          method: "GET",
          url: getTotalReport,
        });
        if (data.status === 200) {
          const { active, deaths, recovered, confirmed } = data.data[0];
          this.chartdata = [
            ["Active", active],
            ["Deaths", deaths],
            ["Recovered", recovered],
            ["Confirmed", confirmed],
          ];
          this.totalData = data.data[0];
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
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
  overflow: auto;
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
