<template>
  <div>
    <div v-if="isLoading">
      <PreLoader />
    </div>
    <div v-if="error">
      <h3 class="text-center text-red font-bold">An Error Occured, please try again ...</h3>
    </div>
    <div v-if="!isLoading" class="app" :class="mode">
      <div class="container px-4 mx-auto pb-5 pt-1">
        <Header
          :allCountries="allCountries"
          :onChangeCountry="onChangeCountry"
          :toggleMode="toggleMode"
          :openModal="openModal"
          :closeModal="closeModal"
          :onChangeDate="onChangeDate"
          :todaysDate="todaysDate"
          :mode="mode"
        />
        <div class="grid grid-cols-1 relative md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="report in allCountriesData" :key="report.country">
            <Card
              v-bind:country="report.country"
              v-bind:confirmed="formatNumber(report.provinces[0].confirmed)"
              v-bind:recovered="formatNumber(report.provinces[0].recovered)"
              v-bind:deaths="formatNumber(report.provinces[0].deaths)"
              v-bind:active="formatNumber(report.provinces[0].active)"
            ></Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/card";
import PreLoader from "./components/preloader";
import Header from "./components/header";
import axios from "axios";
import { formatNumber } from "./utils/formatNumber";
import { getAllCountriesReport } from "./utils/apis";
export default {
  name: "App",
  components: {
    Card,
    Header,
    PreLoader
  },
  data() {
    const date = new Date();
    const month = () => {
      if (date.getMonth().toString().length === 1) {
        return `0${date.getMonth() + 1}`;
      } else {
        return date.getMonth() + 1;
      }
    };
    return {
      allCountriesData: [],
      allCountries: [],
      mode: "light",
      isLoading: true,
      error: false,
      todaysDate: `${date.getFullYear()}-${month()}-${date.getDate() - 1}`,
      formatNumber: formatNumber
    };
  },
  methods: {
    async getData() {
      try {
        const data = await axios({
          method: "GET",
          url: getAllCountriesReport(this.todaysDate)
        });
        if (data.status === 200) {
          this.allCountriesData = data.data;
          this.allCountries = data.data;
          this.isLoading = false;
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
        this.error = true;
      }
    },

    onChangeCountry(event) {
      this.allCountriesData = this.allCountries.filter(country => {
        if (event.target.value !== "") {
          return country.country === event.target.value;
        }
        return this.allCountries;
      });
    },

    onChangeDate(event) {
      this.todaysDate = event.target.value;
    },

    toggleMode(e) {
      if (e.target.checked) {
        this.mode = "dark";
        localStorage.setItem("theme", "dark");
      } else {
        this.mode = "light";
        localStorage.setItem("theme", "light");
      }
    },

    openModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },

    closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    }
  },
  created() {
    this.getData();

    // Setting the theme if the theme already existed
    const theme = localStorage.getItem("theme");
    if (theme) {
      this.mode = theme;
    }
  },
  watch: {
    todaysDate: async function() {
      this.isLoading = true;
      this.error = false;
      this.getData();
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.app {
  font-family: "Roboto", sans-serif;
  color: #15202b;
  min-height: 100vh;

  .dark-bg-white {
    background: #15202b;
  }

  &.dark {
    background: #15202b;
    color: #fff;

    .dark-text-white {
      color: #fff;
    }
    .dark-bg-white {
      background: #fff;
    }
    .moon-light {
      fill: #fff;
    }
  }
}
</style>
