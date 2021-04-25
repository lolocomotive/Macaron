<template>
    <div :onclick="click" class="icon" :class="icon">
        {{ content }}
    </div>
</template>
<script>
export default {
    name: 'Icon',
    props: {
        content: String,
        icon: String,
    },
    methods: {
        click() {
            document.activeElement.blur();
        },
    },
};
</script>
<style scoped>
.icon {
    background-color: transparent;
    border: none;
    padding: 5px;
    border-radius: 3px;
    color: white;
}
.icon:hover {
    transform: scale(1.1);
    cursor: pointer;
}
.icon:focus {
    box-shadow: 0 0 0 1px var(--purple), 0 0 0 3px var(--pink);
    outline: none;
}
</style>
