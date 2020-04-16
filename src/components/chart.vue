<template>
  <div>
    <pie-chart
      :data="chartdata"
      :donut="true"
      :legend="false"
      :colors="['#ffc107', '#dc3545', '#28a745']"
      height="150px"
      width="150px"
    ></pie-chart>
  </div>
</template>

<script>
export default {
  name: "Chart",
  props: ["chartdata"]
};
</script>

<style scoped lang="scss"></style>
