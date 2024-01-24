<template>
    <div class="detailCardContainer">
        <div class="infoBlock">
            <div class="infoBlock__imgBlock">
                <div class="infoBlock__imgBlock-img">img</div>
                <div class="infoBlock__imgBlock-slider">Похожие</div>
            </div>
            <div class="infoBlock__infoItemBlock">
                <div class="infoBlock__infoItemBlock__items">
                    <div class="infoBlock__infoItemBlock__items__titleBlock">
                        <p class="infoBlock__infoItemBlock__items__titleBlock-title">Название карточки</p>
                    </div>
                    <div class="infoBlock__infoItemBlock__items__starsBlock">
                        <v-rating class="infoBlock__infoItemBlock__items__starsBlock-star" readonly :length="5" :size="30"
                            :model-value="3" />
                        <div class="infoBlock__infoItemBlock__items__starsBlock-count">кол-во</div>
                    </div>
                    <div class="infoBlock__infoItemBlock__items__priceBlock">
                        <p>200$</p>
                        <div class="infoBlock__infoItemBlock__items__priceBlock__add">
                            <button class="p5 infoBlock__infoItemBlock__items__priceBlock__add-minus">-</button>
                            <p class="p5 infoBlock__infoItemBlock__items__priceBlock__add-addCounter">1</p>
                            <button class="p5 infoBlock__infoItemBlock__items__priceBlock__add-plus">+</button>
                        </div>
                    </div>
                    <div class="infoBlock__infoItemBlock__items-subtitleBlock">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus quis, magni nisi iste
                            dolorum eum eaque autem iusto mollitia, ad inventore explicabo et nesciunt. Modi qui quam
                            temporibus suscipit? Ex! <br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus nihil velit consequuntur
                            illo iste reprehenderit voluptatem eaque accusamus architecto, sequi dolorem nostrum autem
                            veniam quasi itaque recusandae suscipit! Earum.</p>
                    </div>
                </div>
                <div class="infoBlock__infoItemBlock__buttons">
                    <div class="infoBlock__infoItemBlock__buttons-button">Перейти к оформлению</div>
                    <div class="infoBlock__infoItemBlock__buttons-button">В корзину</div>
                </div>
            </div>
        </div>
        <div class="headerDescription" v-if="visibility">
            <div class="headerDescription__togleButton active mr">Рекомендации</div>
            <div class="headerDescription__togleButton" @click="commentsCard">Комментарии</div>
        </div>
        <div class="headerDescription" v-else>
            <div class="headerDescription__togleButton" @click="recomendsCard">Рекомендации</div>
            <div class="headerDescription__togleButton active ml"> Комментарии</div>
        </div>
        <div class="Description">
            <Recomends v-if="visibility"></Recomends>
            <Comments v-else></Comments>

        </div>
    </div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';
import Comments from '@/components/Cards/Comments.vue';
import Recomends from '@/components/Cards/Recomends.vue';


export default defineComponent({
    name: 'DetailCard',
    components: {
        Comments, Recomends
    },
    mounted() {
        this.visibility = JSON.parse(localStorage.getItem('visibility') as string ?? this.visibility)
    },
    data() {
        return {
            visibility: true,
        }
    },
    methods: {
        commentsCard() {
            if (this.visibility == true) {
                this.visibility = false
                localStorage.setItem('visibility', "false");
            }
        },
        recomendsCard() {
            if (this.visibility == false) {
                this.visibility = true
                localStorage.setItem('visibility', "true");
            }
        },
    },


});
</script>
    
    <!-- СТИЛИ -->
<style lang="scss" scoped>
* {
    // border: 1px solid #000;
}

.ml {
    margin-left: 10px;
}

.mr {
    margin-right: 10px;
}

.active {
    border-bottom: 3px solid #F8B179;
}

.detailCardContainer {
    color: var(--main-text-color);

    display: flex;
    width: 100%;
    max-width: var(--width-container);
    // max-height: max-content;
    flex-direction: column;
}

.infoBlock {
    min-height: 600px;
    max-height: max-content;
    display: flex;

    &__imgBlock {
        width: 40%;

        &-img {
            height: 400px;
            border-radius: 5px;
            background: #F8B179;
            box-shadow: 0px 22px 20px 0px rgba(188, 188, 188, 0.312);
        }

        &-slider {
            margin-top: 30px;
            min-height: 180px;
            max-height: max-content;

        }
    }

    &__infoItemBlock {
        max-height: max-content;

        width: 60%;
        padding: 0px 20px;
        display: flex;
        flex-direction: column;

        &__items {
            max-height: max-content;
            min-height: 565px;

            &__titleBlock {
                &-title {
                    font-size: 30px;
                }
            }

            &__starsBlock {
                height: 50px;
                display: flex;
                padding: 10px 0px;

                &-star {
                    display: flex;
                    align-items: center;
                    color: #F8B179;
                }

                &-count {
                    display: flex;
                    align-items: center;
                    margin-left: 100px;
                }
            }

            &__priceBlock {
                display: flex;
                justify-content: space-between;
                padding: 10px 0px;
                font-size: 30px;
                font-weight: 500;

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

            &-subtitleBlock {
                max-height: max-content;

                padding: 10px 0px;

                font-size: 20px;
                color: #2d325088;
            }
        }

        &__buttons {
            height: 45px;
            display: flex;
            justify-content: space-between;

            &-button {
                padding: 15px;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--button-color);
                color: var(--second-color-text);

                &:hover {
                    box-shadow: 0px 0px 10px 5px rgba(248, 176, 121, 0.576);
                }
            }
        }
    }
}

.headerDescription {
    display: flex;
    align-items: start;
    justify-content: center;
    padding: 50px 0px;

    &__togleButton {
        padding: 5px;
        font-size: 18px;

    }
}

.Description {
    min-height: 100vh;
    max-height: max-content;
}
</style>
    