<template>
    <div>
        <h1>Add card</h1>
        <div class="tabs">
            <Icon icon="fas fa-align-justify" />
            <Tab
                v-for="tab in tabs"
                @setActive="setActive"
                :settings="tabSettings"
                :tabid="tab.id"
                :title="tab.title"
                :active="tab.active"
                :key="tab.id"
            >
                {{ tab.content }}
            </Tab>
        </div>
    </div>
</template>

<script lang="tsx">
import Tab from './Tab.vue';
import Icon from './Icon.vue';
export default {
    name: 'AddDialog',
    components: { Tab, Icon },
    methods: {
        setActive(id: Number) {
            for (var i in this.tabs) {
                if (parseInt(i) == id) {
                    this.tabs[i].active = true;
                } else {
                    this.tabs[i].active = false;
                }
            }
        },
    },
    data() {
        return {
            tabSettings: {
                width: 80,

                height: 25,
                unit: 'px',
            },
            tabs: [
                {
                    title: 'Texte',
                    content: <Icon icon="fas fa-times" />,
                    id: 0,
                    active: true,
                },
                {
                    title: 'Médias',
                    content: 'Médiatic',
                    id: 1,
                    active: false,
                },
            ],
        };
    },
};
</script>

<style scoped>
h1 {
    text-align: center;
}
.tab {
    transition: all 0.2s;
    --focus-color: var(--pink);
    --unfocus-color: var(--purple);
}
</style>
