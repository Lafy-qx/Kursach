<!-- JS -->
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Card',
  components: {
  }, 
  data() {
    return {
      img : ''
    }
  },
});
</script>
<!-- КОНТЕНТ -->
<template >
  <router-link to="/DetailedCard">
    <div class="card">
      <div class="card__img">
        <img src="" alt="">12
        <button class="card__buttonCard-cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none">
            <path
              d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z"
              fill="#F1F8FF" />
          </svg></button>
      </div>
      <div class="card__price">200$</div>
      <div class="card__title">НАЗВАНИЕ КАРТОЧКИ</div>
      <div class="card__blockRating">
        <v-rating class="card__blockRating-star"  :length="5" :size="30" :model-value="2.5" half-increments />
        <div class="card__blockRating-count">кол-во</div>
      </div>

    </div>
  </router-link>
</template>
<!-- СТИЛИ -->

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  border: 1px solid #000;
}

@mixin ButtonStyle {
  border: none;
  padding: 5px;
  border-radius: 2px;
  color: #F1F8FF;
  background-color: #F8B179;
  height: 35px;

}

@mixin FlexAlign {
  display: flex;
  align-items: center;
}

.card {
  color: var(--main-text-color);

  background: var(--second-color);
  font-family: Roboto;
  padding: 10px;
  width: 100%;
  height: 400px;
  box-shadow: 0px 22px 20px 0px rgba(188, 188, 188, 0.312);


  &:hover {}

  &__img {
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: end;
    height: 65%;
    border-radius: 3px;
    background: #0080ff20
  }

  &__price {
    margin-top: 10px;
    @include FlexAlign;
    height: 35px;
    font-size: 20pt;
    font-weight: 500;
    width: 100%;
  }

  &__title {
    height: 50px;
    width: 100%;
    font-size: 16px;
  }

  &__blockRating {
    height: 10%;
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    justify-content: space-between;

    &-count {
      color: #2d325088;
    }

    &-star {
      color: #F8B179;
    }
  }

  &__buttonCard {
    display: flex;
    justify-content: space-between;
    bottom: 10px;
    width: 100%;

    &-info {
      @include ButtonStyle;
      width: 75%;

      &:hover {
        box-shadow: 0px 0px 10px 5px rgba(248, 176, 121, 0.4);
      }
    }

    &-cart {
      &:hover {
        box-shadow: 0px 0px 10px 5px rgba(248, 177, 121, 0.4);
      }

      @include ButtonStyle;
      border-radius: 50%;

    }

  }
}
</style>
  