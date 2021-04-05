<template>
    <div id="navbar">
        <MenuBtn />
        <PresentBtn />
    </div>
</template>
<script lang="ts">
import MenuBtn from './MenuBtn.vue';
import PresentBtn from './PresentBtn.vue';
export default {
    name: 'Nav',
    components: {
        MenuBtn,
        PresentBtn,
    },
};
</script>
<style scoped>
#navbar {
    background-color: var(--purple);
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}
</style>
