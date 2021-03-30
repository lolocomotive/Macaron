<template>
    <div>
        <router-view />
    </div>
</template>

<style>
:root {
    --purple: #3d2645ff;
    --blue: #77b6eaff;
    --pink: #f4acb7ff;
    --yellow: #f2f6d0ff;
    --green: #c5ebc3ff;
    --light-pink: #f4acb730;

    --card-width: 1050px;
    --category-additional-width: 50px;

    --navbar-font-size: 2em;
}
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
#app {
    font-family: Lato, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
body {
    margin: 0;
}
</style>
