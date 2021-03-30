<template>
    <div id="menuBtn">
        <img src="" alt="Menu" />
        <div id="title">Macaron</div>
    </div>
</template>
<script>
export default {
    name: 'MenuBtn',
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
</style>
