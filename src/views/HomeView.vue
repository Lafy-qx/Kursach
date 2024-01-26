<template>
  <div class="homeConatiner">
    <!-- <div class="navBlock">product
      <NavHome />
    </div> -->
    <Swiper />
    <H1>Рекомендации</H1>
    <div class="cards">
      <template v-for="(product, index) in productsArr" :key="index">
        <router-link :to="`DetailedCard/${product.id}`">
          <Card :product="product" />
        </router-link>

      </template>
    </div>
    <H1>Хит сезона</H1>
    <div class="cards">
      <template v-for="(product, index) in productsArr" :key="index">
        <router-link :to="`DetailedCard/${product.id}`">
          <Card :product="product" />
        </router-link>
      </template>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Swiper from '@/components/Swiper.vue';

import Card from '@/components/Card.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Card, Swiper
  },
  async mounted() {
    await this.$store.dispatch("fetchAllProducts");
  },
  methods: {
    addToBasketFunc(product: any) {
      this.$store.dispatch("addToBasket", product)
    },

  },
  computed: {
    productsArr(): any {
      return this.$store.state.ProductState.allProducts
    }
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
