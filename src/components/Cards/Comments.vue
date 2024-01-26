<template>
  <div class="commentsBlock">
    <div class="commentsBlock__formComments">

      <div class="commentsBlock__formComments__textarea">
        <div class="commentsBlock__formComments__textarea__block">
          Комментарий: <br>
          <textarea name="" id="" cols="60" rows="5"></textarea>
          <v-rating class="commentsBlock__formComments__textarea__block-star" hover :length="5" size="x-large"
            :model-value="3" />
          <button>отправить</button>

        </div>
      </div>
    </div>
    <div class="commentsBlock__header">
      <h2 class="commentsBlock__header-feedback">Все отзывы: 12</h2>
    </div>

    <div class="commentsBlock__body">
      <Comment v-for="n in 5" />
    </div>

  </div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';
import Comment from '@/components/Cards/Comment.vue';


export default defineComponent({
  name: 'Comments',
  components: {
    Comment
  },

});
</script>
    
    <!-- СТИЛИ -->
<style lang="scss" scoped>
* {
  // border: 1px solid #000;
}

.commentsBlock {
  height: max-content;

  &__header {
    height: 100px;
    display: flex;
    align-items: center;
  }

  &__body {
    height: max-content;


  }

  &__formComments {
    margin-top: 10px;
    min-height: 200px;

    &__form {
      font-size: 18px;
      display: flex;
      justify-content: space-between;

      label {
        padding: 10px;
      }

      &-input {
        height: 30px;
        border: 2px solid #F8B179;
        outline: 0;
        width: 620px;

        &::placeholder {
          color: var(--main-text-color);
        }
      }
    }

    &__textarea {
      &__block {
        padding: 10px;
        display: flex;
        flex-direction: column;

        &-star {
          width: 620px;

          color: #F8B179;
        }

        textarea {
          width: 620px;
          border: 2px solid #F8B179;
          outline: 0;

        }

        button {
          padding: 5px;
          width: 620px;
          border-radius: 5px;
          border: 2px solid #F8B179;

          &:hover {
            background: var(--button-color);
            color: var(--second-color-text);
            box-shadow: 0px 0px 10px 5px rgba(248, 176, 121, 0.576);
          }
        }
      }
    }
  }
}
</style>
    