<template>
    <div class="home">
        <Nav />
        <div id="body">
            <Cards :content="content" />
        </div>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Cards from "@/components/Cards.vue";
export default {
    name: "Home",
    components: { Nav, Cards },
    data() {
        return {
            content: [],
        };
    },
    computed: {
        getCards() {
            return this.content.filter((el) => {
                return el.type === "card";
            });
        },
        getCategories() {
            return this.content.filter((el) => {
                return el.type === "category";
            });
        },
    },
    created() {
        this.content = [
            {
                type: "card",
                text: "Title card",
                id: 0,
            },
            {
                type: "category",
                id: 1,
                content: [
                    {
                        id: 2,
                        type: "card",
                        text: "Card 1",
                    },
                    { id: 3, type: "card", text: "Card 2" },
                    { id: 4, type: "card", text: "Card 3" },
                ],
            },
        ];
    },
};
</script>
<style scoped>
#body {
    padding: 35px;
}
</style>
