<template>
    <div id="present-container">
        <div id="present-text"><Icon icon="fas fa-play" />Présenter</div>
    </div>
</template>
<script lang="ts">
import Icon from './Icon.vue';
export default {
    name: 'PresentBtn',
    components: {
        Icon,
    },
};
</script>
<style scoped>
#present-container {
    color: white;
    font-size: var(--navbar-font-size);
    font-weight: 300;
    margin-bottom: 0;
    padding: 10px;
}
#present-text {
    display: flex;
    align-items: center;
}
.icon {
    font-size: 0.65em;
    margin-right: 5px;
    margin-bottom: -2px;
}
</style>
