<template>
  <div class="recomendsBlock">
    <Card v-for="n in 12"/>
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

});
</script>
    
    <!-- СТИЛИ -->
<style lang="scss" scoped>
.recomendsBlock{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  justify-content: space-between;
  width: 100%;
}
</style>
    