<template>
    <div :class="'card-toolbar' + (active ? ' active' : '')">
        {{ title }}
    </div>
</template>
<script>
export default {
    name: "CardToolbar",
    props: {
        title: String,
        active: Boolean,
    },
};
</script>
<style scoped>
.card-toolbar {
    height: 0px;
    transition: all 0.1s;
    overflow: hidden;
    opacity: 0;
    color: white;
    margin-left: -1px;
    background-color: var(--purple);
    user-select: none;
}

.card-toolbar:focus-within {
    opacity: 1;
    height: 20px;
    padding: 5px;
}
</style>
