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
<script lang="ts">
import Card from './Card.vue';
import Icon from './Icon.vue';

export default {
    name: 'Cards',
    components: { Card, Icon },
    props: {
        content: Object,
        cards: Object,
        isSubcategory: Boolean,
    },
    methods: {
        changeActive(id: Number) {
            this.$emit('changeActive', id);
        },
        deleteCategory(id: Number) {
            this.$emit('deleteCategory', id);
        },
        changeContent(id: Number, content: String) {
            this.$emit('changeContent', id, content);
        },
        deleteItem(id: Number) {
            this.$emit('deleteItem', id);
        },
        add() {
            //TODO implement element adding
        },
    },
    beforeCreate: function () {
        if (this.$options.components != undefined) {
            this.$options.components.Category = require('./Category.vue').default;
        }
    },
};
</script>
<style scoped>
.icon {
    display: block;
    color: var(--purple);
    margin: auto;
    transition: all 0.1s;
    font-size: 2em;
}
.icon:focus {
    outline: auto black 2pt;
    outline-offset: 10px;
    box-shadow: none;
    transform: scale(0.9);
}
</style>
