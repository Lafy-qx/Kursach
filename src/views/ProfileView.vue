<template>
  <div class="profileContainer">
    <!-- Проверка авторизованности пользователя -->
    <div class="profileContainer__profile" v-if="isAuth">
      <div class="profileContainer__profile__infoBlock">
        <div class="profileContainer__profile__infoBlock__info">
          <!-- Блок имени -->
          <div class="profileContainer__profile__infoBlock__info__name">
            <div class="profileContainer__profile__infoBlock__info__name-name">Игорь Игорев</div>
            <div class="profileContainer__profile__infoBlock__info__email__editButton">
              <button class="profileContainer__profile__infoBlock__info__email__editButton-button">Изменить</button>
            </div>
          </div>
          <!-- Блок почты -->
          <div class="profileContainer__profile__infoBlock__info__email">
            <div class="profileContainer__profile__infoBlock__info__email-email">igor.igorev@mail.ru</div>
            <div class="profileContainer__profile__infoBlock__info__email__editButton">
              <button class="profileContainer__profile__infoBlock__info__email__editButton-button">Изменить</button>
            </div>
          </div>
          <!-- Блок телефона -->
          <div class="profileContainer__profile__infoBlock__info__phone">
            <div class="profileContainer__profile__infoBlock__info__phone-phone">igor.igorev@mail.ru</div>
            <div class="profileContainer__profile__infoBlock__info__email__editButton">
              <button class="profileContainer__profile__infoBlock__info__email__editButton-button">Изменить</button>
            </div>
          </div>

        </div>
        <!-- История покупок -->
        <div class="profileContainer__profile__infoBlock__history">

        </div>
      </div>
    </div>
    <div class="profileContainer__notAuth" v-else>
      <div class="profileContainer__notAuth__auth">
        <h1 class="profileContainer__notAuth__auth-warning">Требуется авторизация</h1>
        <router-link class="profileContainer__notAuth__auth-button" to="/auth">
          Войти
        </router-link>

      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
// import CardHistory from '@/components/CardHistory.vue';


export default defineComponent({
  name: 'Profile',
  components: {
    // CardHistory
  },
  mounted() {
    this.isAuth = JSON.parse(localStorage.getItem('authCheck') as string ?? this.isAuth)
  },
  data() {
    return {
      isAuth: false,
      userName: "User"
    }
  },
});
</script>
  
  <!-- СТИЛИ -->
<style lang="scss" scoped>
* {
  // border: 1px solid #000;

}

.profileContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: var(--width-container);

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

  &__profile {
    box-shadow: 0px 22px 20px 0px rgba(188, 188, 188, 0.312);
    background: var(--second-color);
    border-radius: 5px;
    width: 100%;
    display: flex;
    justify-content: center;

    

    &__infoBlock {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &__info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
      }

      &__info,
      &__history {
        height: 350px;
        width: 80%;
        margin: 10px;

        &__email,
        &__phone,
        &__name {
          box-shadow: 0px 22px 20px 0px rgba(188, 188, 188, 0.312);
          border-radius: 5px;
          display: flex;
          flex-direction: column;

          &-email,
          &-name,
          &-phone {
            height: 80%;
            font-size: 1.2rem;
            padding: 10px;
            display: flex;
            align-items: center;
            color: #2d3250c6;

          }

          &-phone {}

          &-name {}

          &__editButton {
            display: flex;
            justify-content: end;
            margin: 10px;

            &-button {
              padding: 5px;
              border-radius: 5px;
              width: 50%;
              border: none;
              outline: none;
              background: var(--button-color);
              color: var(--second-color-text);

              &:hover {
                box-shadow: 0px 0px 10px 5px rgba(248, 176, 121, 0.576);


              }
            }
          }
        }
      }

    }

  }


}
</style>