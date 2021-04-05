<template>
    <div id="menuBtn">
        <Icon icon="fas fa-bars" />
        <div id="title">Macaron</div>
    </div>
</template>
<script>
import Icon from './Icon';
export default {
    name: 'MenuBtn',
    components: {
        Icon,
    },
};
</script>
<style scoped>
#menuBtn {
    background-color: var(--pink);
    display: inline-block;
    padding: 10px;
    color: white;
    font-size: var(--navbar-font-size);
    font-weight: 300;
}
#title {
    display: inline-block;
    border-left: solid white 1px;
    padding-left: 10px;
    margin-left: 10px;
}
.icon {
    font-size: 1em;
}
</style>
