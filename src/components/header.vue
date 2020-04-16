<template>
  <div>
    <div class="mb-5 flex flex-wrap justify-end items-center">
      <button
        @click="openModal"
        class="uppercase mr-12 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
      >Total Stats</button>
      <div>
        <SwitchButton :toggleMode="toggleMode" />
      </div>
    </div>
    <div class="mb-5 flex flex-wrap justify-between items-center">
      <img class="logo rounded-full" src="../img/covid.jpg" />
      <div>
        <h1 class="dark-text-white uppercase text-black font-bold text-2xl">Covid 19 Report</h1>
      </div>
      <Select :allCountries="allCountries" :onChangeCountry="onChangeCountry" />
      <DatePicker :onChangeDate="onChangeDate" />
    </div>
    <ChartModal :closeModal="closeModal" :totalData="totalData" :chartModaldata="chartModaldata" />
  </div>
</template>

<script>
import Select from "./select-dropdown";
import SwitchButton from "./switch-button";
import ChartModal from "./chartModal";
import DatePicker from "./datepicker";
export default {
  components: {
    Select,
    SwitchButton,
    ChartModal,
    DatePicker
  },
  props: [
    "allCountries",
    "onChangeCountry",
    "toggleMode",
    "openModal",
    "closeModal",
    "chartModaldata",
    "totalData",
    "onChangeDate"
  ]
};
</script>

<style scoped lang="scss">
.logo {
  height: 75px;
  width: auto;
}
</style>
