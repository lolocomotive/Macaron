<template>
    <div :class="'category-toolbar' + (active ? ' active' : '')">
        <Icon icon="fas fa-angle-down" @click="collapseCategory" />
        <div @input="changeTitle" contenteditable class="category-toolbar-text">
            {{ title }}
        </div>
        <div class="category-toolbar-icons">
            <Icon icon="fas fa-trash" @click="deleteCategory" />
        </div>
    </div>
</template>
<script>
import Icon from './Icon';
export default {
    name: 'CategoryToolbar',
    props: {
        title: String,
        active: Boolean,
    },
    methods: {
        deleteCategory() {
            this.$emit('deleteCategory');
        },
        collapseCategory() {
            //TODO implement
        },
        changeTitle() {
            this.$emit('changeTitle', this.$el.children[1].innerText);
        },
    },
    components: {
        Icon,
    },
};
</script>
<style scoped>
.category-toolbar {
    color: var(--background);
    transition: all 0.2s;
    overflow: hidden;
    user-select: none;
    padding: 5px;
    border-bottom: solid var(--background-shade-3) 1pt;
    background-color: var(--foreground-tone);
    display: flex;
}
.category-toolbar-text {
    flex: 1;
}
.category-toolbar:focus-within {
    color: var(--background);
    background-color: var(--background-tone-1);
    outline: solid var(--foreground-tone) 2pt;
}
.dark .category-toolbar:focus-within {
    color: var(--foreground);
    background-color: var(--background);
}
.category-toolbar-text:focus {
    outline: none;
}
</style>
