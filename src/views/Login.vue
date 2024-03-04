<template>
    <div id="login">
        <div class="min-h-screen flex flex-col justify-center sm:px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <img class="mx-auto h-12 w-auto"
                    :src="srcLogo"
                    alt="Facebook Logo">
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-100">
                    Sign in to your account
                </h2>
            </div>
    
            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">
                                User name
                            </label>
                            <div class="flex mt-1">
                                <input ref="refUserName" v-model="userName" autocomplete="off" required
                                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            </div>
                        </div>
    
                        <div>
                            <label class="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div class="flex mt-1">
                                <input v-model="password" type="password" autocomplete="off" required
                                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            </div>
                        </div>
    
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input v-model="isRemember" id="remember_me" name="remember_me" type="checkbox"
                                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
    
                            <div class="text-sm">
                                <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
    
                        <div class="flex">
                            <button 
                                @click="login"
                                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Loading v-if="loading" />
</template>
  
<script>
import images from "@/assets/images";
import router from "@/router";
import axios from "axios";
import swal from "sweetalert";
import Loading from "@/components/Loading.vue";
export default {
    name: "Login",
    components: {
        Loading
    },
    data() {
        return {
            loading: false,
            userName: '',
            password: '',
            isRemember: false
        }
    },
    created() {
        const me = this;

        me.srcLogo = images.logoWhite;

        me.$nextTick(() => {
            me.$refs.refUserName.focus();
        });
    },
    methods: {
        async login() {
            const me = this;

            me.loading = true;

            const res = await axios({
                method: "POST",
                url: `${import.meta.env.VITE_API_TESTING_URL}/api/Account/Login`,
                data: {
                    user_name: me.userName,
                    password: me.password
                }
            });

            if (res && res.data && res.data.success) {
                await swal("Đăng nhập!", "Thành công!", "success", {
                    buttons: false,
                    timer: 1500,
                });

                sessionStorage.setItem("UserLogin", JSON.stringify({
                    user_name: me.userName,
                    password: me.password
                }));

                router.push('/');

                me.loading = false;
            }
        }
    }
}
</script>
<style scoped>
#login {
    background-color: #18191a;
}
</style>