<template>
  <div class="w-full text-center md:w-1/6 px-3 mb-6 md:mb-0">
    <label
      class="block uppercase tracking-wide dark-text-white text-black text-xs font-bold mb-2"
      for="grid-state"
    >Change Date</label>
    <div class="relative">
      <input
        type="date"
        min="2020-01-22"
        :max="todaysDate"
        @change="onChangeDate($event)"
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-state"
      />
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["onChangeDate"],
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
      todaysDate: `${date.getFullYear()}-${month()}-${date.getDate() - 1}`
    };
  }
};
</script>

<style>
</style>