<template xmlns="http://www.w3.org/1999/html">
    <div id="app">
        <div id="git_logo">
            <img alt="Github logo" src="./assets/25231.svg" width="50px" align="center">
        </div>
        <div id="git_links">
            <a href="https://github.com/Swampokc/alfa_server"> Server: https://github.com/Swampokc/alfa_server </a> <br/>
            <a href="https://github.com/Swampokc/alfa_client"> Client: https://github.com/Swampokc/alfa_client </a>
        </div>
        <div id="heroku_logo">
                <img alt="Heroku logo" src="./assets/heroku_logo.png" width="50px" style="margin-top: 20px">
        </div>
        <div id="heroku_links">
            <a href="https://stark-falls-43055.herokuapp.com/"> Server: https://stark-falls-43055.herokuapp.com/ </a> <br/>
            <a href="https://warm-reef-33948.herokuapp.com/#/home"> Client: https://warm-reef-33948.herokuapp.com/ </a>
        </div>
        <div id="nav">
            <router-link to="/home">Home</router-link>
            |
            <router-link to="/top">Top</router-link>
            |
            <router-link to="/full">Full</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
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
</style>
