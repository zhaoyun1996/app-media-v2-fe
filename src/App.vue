<template>
    <Login />
    <div v-if="false">
        <Header />
        <div class="content">
            <LeftContent />
            <RightContent />
        </div>
    </div>
    <!-- <Footer /> -->
</template>

<script>
import Header from "./components/layout/Header.vue";
import LeftContent from "./components/layout/LeftContent.vue";
import RightContent from "./components/layout/RightContent.vue";
import Footer from "./components/layout/Footer.vue";
import Login from "./views/Login.vue";

export default {
    name: "App",
    components: {
        Login,
        Header,
        LeftContent,
        RightContent,
        Footer,
    },
    data() {
        return {};
    },
    methods: {
        // Lấy dữ liệu từ localStorage
        getDataFromLocalStorage(key) {
            return localStorage.getItem(key);
        },
        // Đặt dữ liệu vào localStorage
        setDataToLocalStorage(key, value) {
            localStorage.setItem(key, value);
        },
        // Xóa dữ liệu từ localStorage
        removeDataFromLocalStorage(key) {
            localStorage.removeItem(key);
        }
    }
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

.content {
    height: 94%;
    display: flex;
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
