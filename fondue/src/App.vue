<template>
    <div>
        <Nav />
        <router-view />
    </div>
</template>
<script>
import Nav from '@/components/Nav';
export default {
    name: 'App',
    components: {
        Nav,
    },
};
</script>
<style>
:root {
    --purple: #3d2645ff;
    --blue: #77b6eaff;
    --pink: #f4acb7ff;
    --yellow: #f2e6d0ff;
    --green: #c5ebc3ff;

    --light-green: #c5ebc330;

    --light-pink: #f4acb730;
    --light-purple: #3d264580;

    --card-width: 1050px;
    --category-additional-width: 50px;

    --navbar-font-size: 2em;

    --secondary-dark: white;
}
.light {
    --secondary: var(--purple);
    --foreground: black;
    --foreground-tone: var(--purple);
    --background: white;
    --background-tone: var(--pink);
    --background-tone-1: #23062cc0;
    --background-shade-5: #00000050;
    --background-shade-3: #00000030;
    --background-shade-2: #00000020;
    --background-shade-1: #00000010;
}
.dark {
    --secondary: var(--secondary-dark);
    --foreground: white;
    --foreground-tone: var(--pink);
    --background: #10151a;
    --background-tone: var(--purple);
    --background-tone-1: #ffffffc0;
    --background-shade-5: #ffffff50;
    --background-shade-3: #ffffff30;
    --background-shade-2: #ffffff20;
    --background-shade-1: #ffffff10;
}
body {
    background-color: var(--background);
    color: var(--foreground);
}
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
#app {
    font-family: Lato, Helvetica, Arial, sans-serif;
    color: var(--foreground);
}

#nav {
    padding: 30px;
}

#nav a {
    color: var(--foreground-tone);
}

a {
    color: var(--foreground-tone);
}
#nav a.router-link-exact-active {
    color: var(--pink);
}
body {
    margin: 0;
}
::selection {
    background-color: var(--foreground-tone);
    color: var(--background);
}
</style>
