<template>
    <div onclick="click" :class="'card' + (active ? ' active' : '')">
        <CardToolbar :active="active" title="Titre" />
        <div class="card-body">
            <h1 :onfocus="focus" contenteditable="true">{{ text }}</h1>
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
    },
    components: {
        CardToolbar,
    },
    methods: {
        focus() {
            this.$emit('changeActive', this.id);
            console.log('Element', this.id, 'has been focused');
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
h1 {
    margin: 0;
    background-color: none;
    transition: all 0.1s;
    box-shadow: 0 0 0 15px transparent;
    text-align: center;
    font-weight: 300;
    font-size: 3em;
}
h1:focus {
    background-color: var(--light-pink);
    box-shadow: 0 0 0 15px var(--light-pink);
    outline: none;
}
</style>
