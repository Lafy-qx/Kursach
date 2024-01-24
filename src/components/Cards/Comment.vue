<template>
    <div class="CommentBlock">
        <div class="CommentBlock__header">
            <div class="CommentBlock__header-name">Игорь Игорев</div>
            <div class="CommentBlock__header-date">25-02-2023</div>
        </div>
        <div class="CommentBlock__body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate veritatis necessitatibus iusto
                eligendi sed quae distinctio in excepturi, id obcaecati, molestiae, ex dignissimos. Eveniet dolore
                aspernatur ab facilis eum!</p>
        </div>
    </div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Comment',
    components: {
    },

});
</script>
    
    <!-- СТИЛИ -->
<style lang="scss" scoped>
* {
    // border: 1px solid #000;
}

.CommentBlock {
    min-height: 120px;
    max-height: max-content;
    margin: 15px 0px;
    border-radius: 5px;

    &:hover {
        box-shadow: 0px 22px 20px 0px rgba(188, 188, 188, 0.312);

    }

    &__header {
        display: flex;

        &-name,
        &-date {
            padding: 5px;
        }
    }

    &__body {
        padding: 5px;
        color: #2d325088;

    }
}
</style>
    