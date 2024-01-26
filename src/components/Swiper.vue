<template>
    <div class="swiperBlock">
        <swiper :spaceBetween="30" :loop="true" :effect="'fade'" :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
        }" :pagination="{
    clickable: true,
}" :modules="modules" class="swiperBlock__swiper">
            <swiper-slide class="swiperBlock__swiper-slide"><img
                    src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
            <swiper-slide class="swiperBlock__swiper-slide"><img
                    src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide>
            <swiper-slide class="swiperBlock__swiper-slide"><img
                    src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide>
            <swiper-slide class="swiperBlock__swiper-slide"><img
                    src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>
        </swiper>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectFade, Navigation, Pagination, Autoplay],
        };
    },
};
</script>
<style scoped lang="scss">
* {
    // border: 1px solid #000;
}

.swiperBlock {
    height: 580px;

    &__swiper {
        height: 500px;
        width: 100%;
        border-radius: 10px;

        &-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1000px;


            img {
                width: 100%;

            }
        }
    }
}
</style>