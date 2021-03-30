<template>
    <div class="home">
        <Nav />
        <div id="body">
            <Cards @changeActive="changeActive" :content="content" />
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav';
import Cards from '@/components/Cards';
export default {
    name: 'Home',
    components: { Nav, Cards },
    data() {
        return {
            content: [],
        };
    },
    computed: {
        getCards() {
            return this.content.filter((el) => {
                return el.type === 'card';
            });
        },
        getCategories() {
            return this.content.filter((el) => {
                return el.type === 'category';
            });
        },
    },
    created() {
        this.content = [
            {
                type: 'card',
                text: 'Title card',
                id: 0,
                active: false,
            },
            {
                type: 'category',
                id: 1,
                content: [
                    {
                        id: 2,
                        type: 'card',
                        text: 'Card 1',
                        active: false,
                    },
                    { id: 3, type: 'card', text: 'Card 2', active: false },
                    { id: 4, type: 'card', text: 'Card 3', active: false },
                ],
            },
        ];
    },
    methods: {
        setActive(id, content) {
            for (var element of content) {
                if (element.type === 'card') {
                    if (element.id == id) {
                        console.log('Element', id, 'is now active');
                        element.active = true;
                    } else {
                        element.active = false;
                    }
                } else {
                    this.setActive(id, element.content);
                }
            }
        },
        changeActive(id) {
            this.setActive(id, this.content);
            console.log(id);
        },
    },
};
</script>
<style scoped>
#body {
    padding: 35px;
}
</style>
