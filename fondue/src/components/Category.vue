<template>
    <div
        :class="`category-wrapper ${presentationMode ? 'p' : 'e'} ${
            collapsed ? 'c' : 'o'
        }`"
    >
        <CategoryToolbar
            v-if="!presentationMode"
            @changeTitle="changeTitle"
            @deleteCategory="deleteCategory"
            :title="title"
            :active="true"
        />
        <div
            :class="`category ${isSubcategory ? ' sub' : ''} ${
                presentationMode ? 'p' : 'e'
            }`"
        >
            <Cards
                @addCard="addCard"
                @deleteItem="deleteItem"
                @deleteCategory="passDeleteCategory"
                @changeTitle="passChangeTitle"
                @changeContent="changeContent"
                @changeActive="changeActive"
                :content="content"
                :isSubcategory="true"
                :presentationMode="presentationMode"
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
    data() {
        return {
            collapsed: Boolean,
        };
    },
    props: {
        content: Object,
        id: Number,
        cards: Object,
        isSubcategory: Boolean,
        title: String,
        presentationMode: Boolean,
    },
    methods: {
        changeActive(id) {
            this.$emit('changeActive', id);
        },
        changeContent(id, content) {
            this.$emit('changeContent', id, content);
        },
        changeTitle(title) {
            this.$emit('changeTitle', this.id, title);
        },
        passChangeTitle(id, title) {
            this.$emit('changeTitle', id, title);
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
        addCard(id) {
            if (id == undefined) {
                id = this.id;
            }
            this.$emit('addCard', id);
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
    box-shadow: 0px 0px 0px 1pt var(--background-shade-3);
    margin: auto;
    margin-bottom: 25px;
    max-width: calc(var(--card-width) + var(--category-additional-width));
    background-color: var(--background-shade-1);
    border-radius: 5px 5px 0 0;
    overflow: hidden;
}
.category-wrapper.p {
    box-shadow: none;
}
</style>
