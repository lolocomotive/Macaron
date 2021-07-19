<template>
    <div class="home">
        <div id="body" :class="presentationMode ? 'p' : ''">
            <Cards
                @deleteCategory="deleteCategory"
                @changeContent="changeContent"
                @deleteItem="deleteItem"
                @changeActive="changeActive"
                @changeTitle="changeTitle"
                @addCard="addCard"
                :content="content"
                :cards="getCardsComponent"
                :isSubcategory="false"
                :presentationMode="presentationMode"
            />
        </div>
        <AddDialog
            :location="addLoc"
            :class="'bg' + (addDialogShown ? '' : ' hidden')"
            @click="closeAddMenu"
            @close="addDialogShown = false"
            @add="add"
        />
    </div>
</template>

<script>
import Cards from '@/components/Cards';
import AddDialog from '@/components/AddDialog';
import { useI18n } from 'vue-i18n';

export default {
    name: 'Editor',
    components: { Cards, AddDialog },
    setup() {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: 'local',
        });
        return { t };
    },
    data() {
        return {
            content: [],
            addLoc: 0,
            addDialogShown: false,
        };
    },
    props: {
        presentationMode: Boolean,
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
        console.log(this);
        this.content = [
            {
                type: 'card',
                text: this.t('placeholders.title'),
                cardType: 'title',
                id: 0,
                active: false,
            },
            {
                type: 'category',
                id: 1,
                title: this.t('placeholders.category1'),
                content: [
                    {
                        id: 2,
                        type: 'card',
                        cardType: 'text',
                        text: this.t('placeholders.card1'),
                        active: false,
                    },
                    {
                        id: 3,
                        type: 'card',
                        cardType: 'text',
                        text: this.t('placeholders.card2'),
                        active: false,
                    },
                    {
                        id: 4,
                        type: 'card',
                        cardType: 'text',
                        text: this.t('placeholders.card3'),
                        active: false,
                    },
                ],
            },
            {
                type: 'category',
                id: 7,
                text: this.t('placeholders.category2'),
                content: [
                    {
                        type: 'category',
                        id: 8,
                        text: this.t('placeholders.category3'),
                        content: [
                            {
                                id: 9,
                                type: 'card',
                                cardType: 'text',
                                text: this.t('placeholders.randomtext1'),
                                active: false,
                            },
                            {
                                id: 13,
                                type: 'card',
                                cardType: 'text',
                                text: this.t('placeholders.randomtext2'),
                                active: false,
                            },
                            {
                                id: 14,
                                type: 'card',
                                cardType: 'text',
                                text: this.t('placeholders.randomtext3'),
                                active: false,
                            },
                        ],
                    },
                    {
                        id: 10,
                        type: 'card',
                        cardType: 'text',
                        text: this.t('placeholders.card4'),
                        active: false,
                    },
                    {
                        id: 11,
                        type: 'card',
                        cardType: 'text',
                        text: this.t('placeholders.card5'),
                        active: false,
                    },
                    {
                        id: 12,
                        type: 'card',
                        cardType: 'text',
                        text: this.t('placeholders.card6'),
                        active: false,
                    },
                ],
            },
        ];
    },
    methods: {
        addCard(id) {
            /* console.log(id);
            let c = this.getElement(id, this.content);
            console.log(c);
            c.content.push({
                id: Math.random(),
                text: 'Some text',
                type: 'card',
                cardType: 'title',
            }); */
            this.addLoc = id;
            this.addDialogShown = true;
        },
        add(item) {
            this.getElement(this.addLoc, this.content).content.push(item);
        },

        closeAddMenu() {
            if (event.target.classList[0] === 'bg') {
                this.addDialogShown = false;
            }
        },

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

        changeTitle(id, title) {
            this.getElement(id, this.content).title = title;
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
            if (confirm(this.t('messages.deleteConfirmation'))) {
                this.deleteElement(id, this.content);
            }
        },

        deleteItem(id) {
            if (confirm(this.t('messages.deleteConfirmation'))) {
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
#body.p {
    font-size: 1.5em;
}
.home {
    transition: transform 0.5s;
}
</style>
