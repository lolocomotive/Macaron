<template>
    <div
        :onclick="click"
        :class="`card ${type} ${active ? ' active' : ''} ${
            presentationMode ? 'p' : 'e'
        }`"
    >
        <CardToolbar
            @deleteItem="deleteItem"
            :active="active && !presentationMode"
            :title="t('placeholders.title')"
        />
        <div class="card-body">
            <div
                :class="`content ${type} ${active ? 'active' : ''}`"
                :oninput="updateContent"
                :onfocus="focus"
                :contenteditable="!presentationMode"
            >
                {{ text }}
            </div>
        </div>
    </div>
</template>
<script>
import CardToolbar from './CardToolbar.vue';
import { useI18n } from 'vue-i18n';
export default {
    name: 'card',
    props: {
        text: String,
        active: Boolean,
        id: Number,
        type: String,
        sub: Boolean,
        presentationMode: Boolean,
    },
    components: {
        CardToolbar,
    },
    setup() {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: 'local',
        });
        return { t };
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
        click() {
            this.$el.children[1].children[0].focus();
        },
        deleteItem() {
            this.$emit('deleteItem', this.id);
        },
    },
};
</script>
<style scoped>
.card.p {
    background-color: transparent;
    box-shadow: none;
    border: none;
}
.card {
    margin: auto;
    max-width: var(--card-width);
    background-color: var(--background);
    margin-bottom: 15px;
    border: solid var(--background-shade-3) 1pt;
}
.card:hover {
    outline: solid var(--background-shade-3) 2pt;
    outline-offset: -1pt;
}
.card.active:hover {
    outline-offset: -2pt;
    outline-color: var(--background-tone);
}
.card-body {
    padding: 15px;
}

.card.active.e {
    border: solid var(--background-tone) 1pt;
    box-shadow: 0 0 30px 10px var(--background-shade-2);
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
.content.active {
    background-color: var(var(--background-tone));
    box-shadow: 0 0 0 15px var(var(--background-tone));
    outline: none;
}
.sub > * > * > .card {
    border-left: none;
    border-right: none;
}
</style>
