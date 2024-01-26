<template>
    <div class="detailCardContainer">
        <template v-for="(product, index) in productsArr" :key="index">
            <template v-if="$route.params.id == product.id">
                <div class="infoBlock">
                    <div class="infoBlock__imgBlock">
                        <div class="infoBlock__imgBlock-img">img</div>
                        <div class="infoBlock__imgBlock-slider">Похожие</div>
                    </div>
                    <div class="infoBlock__infoItemBlock">
                        <div class="infoBlock__infoItemBlock__items">
                            <div class="infoBlock__infoItemBlock__items__titleBlock">
                                <p class="infoBlock__infoItemBlock__items__titleBlock-title">{{ product?.title }}</p>
                            </div>
                            <div class="infoBlock__infoItemBlock__items__starsBlock">
                                <v-rating class="infoBlock__infoItemBlock__items__starsBlock-star" readonly :length="5"
                                    :size="30" :model-value="3" />
                                <div class="infoBlock__infoItemBlock__items__starsBlock-count">В наличии: {{ product?.in_stock }}</div>
                            </div>
                            <div class="infoBlock__infoItemBlock__items__priceBlock">
                                <p v-if="product?.discount == 0">{{ product?.price }}₽</p>
                                <div v-else class="lineBlock">
                                    <p class="lineBlock-line">{{ product?.price }}</p>
                                    <p>{{ product?.price - product?.price / 100 * product.discount }}₽</p>
                                </div>

                            </div>
                            <div class="infoBlock__infoItemBlock__items-subtitleBlock"
                                v-for="item in product.description.split('}{')">
                                {{ item }}
                            </div>
                        </div>
                        <div class="infoBlock__infoItemBlock__buttons">
                            <div class="infoBlock__infoItemBlock__buttons-button">Перейти к оформлению</div>
                            <div class="infoBlock__infoItemBlock__buttons-button">В корзину</div>
                        </div>
                    </div>
                </div>
            </template>
        </template>
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
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { defineComponent } from 'vue';
import Comments from '@/components/Cards/Comments.vue';
import Recomends from '@/components/Cards/Recomends.vue';


export default defineComponent({
    name: 'DetailCard',
    components: {
        Comments, Recomends
    },
    async mounted() {
        await this.$store.dispatch("fetchAllProducts");
        this.visibility = JSON.parse(localStorage.getItem('visibility') as string ?? this.visibility)
    },
    computed: {
        productsArr(): any {
            return this.$store.state.ProductState.allProducts
        }
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
    }, setup() {
        const route = useRoute();
        const productId = computed(() => route.params.id);
        return {
            productId,
        };
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
                
                padding: 10px 0px;
                font-size: 28px;
                font-weight: 500;

                .lineBlock {
                    display: flex;
                    align-items: center;
                    &-line {
                        margin-right: 10px;
                        font-size: 26px;
                        font-weight: 500;
                        text-decoration: line-through;
                        color: #2d325088;

                    }
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
    