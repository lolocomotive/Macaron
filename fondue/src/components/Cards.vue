<template>
    <div>
        <div v-for="item in content" :key="item" class="element">
            <Card
                @changeActive="changeActive"
                @changeContent="changeContent"
                @deleteItem="deleteItem"
                v-if="item.type === 'card'"
                :text="item.text"
                :id="item.id"
                :active="item.active"
                :type="item.cardType"
            />
            <Category
                @deleteItem="deleteItem"
                @deleteCategory="deleteCategory"
                @changeActive="changeActive"
                @changeContent="changeContent"
                @changeTitle="changeTitle"
                @addCard="passAddCard"
                v-else-if="item.type === 'category'"
                :content="item.content"
                :id="item.id"
                :cards="cards"
                :title="item.title"
                :isSubcategory="isSubcategory"
            />
        </div>
        <Icon @click="add" icon="far fa-plus-square" />
    </div>
</template>
<script>
import Card from './Card';
import Icon from './Icon';

export default {
    name: 'Cards',
    components: { Card, Icon },
    props: {
        content: Object,
        cards: Object,
        isSubcategory: Boolean,
    },
    methods: {
        changeActive(id) {
            this.$emit('changeActive', id);
        },
        deleteCategory(id) {
            this.$emit('deleteCategory', id);
        },
        changeContent(id, content) {
            this.$emit('changeContent', id, content);
        },
        changeTitle(id, title) {
            this.$emit('changeTitle', id, title);
        },
        deleteItem(id) {
            this.$emit('deleteItem', id);
        },
        passAddCard(id) {
            this.$emit('addCard', id);
        },
        add() {
            this.$emit('addCard');
        },
    },
    beforeCreate: function () {
        this.$options.components.Category = require('./Category.vue').default;
    },
};
</script>
<style scoped>
.icon {
    display: block;
    color: var(--secondary);
    margin: auto;
    transition: all 0.1s;
    font-size: 2em;
}
.icon:focus {
    outline: auto var(--secondary) 2pt;
    outline-offset: 10px;
    box-shadow: none;
    transform: scale(0.9);
}
</style>
