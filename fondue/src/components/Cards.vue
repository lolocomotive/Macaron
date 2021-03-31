<template>
    <div>
        <div v-for="item in content" :key="item.id" class="element">
            <Card
                @changeActive="changeActive"
                @changeContent="changeContent"
                v-if="item.type === 'card'"
                :text="item.text"
                :id="item.id"
                :active="item.active"
                :type="item.cardType"
            />
            <Category
                @changeActive="changeActive"
                @changeContent="changeContent"
                v-else-if="item.type === 'category'"
                :content="item.content"
                :id="item.id"
            />
        </div>
    </div>
</template>
<script>
import Card from './Card';
import Category from './Category';
export default {
    name: 'Cards',
    components: { Card, Category },
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
