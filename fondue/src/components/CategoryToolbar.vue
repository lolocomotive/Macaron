<template>
    <div
        contenteditable
        :class="'category-toolbar' + (active ? ' active' : '')"
    >
        {{ title }}
    </div>
</template>
<script>
export default {
    name: 'CategoryToolbar',
    props: {
        title: String,
        active: Boolean,
    },
};
</script>
<style scoped>
.category-toolbar {
    transition: all 0.2s;
    overflow: hidden;
    user-select: none;
    padding: 5px;
    border-bottom: solid #00000030 1pt;
    background-color: var(--light-purple);
}

.category-toolbar:focus {
    color: white;
    background-color: var(--purple);
    outline: solid var(--pink) 2pt;
}
</style>
