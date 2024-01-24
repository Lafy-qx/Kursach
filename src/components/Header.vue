<!-- СКРИПТЫ -->
<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
export default defineComponent({
    name: 'Header',
    components: {
    },
    data() {
        return {
        }
    }
});
</script>

<!-- КОНТЕНТ -->
<template>
    <div class="header">
        <div class="nav">
            <!-- ЛОГОТИП -->
            <div class="logo">
                <router-link to="/">
                    <img src="assets/Header/logo.png" alt="logo" class="logo-img">
                </router-link>
            </div>
            <!-- БЛОК НАВИГАЦИИ -->
            <div class="buttonBlock">
                <!-- ПОИСК -->
                <div class="search">
                    <input type="text" class="search-input" placeholder="Поиск...">
                    <router-link to="/search">
                        <div class="search-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20"
                                fill="2D3250">
                                <path
                                    d="M16.3333 17.5L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333C6.40278 13.3333 5.12167 12.8089 4.07333 11.76C3.025 10.7111 2.50056 9.43 2.5 7.91667C2.5 6.40278 3.02444 5.12167 4.07333 4.07333C5.12222 3.025 6.40333 2.50056 7.91667 2.5C9.43056 2.5 10.7119 3.02444 11.7608 4.07333C12.8097 5.12222 13.3339 6.40333 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L17.5 16.3333L16.3333 17.5ZM7.91667 11.6667C8.95833 11.6667 9.84389 11.3022 10.5733 10.5733C11.3028 9.84444 11.6672 8.95889 11.6667 7.91667C11.6667 6.875 11.3022 5.98972 10.5733 5.26083C9.84444 4.53194 8.95889 4.16722 7.91667 4.16667C6.875 4.16667 5.98972 4.53139 5.26083 5.26083C4.53194 5.99028 4.16722 6.87556 4.16667 7.91667C4.16667 8.95833 4.53139 9.84389 5.26083 10.5733C5.99028 11.3028 6.87556 11.6672 7.91667 11.6667Z"
                                    fill="#F1F8FF" />
                            </svg>
                        </div>
                    </router-link>
                </div>

                <!-- Кнопки -->
                <router-link to="/profile">
                    <div class="buttonBlock-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_41_4)">
                                <path
                                    d="M9.993 10.573C10.584 10.573 11.1691 10.4566 11.7151 10.2305C12.261 10.0043 12.7571 9.67284 13.175 9.25498C13.5928 8.83712 13.9243 8.34104 14.1505 7.79508C14.3766 7.24911 14.493 6.66395 14.493 6.073C14.493 5.48205 14.3766 4.89689 14.1505 4.35092C13.9243 3.80496 13.5928 3.30888 13.175 2.89102C12.7571 2.47316 12.261 2.14169 11.7151 1.91554C11.1691 1.6894 10.584 1.573 9.993 1.573C8.79953 1.573 7.65494 2.04711 6.81102 2.89102C5.96711 3.73493 5.493 4.87953 5.493 6.073C5.493 7.26647 5.96711 8.41107 6.81102 9.25498C7.65494 10.0989 8.79953 10.573 9.993 10.573ZM10 3.18547e-07C11.3172 -0.000428752 12.598 0.432609 13.6446 1.2323C14.6913 2.03199 15.4457 3.15389 15.7915 4.42489C16.1373 5.6959 16.0552 7.04537 15.558 8.26511C15.0607 9.48484 14.1759 10.507 13.04 11.174C16.728 12.284 19.498 15.392 19.995 19.252C20.042 19.619 19.769 19.952 19.385 19.997C19.002 20.042 18.652 19.782 18.605 19.415C18.065 15.225 14.436 12.07 10.035 12.07C5.61 12.07 1.934 15.231 1.395 19.415C1.348 19.782 0.998004 20.042 0.615004 19.997C0.231004 19.952 -0.0419962 19.619 0.00500385 19.252C0.501004 15.408 3.286 12.304 6.98 11.184C5.84069 10.5201 4.95182 9.4993 4.45084 8.27953C3.94986 7.05975 3.86466 5.70891 4.20842 4.43585C4.55218 3.1628 5.30576 2.03844 6.35263 1.23663C7.3995 0.434818 8.68135 0.000209262 10 3.18547e-07Z"
                                    fill="#F1F8FF" />
                            </g>
                            <defs>
                                <clipPath id="clip0_41_4">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </router-link>
                <router-link to="/basket">
                    <div class="buttonBlock-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M16 16C14.89 16 14 16.89 14 18C14 18.5304 14.2107 19.0391 14.5858 19.4142C14.9609 19.7893 15.4696 20 16 20C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18C18 17.4696 17.7893 16.9609 17.4142 16.5858C17.0391 16.2107 16.5304 16 16 16ZM0 0V2H2L5.6 9.59L4.24 12.04C4.09 12.32 4 12.65 4 13C4 13.5304 4.21071 14.0391 4.58579 14.4142C4.96086 14.7893 5.46957 15 6 15H18V13H6.42C6.3537 13 6.29011 12.9737 6.24322 12.9268C6.19634 12.8799 6.17 12.8163 6.17 12.75C6.17 12.7 6.18 12.66 6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.58 16.3 9.97L19.88 3.5C19.95 3.34 20 3.17 20 3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2H4.21L3.27 0M6 16C4.89 16 4 16.89 4 18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20C6.53043 20 7.03914 19.7893 7.41421 19.4142C7.78929 19.0391 8 18.5304 8 18C8 17.4696 7.78929 16.9609 7.41421 16.5858C7.03914 16.2107 6.53043 16 6 16Z"
                                fill="#F1F8FF" />
                        </svg>
                    </div>
                </router-link>
            </div>

        </div>
    </div>
</template>


<!-- СТИЛИ -->
<style lang="scss" scoped>
* {
    // border: 1px solid #000;
}

@mixin flexToCenterAlign {
    display: flex;
    align-items: center;
}

@mixin flexToCenterJustify {
    display: flex;
    justify-content: center;
}

.header {
    justify-content: center;
    display: flex;
    padding: 0% 15%;
    background: var(--second-color);
    box-shadow: 0px 20px 26px 0px rgba(0, 0, 0, 0.1);
    height: 150px;
    display: flex;
    max-height: max-content;
}

.nav {
    max-width: var(--width-container);
    @include flexToCenterAlign;
    justify-content: space-between;
}

.logo {
    width: 25%;
    padding: 0;
    margin: 0;

    &-img {
        padding: 10px;
        width: 100%;
    }
}


.buttonBlock {
    width: 70%;
    display: flex;
    justify-content: space-between;

    &-button {
        margin-left: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background: #F8B179;
        padding: 10px;

        &:hover {
            box-shadow: 0px 0px 10px 5px rgba(248, 176, 121, 0.576);
            
        }
    }
}

.search {
    width: 100%;
    max-width: var(--width-container);

    @include flexToCenterAlign;

    &-input {
        padding-left: 15px;
        border-radius: 5px 0px 0px 5px;
        
        width: 100%;
        height: 100%;
        border: 3px solid #F8B179 !important;
        outline: 0;
        border: none;

        &::placeholder {
            color: var(--main-text-color);


        }

        &:focus::placeholder {
            color: transparent;
        }
    }

    &-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0px 5px 5px 0px;
        background: #F8B179;
        padding: 10px;

        &:hover {
            box-shadow: 0px 0px 10px 5px rgba(248, 177, 121, 0.2);
        }
    }

}
</style>