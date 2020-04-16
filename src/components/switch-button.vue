<template>
  <div class="theme-switch-wrapper">
    <em><img src="../img/moon-regular.svg" alt="Dark mode"/></em>
    <label class="theme-switch" for="checkbox">
      <input type="checkbox" @change="toggleMode($event)" id="checkbox" />
      <div class="slider round"></div>
    </label>
    <em><img src="../img/moon-solid.svg" alt="Dark mode"/></em>
  </div>
</template>

<script>
export default {
  props: ["toggleMode"],
};
</script>

<style lang="scss" scoped>
.theme-switch-wrapper {
  display: flex;
  align-items: center;

  em {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 1rem;

    img {
      height: 25px;
    }
  }

  .theme-switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;

    input {
      display: none;
    }
  }
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: 0.4s;
  width: 26px;
}

input:checked + .slider {
  background-color: #66bb6a;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
