<template>
    <div class="category-wrapper">
        <CardToolbar title="Modify me" />
        <div class="category">
            <Cards :content="content" />
        </div>
    </div>
</template>
<script>
import Cards from "./Cards";
export default {
    name: "Category",
    components: {
        Cards,
    },
    props: {
        content: Object,
    },
    methods: {
        toggleActive() {
            console.log(this.card1Active);
            this.card1Active = !this.card1Active;
        },
    },
    data() {
        return { card1Active: true };
    },
};
</script>
<style scoped>
.category {
    padding: 35px;
}
.category-wrapper {
    border: solid darkgrey 1pt;
    margin: auto;
    margin-top: 25px;
    max-width: calc(var(--card-width) + var(--category-additional-width));
    background-color: #00000010;
}
.card-toolbar {
    margin-top: -1px;
}
</style>
