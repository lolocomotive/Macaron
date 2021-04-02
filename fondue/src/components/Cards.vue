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
    </div>
</template>
<script>
import Card from './Card';
//import Category from './Category';

export default {
    name: 'Cards',
    components: { Card /*Category*/ },
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
        deleteItem(id) {
            this.$emit('deleteItem', id);
        },
    },
    beforeCreate: function () {
        this.$options.components.Category = require('./Category.vue').default;
    },
};
</script>
