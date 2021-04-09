<template>
    <div
        :style="`left: calc(${tabid * settings.width}${
            settings.unit
        } + (100vw / 2) - 13em);`"
        class="tab"
    >
        <h2
            :onclick="setActive"
            :style="`width:${settings.width}${settings.unit};`"
            :class="`${active ? ' active' : ''}`"
        >
            {{ title }}
        </h2>
        <div
            :style="`left:-${tabid * settings.width}${settings.unit}`"
            :class="`content${active ? ' active' : ''}`"
        >
            <slot><Icon style="color: red" icon="fas fa-times" /></slot>
        </div>
    </div>
</template>
<script>
import Icon from './Icon';
export default {
    name: 'Tab',
    props: {
        settings: Object,
        tabid: Number,
        title: String,
        active: Boolean,
    },
    methods: {
        setActive() {
            this.$emit('setActive', this.tabid);
        },
    },
    components: {
        Icon,
    },
};
</script>
<style scoped>
.tab {
    position: absolute;
}
h2 {
    user-select: none;
    cursor: pointer;
    transition: inherit;
    padding-bottom: 15px;
    color: var(--unfocus-color);
    box-shadow: 0 2px 0 var(--unfocus-color);
}
h2.active {
    color: var(--focus-color);
    box-shadow: 0 2px 0 var(--focus-color);
}
.content {
    position: relative;
    opacity: 0;
    transform: scale(0.6);
    transition: all 0.2s;
    z-index: 1;
}
.active.content {
    opacity: 1;
    transform: scale(1);
    display: block;
    z-index: 2;
}
</style>
