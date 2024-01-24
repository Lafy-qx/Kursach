<template>
  <div class="homeConatiner">
    <!-- <div class="navBlock">
      <NavHome />
    </div> -->
    <Swiper />
    <div class="cards">
      <Card v-for="n in 20" />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Swiper from '@/components/Swiper.vue';

import Card from '@/components/Card.vue';
import NavHome from '@/components/HomePage/NavHome.vue';



export default defineComponent({
  name: 'HomeView',
  components: {
    Card, NavHome, Swiper
  },
});
</script>

<!-- СТИЛИ -->
<style lang="scss" scoped>
* {
  // border: 1px solid #000;
}

.homeConatiner {
  min-height: 100vh;
  max-height: max-content;
  width: 100%;
  max-width: var(--width-container);

}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  justify-content: space-between;
  width: 100%;
}
</style>
