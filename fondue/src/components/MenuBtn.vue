<template>
    <div id="menuBtn">
        <Icon icon="fas fa-bars" />
        <router-link to="/" id="title">Macaron</router-link>
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
    color: var(--background);
    font-size: var(--navbar-font-size);
    font-weight: 300;
}
#title {
    color: var(--background);
    text-decoration: none;
    display: inline-block;
    border-left: solid var(--background) 1px;
    padding-left: 10px;
    margin-left: 10px;
}
.icon {
    color: var(--background);
    font-size: 1em;
}
</style>
