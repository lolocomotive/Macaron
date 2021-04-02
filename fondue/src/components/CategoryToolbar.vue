<template>
    <div :class="'category-toolbar' + (active ? ' active' : '')">
        <div contenteditable class="category-toolbar-text">{{ title }}</div>
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
    },
    components: {
        Icon,
    },
};
</script>
<style scoped>
.category-toolbar {
    color: white;
    transition: all 0.2s;
    overflow: hidden;
    user-select: none;
    padding: 5px;
    border-bottom: solid #00000030 1pt;
    background-color: var(--light-purple);
    display: flex;
}
.category-toolbar-text {
    flex: 1;
}
.category-toolbar:focus-within {
    color: white;
    background-color: var(--purple);
    outline: solid var(--pink) 2pt;
}
.category-toolbar-text:focus {
    outline: none;
}
</style>
