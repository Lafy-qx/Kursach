<template lang="">
     <!-- Карточка для корзины -->
     <div class="card">
          <div class="card-img"></div>
          <!-- Информация о карточке -->
          <div class="card__infoBlock">
            <!-- Название -->
            <div class="card__infoBlock__info">
              <div class="card__infoBlock__info-title">НАЗВАНИЕ ТОВАРА</div>
              <div class="card__infoBlock__info-subtitle">Lorem ipsum dolor sit amet
                consectetur
                adipisicing elit. Quos eaque similique cupiditate nobis unde hic aut eveniet.</div>
            </div>
            <!-- Цена и кол-во -->
            <div class="card__infoBlock__priceBlock">
              <div class="card__infoBlock__priceBlock__counter">
                <p>200$</p>
              </div>
              <!-- Счетчик добавления -->
              <div class="card__infoBlock__priceBlock__add">
                <button class="p5 card__infoBlock__priceBlock__add-minus">-</button>
                <p class="p5 card__infoBlock__priceBlock__add-addCounter">1</p>
                <button class="p5 card__infoBlock__priceBlock__add-plus">+</button>
              </div>
            </div>
          </div>
        </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'BasketCard',
    components: {
    },
});
</script>
<style lang="scss" scoped>
* {
    // border: 1px solid #000;

}

.card {
    margin-top: 10px;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    width: 100%;
    height: 250px;

    &:hover {
        box-shadow: 0px 22px 20px 0px rgba(188, 188, 188, 0.312);

    }

    &-img {
        width: 35%;
        background: #F8B179;
        border-radius: 10px;
    }

    &__infoBlock {
        width: 65%;
        display: flex;

        &__info {
            padding: 15px;
            width: 70%;

            &-title {
                font-size: 20px;
            }

            &-subtitle {
                font-size: 16px;
                margin-top: 10px;
                color: #2d325088;
            }
        }

        &__priceBlock {
            width: 30%;
            display: flex;
            flex-direction: column;

            &__counter {
                font-size: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 50%;
            }

            &__add {
                    font-size: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &-plus {
                        height: 40px;
                        width: 40px;
                        border: 2px solid #F8B179;
                        border-radius: 0px 5px 5px 0px;
                        background: var(--button-color);
                        color: var(--second-color-text)
                    }

                    &-minus {
                        height: 40px;
                        width: 40px;
                        border: 2px solid #F8B179;
                        border-radius: 5px 0px 0px 5px;
                        background: var(--button-color);
                        color: var(--second-color-text)
                    }

                    &-addCounter {
                        height: 40px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 50px;
                        border: 2px solid #F8B179;
                    }
                }
        }
    }

}
</style>