<template>
    <div id="login-form">
        <div id="form">
            <div id="form-content">
                <div id="form-uname-label">Username:</div>
                <input type="text" id="form-uname" />
                <div id="form-pwd-label">Password:</div>
                <input type="password" id="form-pwd" />
            </div>
            <button @click="login">Log in</button>
            <router-link to="/register">
                Don't have an account? Register now
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    methods: {
        async login() {
            var data = {
                username: document.getElementById('form-uname').value,
                password: document.getElementById('form-pwd').value,
            };
            console.log(data);
            fetch('http://localhost:5000/login', {
                method: 'POST',
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then(async (data) => {
                    var form = document.getElementById('form');
                    form.innerHTML = '';
                    var status = document.createElement('h1');

                    if (data.status === 'authorized') {
                        status.innerText = 'Success ! You are authorized';
                        this.$el.classList.add('success');
                    } else {
                        status.innerText = ' Authentication failed:';
                        var message = document.createElement('h2');
                        message.innerHTML = data.message;
                        form.appendChild(message);

                        this.$el.classList.add('fail');
                    }
                    form.prepend(status);
                });
        },
    },
};
</script>
<style scoped>
div {
    --spacing: 20px;
}
.success {
    --purple: green;
    color: var(--purple);
}
.fail {
    --purple: red;
    color: var(--purple);
}
button {
    margin-top: var(--spacing);
    font-size: 1em;
    padding: calc(var(--spacing) / 2);
    background: transparent;
    border: solid var(--purple) 2pt;
    outline: solid var(--purple) 2pt;
    outline-offset: -2pt;
    transition: all 0.3s;
}
button:hover {
    outline: solid var(--pink) 2pt;
    outline-offset: -8pt;
    cursor: pointer;
}
input {
    font-size: 1em;
    color: inherit;
    border: none;
    box-shadow: 0 8px 0 white, 0 10px 0 var(--purple);
    transition: all 0.3s;
    padding: 3px;
    flex: 1;
    margin-left: var(--spacing);
    padding-left: var(--spacing);
}
input:focus {
    box-shadow: 0 2px 0 var(--pink), 0 0px 0 var(--purple);
    outline: none;
}
.entry-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: var(--spacing);
}
#form {
    max-width: 500px;
    margin: auto;
    margin-top: 30px;
    border: solid var(--purple) 4pt;
    border-radius: 4pt;
    padding: var(--spacing);
}
#form > * {
    display: block;
    width: 100%;
}
button {
    margin-top: 35px;
    margin-bottom: 15px;
}
#form-content {
    display: grid;
    grid-template-columns: 1fr 10fr;
    grid-row-gap: 1em;
}
a {
    text-align: center;
}
h1 {
    text-align: center;
}
</style>
