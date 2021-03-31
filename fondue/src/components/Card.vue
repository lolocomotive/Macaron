<template>
    <div onclick="click" :class="'card' + (active ? ' active' : '')">
        <CardToolbar :active="active" title="Titre" />
        <div class="card-body">
            <div
                :class="`content ${type}`"
                :oninput="updateContent"
                :onfocus="focus"
                contenteditable="true"
            >
                {{ text }}
            </div>
        </div>
    </div>
</template>
<script>
import CardToolbar from './CardToolbar.vue';

export default {
    name: 'Card',
    props: {
        text: String,
        active: Boolean,
        id: Number,
        type: String,
    },
    components: {
        CardToolbar,
    },
    methods: {
        focus() {
            this.$emit('changeActive', this.id);
        },
        updateContent() {
            this.$emit(
                'changeContent',
                this.id,
                this.$el.children[1].children[0].innerText
            );
        },
    },
};
</script>
<style scoped>
.card {
    margin: auto;
    max-width: var(--card-width);
    background-color: white;
    margin-bottom: 15px;
    border: solid #00000030 1pt;
}
.card:hover {
    outline: solid #00000030 1pt;
    outline-offset: -1pt;
}
.card.active:hover {
    outline-offset: -2pt;
    outline-color: var(--pink);
}
.card-body {
    padding: 15px;
}

.card.active {
    border: solid var(--pink) 1pt;
}
.content.title {
    text-align: center;
    font-weight: 300;
    font-size: 4em;
}
.content.text {
    font-size: 1em;
}
.content {
    margin: 0;
    background-color: none;
    transition: all 0.1s;
    box-shadow: 0 0 0 15px transparent;
}
.content:focus {
    background-color: var(--light-pink);
    box-shadow: 0 0 0 15px var(--light-pink);
    outline: none;
}
</style>
