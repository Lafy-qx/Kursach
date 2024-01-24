<template>
  <div class="basketContainer">
    <div class="basketContainer__basket" v-if="isAuth">
      <div class="basketContainer__basket__list">
        <!-- Кол-во товаров в корзине -->
        <div class="basketContainer__basket__list__count">
          <h1>Количество товаров в корзине: 10</h1>
        </div>
        <!-- Карточки для корзины -->
        <BasketCard v-for="n in 10" />

      </div>
      <!-- Общая сумма товаров в корзине -->
      <div class="basketContainer__basket__allOrderBlock">
        <div class="basketContainer__basket__allOrderBlock__allOrder">Тут типа общая цена всей корзины</div>
      </div>

    </div>
    <div class="basketContainer__notAuth" v-if="!isAuth">
      <div class="basketContainer__notAuth__auth">
        <h1 class="basketContainer__notAuth__auth-warning">Требуется авторизация</h1>
        <router-link class="basketContainer__notAuth__auth-button" to="/auth">
          Войти
        </router-link>

      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import BasketCard from '@/components/BasketPage/BasketCard.vue';


export default defineComponent({
  name: 'Basket',
  components: {
    BasketCard
  },
  mounted() {
    this.isAuth = JSON.parse(localStorage.getItem('authCheck') as string ?? this.isAuth)
  },
  data() {
    return {
      isAuth: false,
    }
  },
});
</script>
  
  <!-- СТИЛИ -->
<style lang="scss" scoped>
* {
  // border: 1px solid #000;

}

.p5 {
  padding: 5px 10px;
}

.basketContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: var(--width-container);
  max-height: max-content;

  &__notAuth {
    box-shadow: 0px 22px 20px 0px rgba(188, 188, 188, 0.312);
    background: var(--second-color);
    justify-content: center;
    border-radius: 5px;
    display: flex;
    width: 80%;
    height: 80%;

    &__auth {
      width: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;

      &-warning {
        font-size: 1.8rem;
        padding: 5px;
      }

      &-button {
        color: var(--second-color-text);
        font-size: 16px;
        margin-top: 20px;
        height: 40px;
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--button-color);
        border-radius: 5px;

        &:hover {
          box-shadow: 0px 0px 10px 5px rgba(248, 176, 121, 0.576);

        }
      }
    }
  }


  &__basket {
    box-shadow: 0px 22px 20px 0px rgba(188, 188, 188, 0.312);
    background: var(--second-color);
    border-radius: 5px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    max-height: max-content;

    &__list {
      padding: 5px;
      width: 75%;

      &__count {
        height: 100px;
      }
    }

    &__allOrderBlock {
      width: 25%;
      max-height: max-content;
      padding: 10px;

      &__allOrder {
        height: 250px;
        margin-top: 105px;
        border-radius: 5px;
        box-shadow: 0px 22px 20px 0px rgba(188, 188, 188, 0.312);


      }
    }

  }
}
</style>