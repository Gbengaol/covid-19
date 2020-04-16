<template>
  <div>
    <div v-if="isLoading"><PreLoader /></div>
    <div v-if="!isLoading" class="app" :class="mode">
      <div class="container px-4 mx-auto pb-5 pt-1">
        <Header
          :allCountries="allCountries"
          :onChangeCountry="onChangeCountry"
          :toggleMode="toggleMode"
          :openModal="openModal"
          :closeModal="closeModal"
        />
        <div
          class="grid grid-cols-1 relative md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div v-for="report in allCountriesData" :key="report.country">
            <Card
              v-bind:country="report.country"
              v-bind:confirmed="report.provinces[0].confirmed"
              v-bind:recovered="report.provinces[0].recovered"
              v-bind:deaths="report.provinces[0].deaths"
              v-bind:active="report.provinces[0].active"
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
import { getAllCountriesReport } from "./utils/apis";
export default {
  name: "App",
  components: {
    Card,
    Header,
    PreLoader,
  },
  data() {
    return {
      allCountriesData: [],
      allCountries: [],
      mode: "light",
      isLoading: true,
    };
  },
  methods: {
    async getData() {
      try {
        const data = await axios({
          method: "GET",
          url: getAllCountriesReport,
        });
        if (data.status === 200) {
          this.allCountriesData = data.data;
          this.allCountries = data.data;
          this.isLoading = false;
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },

    onChangeCountry(event) {
      this.allCountriesData = this.allCountries.filter((country) => {
        if (event.target.value !== "") {
          return country.country === event.target.value;
        }

        return this.allCountries;
      });
    },

    toggleMode(e) {
      if (e.target.checked) {
        this.mode = "dark";
      } else {
        this.mode = "light";
      }
    },

    openModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },

    closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.app {
  font-family: "Roboto", sans-serif;
  color: #15202b;
  min-width: 100vw;
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
  }
}
</style>
