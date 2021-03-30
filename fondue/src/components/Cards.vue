<template>
    <div>
        <div v-for="item in content" :key="item.id" class="element">
            <Card
                @changeActive="changeActive"
                v-if="item.type === 'card'"
                :text="item.text"
                :id="item.id"
                :active="item.active"
            />
            <Category
                @changeActive="changeActive"
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
    },
};
</script>
