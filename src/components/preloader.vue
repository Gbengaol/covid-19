<template>
  <div class="flex flex-col justify-center items-center w-full h-full">
    <div class="lds-hourglass relative"></div>
    <h3 class="font-bold text-red uppercase">Loading Data, please wait...</h3>
  </div>
</template>

<style scoped>
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #dc3545;
  border-color: #dc3545 transparent #dc3545 transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>
