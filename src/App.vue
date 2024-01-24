<template>
  <Header></Header>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue';


export default defineComponent({
  name: 'App',
  components: {
    Header,

  },
  data() {
    return {
      //
    }
  },
})
</script>

<!-- СТИЛИ -->
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  // color: var(--main-text-color);
  text-decoration: none;
}



:root {
  --main-text-color: #2D3250; // Текст
  --second-color-text: #f1f8ff; //Второстепенный цвет


  --button-color: #F8B179;//Кнопки
  --main-color: #676F9D;

  --second-color: #ffffff;// доп цвет фона
  --bg-color: #F3F3F3; //основной цвет фона
  --width-container: 1600px;
}

body {
  background: var(--bg-color);

}
</style>

<style lang="scss" scoped>
.container {
  padding: 0% 15%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  max-height: max-content;
}
</style>
