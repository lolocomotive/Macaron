<template>
    <div>
        <!-- TODO: Add text under icons -->
        <div class="fg">
            <div class="tabs">
                <h1>Add something</h1>
                <details>
                    <summary>Recommended</summary>
                    <div class="grid">
                        <Icon
                            @click="add('stdText')"
                            class="option"
                            style="color: #000000a0"
                            icon="fas fa-align-justify"
                        />
                        <Icon
                            @click="add('stdCategory')"
                            class="option"
                            style="color: black"
                            icon="fas fa-square"
                        />
                    </div>
                </details>
                <details>
                    <summary>Basic</summary>
                    <div class="grid">
                        <Icon
                            @click="add('stdText')"
                            class="option"
                            style="color: #000000a0"
                            icon="fas
                        fa-align-justify"
                        />
                        <Icon
                            class="option"
                            style="color: red"
                            icon="fas fa-align-justify"
                        />
                        <Icon
                            class="option"
                            style="color: green"
                            icon="fas fa-align-justify"
                        />
                        <Icon
                            class="option"
                            style="color: var(--purple)"
                            icon="fas fa-align-justify"
                        />
                    </div>
                </details>
                <details>
                    <summary>Media</summary>
                    <div class="grid">
                        <Icon
                            class="option"
                            style="color: #000000a0"
                            icon="fas fa-image"
                        />
                        <Icon
                            class="option"
                            style="color: #000000a0"
                            icon="fas fa-video"
                        />
                        <Icon
                            class="option"
                            style="color: #000000a0"
                            icon="fas fa-code"
                        />
                    </div>
                </details>
                <details>
                    <summary>Miscellaneous</summary>
                    <div class="grid">
                        <Icon class="option" icon="fas fa-square" />
                    </div>
                </details>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from './Icon.vue';
export default {
    name: 'AddDialog',
    components: { Icon },
    props: {
        location: Number,
    },
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
        add(type) {
            let obj = {};
            switch (type) {
                case 'stdText':
                    obj.type = 'card';
                    obj.cardType = 'text';
                    obj.text = 'Insert text here';
                    obj.id = Math.random();
                    break;
                case 'stdCategory':
                    obj.type = 'category';
                    obj.content = [
                        {
                            type: 'card',
                            cardType: 'title',
                            text: 'Insert text here',
                        },
                    ];
                    obj.cardType = 'text';
                    obj.text = 'Insert text here';
                    obj.id = Math.random();
                    break;
                default:
                    alert('An error has occured');
                    break;
            }

            this.$emit('add', obj);
            this.$emit('close');
        },
    },
};
</script>

<style scoped>
summary {
    user-select: none;
    cursor: pointer;
}
details {
    outline: solid black 1pt;
    margin-top: 20px;
    padding: 10px;
}
.hidden {
    /* display: none !important; */
    user-select: none !important;
    pointer-events: none !important;
    opacity: 0 !important;
}

.fg {
    background-color: var(--background);
    border: solid var(--background-tone) 1pt;
    width: 30em;
    margin-top: 3em;
    padding: 2em;
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
    margin-top: 0;
}

.tab {
    transition: all 0.3s;
    --focus-color: var(--background-tone);
    --unfocus-color: var(--foreground-tone);
}

.dark .tab {
    --unfocus-color: var(--foreground-tone);
    --focus-color: var(--secondary);
}

.grid {
    transition: all 0.3s;
    display: flex;
    justify-content: left;
}
.grid > * {
    margin: 10px;
}
.icon {
    color: var(--foreground-tone);
    font-size: 2em;
}
</style>
<style>
.option {
    font-size: 2em;
    transition: all 0.3s;
}
</style>
