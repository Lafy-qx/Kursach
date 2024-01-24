<template>
  <div class="authContainer">

    <div class="authContainer__auth">

      <div v-if="togle" class="authContainer__auth__login">

        <div class="authContainer__auth__login__header">
          <Button class="authContainer__auth__login__header-authButton active mr">Войти</Button>
          <Button @click="togleAuthReg" class="authContainer__auth__login__header-authButton">Зарегистрироваться</Button>
        </div>

        <div class="authContainer__auth__login__input ">
          <label for="">Логин: <br><input type="text" class="authContainer__auth__login__input-inputForm"> </label><br>
          <label for="">Пароль: <br><input type="text" class="authContainer__auth__login__input-inputForm"> </label><br>
          <button class="authContainer__auth__login__input-enterButton" @click="auth">Войти</button>
        </div>

      </div>
      <div v-if="!togle" class="authContainer__auth__login">

        <div class="authContainer__auth__login__header">
          <Button @click="togleAuthLogin" class="authContainer__auth__login__header-authButton">Войти</Button>
          <Button class="authContainer__auth__login__header-authButton active ml">Зарегистрироваться</Button>
        </div>

        <div class="authContainer__auth__login__input">
          <label for="">Логин: <br><input type="text" class="authContainer__auth__login__input-inputForm"> </label><br>
          <label for="">Пароль: <br><input type="text" class="authContainer__auth__login__input-inputForm"> </label><br>
          <label for="">Повторите пароль: <br><input type="text" class="authContainer__auth__login__input-inputForm">
          </label><br>
          <label for="">Почта: <br><input type="text" class="authContainer__auth__login__input-inputForm"> </label><br>
          <label for="">Номер: <br><input type="text" class="authContainer__auth__login__input-inputForm"> </label><br>
          <button class="authContainer__auth__login__input-enterButton">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import router from "@/router";


export default defineComponent({
  name: 'AuthView',
  components: {
  },
  mounted() {
    this.togle = JSON.parse(localStorage.getItem('authWindow') as string ?? this.togle)
  },
  data() {
    return {
      togle: true,
    }
  },
  methods: {
    togleAuthReg() {
      if (this.togle == true) {
        this.togle = false
        localStorage.setItem('authWindow', "false");
      }
    },
    togleAuthLogin() {
      if (this.togle == false) {
        this.togle = true
        localStorage.setItem('authWindow', "true");
      }
    },
    auth() {
      localStorage.setItem('authCheck', "true");
      router.push('/profile')
    }
  }
});



</script>
  
  <!-- СТИЛИ -->
<style lang="scss" scoped>
* {
  // border: 1px solid #000;

}

.window {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.active {
  border-bottom: 3px solid #F8B179;

}

.ml {
  margin-left: 15px;
}

.mr {
  margin-right: 15px;
}

.authContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: var(--width-container);

  &__auth {
    box-shadow: 0px 22px 20px 0px rgba(188, 188, 188, 0.312);
    background: var(--second-color);
    border-radius: 5px;
    width: 80%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__login {
      width: 80%;
      height: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__header {
        font-size: 18px;
        justify-content: space-around;
        height: 50px;
        display: flex;
      }

      &__input {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        font-size: 18px;

        &-enterButton {
          height: 40px;
          border-radius: 5px;
          border: 2px solid #F8B179;

          &:hover {
            background: var(--button-color);
            color: var(--second-color-text);
            box-shadow: 0px 0px 10px 5px rgba(248, 176, 121, 0.576);
            

          }
        }

        &-inputForm {
          padding-left: 3px;
          height: 40px;
          border: 2px solid #F8B179 !important;
          outline: 0;
          border: none;
          width: 300px;

          &::placeholder {
            color: var(--main-text-color);
          }
        }
      }
    }
  }
}
</style>
  