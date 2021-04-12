<template>
    <div :class="'card-toolbar' + (active ? ' active' : '')">
        {{ title }}
        <div class="category-toolbar-icons">
            <Icon icon="fas fa-trash" @click="deleteItem" />
        </div>
    </div>
</template>
<script>
import Icon from './Icon';
export default {
    name: 'CardToolbar',
    props: {
        title: String,
        active: Boolean,
    },
    methods: {
        deleteItem() {
            this.$emit('deleteItem');
        },
    },
    components: {
        Icon,
    },
};
</script>
<style scoped>
.card-toolbar {
    height: 0px;
    transition: all 0.2s;
    overflow: hidden;
    opacity: 0;
    color: var(--background);
    background-color: var(--foreground-tone);
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-toolbar.active {
    opacity: 1;
    height: 20px;
    padding: 5px;
}
</style>
