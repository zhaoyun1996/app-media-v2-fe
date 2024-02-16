<template>
    <router-view />
</template>

<script>

export default {
    name: "App"
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: inherit !important;
}

#app {
    height: 100vh;
    width: 100vw;
}

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-thumb {
    border-radius: 4px;
    /* -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 50%); */
    -webkit-box-shadow: inset 0 0 6px rgb(255 255 255 / 30%);
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset #fff;
    border-radius: 4px;
}
</style>
