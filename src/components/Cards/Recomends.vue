<template>
  <div class="recomendsBlock">
    <template v-for="(product, index) in productsArr" :key="index">
      <router-link :to="`${product.id}`">
        <Card :product="product" />
      </router-link>
    </template>
  </div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/Card.vue';


export default defineComponent({
  name: 'Description',
  components: {
    Card
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
.recomendsBlock {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  justify-content: space-between;
  width: 100%;
}
</style>
    