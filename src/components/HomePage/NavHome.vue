<template>
  <div class="homeNav">
    <div class="homeNav-item" v-for="n in 10">ДЛИННАЯ КАТЕГОРИЯ</div>

  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavHome',
  components: {
  },
});
</script>
  
  <!-- СТИЛИ -->
<style lang="scss" scoped>
* {
  // border: 1px solid #000;
}

.homeNav {
  width: 250px;

  &-item {
    padding: 8px;
    margin: 5px 0px;
    border-radius: 0% 5px 5px 0%;
    display: flex;

    // Анимация слева-направо
    display: inline-block;
    text-align: center;

    background: linear-gradient(to left, rgba(225, 158, 151, 0) 50%, #F8B179 50%) right;
    background-size: 200%;
    transition: .3s ease-out;


    &:hover {
      background-position: 0 100%;
    }


  }
}
</style>