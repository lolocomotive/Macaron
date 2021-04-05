<template>
    <div :style="`left:${tabid * settings.width}${settings.unit};`" class="tab">
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
<script lang="ts">
import Icon from './Icon.vue';
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
    display: none;
}
.active.content {
    display: block;
}
</style>
