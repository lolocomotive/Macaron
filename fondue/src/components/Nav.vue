<template>
    <div id="navbar">
        <MenuBtn />
        <PresentBtn />
    </div>
</template>
<script>
import MenuBtn from './MenuBtn';
import PresentBtn from './PresentBtn';
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
