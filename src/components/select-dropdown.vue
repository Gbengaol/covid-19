<template>
  <div class="w-full text-center md:w-1/6 px-3 mb-6 md:mb-0">
    <label
      class="block uppercase tracking-wide dark-text-white text-black text-xs font-bold mb-2"
      for="grid-state"
    >
      All Countries
    </label>
    <div class="relative">
      <select
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-state"
        @change="onChangeCountry($event)"
      >
        <option value="">Choose Country</option>
        <option
          v-for="country in allCountries"
          :value="country.country"
          :key="country.country"
          >{{ country.country }}</option
        >
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: ["allCountries", "onChangeCountry"],
};
</script>

<style></style>
