<template>
    <div class="category-wrapper">
        <div class="category">
            <Cards
                @changeContent="changeContent"
                @changeActive="changeActive"
                :content="content"
            />
        </div>
    </div>
</template>
<script>
// ! IMPORTANT
//FIXME fix "Failed to resolve component: Cards"

import Cards from './Cards';

export default {
    name: 'Category',
    components: {
        Cards,
    },

    props: {
        content: Object,
    },
    methods: {
        changeActive(id) {
            this.$emit('changeActive', id);
        },
        changeContent(id, content) {
            this.$emit('changeContent', id, content);
        },
    },
};
</script>
<style scoped>
.category {
    padding: 35px;
}
.category-wrapper {
    border: solid darkgrey 1pt;
    margin: auto;
    margin-top: 25px;
    max-width: calc(var(--card-width) + var(--category-additional-width));
    background-color: #00000010;
}
.card-toolbar {
    margin-top: -1px;
}
</style>
