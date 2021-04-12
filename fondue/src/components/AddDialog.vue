<template>
    <div>
        <div @click="click" class="bg hidden">
            <div class="fg">
                <h1>Add card</h1>
                <div class="tabs">
                    <Tab
                        v-for="tab in tabs"
                        @setActive="setActive"
                        :settings="tabSettings"
                        :tabid="tab.id"
                        :title="tab.title"
                        :active="tab.active"
                        :key="tab.id"
                        :is="tab.content"
                    >
                        <component :is="tab.content" />
                    </Tab>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tab from './Tab.vue';
import Icon from './Icon.vue';
export default {
    name: 'AddDialog',
    components: { Tab, Icon },
    methods: {
        setActive(id) {
            for (var i in this.tabs) {
                if (parseInt(i) == id) {
                    this.tabs[i].active = true;
                } else {
                    this.tabs[i].active = false;
                }
            }
        },
        click() {
            if (event.target.classList[0] === 'bg') {
                document
                    .getElementsByClassName('bg')[0]
                    .classList.toggle('hidden');
            }
        },
    },
    data() {
        return {
            tabSettings: {
                width: 100,

                height: 25,
                unit: 'px',
            },
            tabs: [
                {
                    title: 'Texte',
                    content: {
                        render() {
                            return (
                                <div class="grid">
                                    <Icon
                                        class="option"
                                        style="color:#000000A0;"
                                        icon="fas fa-align-justify"
                                    />
                                    <Icon
                                        class="option"
                                        style="color:red;"
                                        icon="fas fa-align-justify"
                                    />
                                    <Icon
                                        class="option"
                                        style="color:green;"
                                        icon="fas fa-align-justify"
                                    />
                                    <Icon
                                        class="option"
                                        style="color:var(--purple);"
                                        icon="fas fa-align-justify"
                                    />
                                </div>
                            );
                        },
                    },
                    id: 0,
                    active: true,
                },
                {
                    title: 'Médias',
                    content: {
                        render() {
                            return (
                                <div class="grid">
                                    <Icon
                                        class="option"
                                        style="color:#000000A0;"
                                        icon="fas fa-image"
                                    />
                                    <Icon
                                        class="option"
                                        style="color:#000000A0;"
                                        icon="fas fa-video"
                                    />
                                    <Icon
                                        class="option"
                                        style="color:#000000A0;"
                                        icon="fas fa-code"
                                    />
                                </div>
                            );
                        },
                    },
                    id: 1,
                    active: false,
                },
            ],
        };
    },
};
</script>

<style scoped>
.hidden {
    /* display: none !important; */
    user-select: none !important;
    pointer-events: none !important;
    opacity: 0 !important;
}

.fg {
    background-color: var(--background);
    border: solid var(--background-tone) 1pt;
    height: 15em;
    width: 30em;
    margin-top: 3em;
    transition: all 0.3s;
    box-shadow: 0 0 60px 30px var(--background-shade-3);
}

.bg {
    opacity: 1;
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    background-color: var(--background-shade-5);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    transition: all 0.3s;
}

h1 {
    text-align: center;
}

.tab {
    transition: all 0.3s;
    --focus-color: var(--foreground-tone);
    --unfocus-color: var(--secondary);
}

.dark .tab {
    --unfocus-color: var(--foreground-tone);
    --focus-color: var(--secondary);
}

.grid {
    transition: all 0.3s;
    display: flex;
    justify-content: space-around;
    width: calc(100% + 5em);
}
</style>
<style>
.option {
    font-size: 2em;
    transition: all 0.3s;
}
</style>
