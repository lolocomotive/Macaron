<template>
    <div :class="'card-toolbar' + (active ? ' active' : '')">
        {{ title }}
    </div>
</template>
<script>
export default {
    name: 'CardToolbar',
    props: {
        title: String,
        active: Boolean,
    },
};
</script>
<style scoped>
.card-toolbar {
    height: 0px;
    transition: all 0.2s;
    overflow: hidden;
    opacity: 0;
    color: white;
    background-color: var(--purple);
    user-select: none;
    margin: -1px;
}

.card-toolbar.active {
    opacity: 1;
    height: 20px;
    padding: 5px;
}
</style>
