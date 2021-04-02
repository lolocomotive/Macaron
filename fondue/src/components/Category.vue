<template>
    <div class="category-wrapper">
        <CategoryToolbar
            @deleteCategory="deleteCategory"
            :title="title"
            :active="true"
        />
        <div :class="'category' + (isSubcategory ? ' sub' : '')">
            <Cards
                @deleteItem="deleteItem"
                @deleteCategory="passDeleteCategory"
                @changeContent="changeContent"
                @changeActive="changeActive"
                :content="content"
                :isSubcategory="true"
            />
        </div>
    </div>
</template>
<script>
import Cards from './Cards.vue';
import CategoryToolbar from './CategoryToolbar';
export default {
    name: 'Category',
    components: {
        Cards,
        CategoryToolbar,
    },

    props: {
        content: Object,
        id: Number,
        cards: Object,
        isSubcategory: Boolean,
        title: String,
    },
    methods: {
        changeActive(id) {
            this.$emit('changeActive', id);
        },
        changeContent(id, content) {
            this.$emit('changeContent', id, content);
        },
        deleteCategory() {
            this.$emit('deleteCategory', this.id);
        },
        passDeleteCategory(id) {
            this.$emit('deleteCategory', id);
        },
        deleteItem(id) {
            this.$emit('deleteItem', id);
        },
    },
};
</script>

<style scoped>
.category {
    padding: 35px;
    padding-bottom: 20px;
}
.category.sub {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-top: 15px;
}
.category-wrapper {
    box-shadow: 0px 0px 0px 1pt #00000030;
    margin: auto;
    margin-bottom: 25px;
    max-width: calc(var(--card-width) + var(--category-additional-width));
    background-color: #00000010;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
}
</style>
