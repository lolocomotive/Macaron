<template>
    <div class="home">
        <Nav />
        <div id="body">
            <Cards
                @deleteCategory="deleteCategory"
                @changeContent="changeContent"
                @deleteItem="deleteItem"
                @changeActive="changeActive"
                :content="content"
                :cards="getCardsComponent"
                :isSubcategory="false"
            />
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
        getCardsComponent() {
            return Cards;
        },
    },
    created() {
        this.content = [
            {
                type: 'card',
                text: 'Title card',
                cardType: 'title',
                id: 0,
                active: false,
            },
            {
                type: 'category',
                id: 1,
                title: 'Category 1',
                content: [
                    {
                        id: 2,
                        type: 'card',
                        cardType: 'text',
                        text: 'Card 1',
                        active: false,
                    },
                    {
                        id: 3,
                        type: 'card',
                        cardType: 'text',
                        text: 'Card 2',
                        active: false,
                    },
                    {
                        id: 4,
                        type: 'card',
                        cardType: 'text',
                        text: 'Card 3',
                        active: false,
                    },
                ],
            },
            {
                type: 'category',
                id: 7,
                title: 'Category 2',
                content: [
                    {
                        type: 'category',
                        id: 8,
                        title: 'category 3',
                        content: [
                            {
                                id: 9,
                                type: 'card',
                                cardType: 'text',
                                text: 'Sabranamedecla',
                                active: false,
                            },
                            {
                                id: 13,
                                type: 'card',
                                cardType: 'text',
                                text: 'Sabranamedecla',
                                active: false,
                            },
                            {
                                id: 14,
                                type: 'card',
                                cardType: 'text',
                                text: 'Sabranamedecla',
                                active: false,
                            },
                        ],
                    },
                    {
                        id: 10,
                        type: 'card',
                        cardType: 'text',
                        text: 'Card 1',
                        active: false,
                    },
                    {
                        id: 11,
                        type: 'card',
                        cardType: 'text',
                        text: 'Card 2',
                        active: false,
                    },
                    {
                        id: 12,
                        type: 'card',
                        cardType: 'text',
                        text: 'Card 3',
                        active: false,
                    },
                ],
            },
        ];
    },
    methods: {
        setActive(id, content) {
            for (var element of content) {
                if (element.type === 'card') {
                    element.active = element.id == id;
                } else {
                    this.setActive(id, element.content);
                }
            }
        },
        changeActive(id) {
            this.setActive(id, this.content);
        },
        changeContent(id, content) {
            this.getElement(id, this.content).text = content;
        },
        getElement(id, content) {
            for (var element of content) {
                if (element.id == id) {
                    return element;
                } else if (element.type === 'category') {
                    var tempEl = this.getElement(id, element.content);
                    if (!(tempEl == null || tempEl == undefined)) {
                        return tempEl;
                    }
                }
            }
        },
        deleteElement(id, content) {
            for (var i in content) {
                if (content[i].id == id) {
                    return content.splice(i, 1);
                } else if (content[i].type === 'category') {
                    var removedEl = this.deleteElement(id, content[i].content);
                    if (!removedEl == -1) {
                        return removedEl;
                    }
                }
            }
            return -1;
        },
        deleteCategory(id) {
            if (confirm('Are you sure? This action cannot be undone')) {
                this.deleteElement(id, this.content);
            }
        },
        deleteItem(id) {
            if (confirm('Are you sure? This action cannot be undone')) {
                this.deleteElement(id, this.content);
            }
        },
    },
};
</script>
<style scoped>
#body {
    padding: 35px;
}
</style>
