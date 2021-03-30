<template>
    <div>
        <div v-for="item in content" :key="item.id" class="element">
            <Card v-if="item.type === 'card'" :text="item.text" :id="item.id" />
            <Category
                v-if="item.type === 'category'"
                :content="item.content"
                :id="item.id"
            />
        </div>
    </div>
</template>
<script>
import Card from "./Card";
import Category from "./Category";
export default {
    name: "Cards",
    components: { Card, Category },
    props: {
        content: Object,
    },
};
</script>
