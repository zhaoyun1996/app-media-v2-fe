<template lang="">
    <div class="group">
        <div class="table-container">
            <div class="title">
                <div class="text-center px-6 py-3" style="font-size: 20px;">
                    Danh sách tài khoản
                </div>
                <div class="text-center float-right">
                    <button @click="showForm" class="text-green-500 hover:text-green-700 mr-4">
                        <i class="fas fa-plus-circle" @click="addNewItem"></i>
                        Thêm
                    </button>
                    <button @click="getAccounts" class="text-blue-500 hover:text-blue-700">
                        <i class="fas fa-sync-alt" @click="refreshData"></i>
                        Tải lại
                    </button>
                </div>
            </div>
            <table class="min-w-full divide-y divide-gray-200">
                <!-- Table headers -->
                <thead class="">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">STT</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Tên tài khoản</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Mật khẩu</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Ngày tạo</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Ngày sửa</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Chức năng</th>
                        <!-- Add more headers as needed -->
                    </tr>
                </thead>
                <!-- Table body -->
                <tbody class="divide-y divide-gray-200" id="tb-content">
                    <!-- Table rows -->
                    <tr v-if="isLoading" v-for="item in 3">
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            <div class="h-6 bg-slate-700 rounded col-span-2 animate-pulse"></div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="h-6 bg-slate-700 rounded col-span-2 animate-pulse"></div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="h-6 bg-slate-700 rounded col-span-2 animate-pulse"></div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            <div class="h-6 bg-slate-700 rounded col-span-2 animate-pulse"></div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            <div class="h-6 bg-slate-700 rounded col-span-2 animate-pulse"></div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            <div class="h-6 bg-slate-700 rounded col-span-2 animate-pulse"></div>
                        </td>
                    </tr>
                    <tr v-else v-for="(account, index) in accounts" :key="index" @click="changeMode(index)" :class="[account.state == enumState.edit ? 'edit' : 'view']">
                        <td class="px-6 py-4 whitespace-nowrap text-center">{{ index + 1 }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <input v-if="account.state == enumState.edit" v-model="account.user_name" />
                            <span v-else>{{ account.user_name }}</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <input v-if="account.state == enumState.edit" v-model="account.password" />
                            <span v-else>{{ account.password }}</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">{{ formatToString(account.created_date) }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">{{ formatToString(account.modified_date) }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            <div v-if="account.state == enumState.edit">
                                <button @click="editAccount(index)" class="text-blue-500 hover:text-blue-700">Cất</button>
                                <button @click="cancel" class="text-red-500 hover:text-red-700 ml-2">Hủy</button>
                            </div>
                            <div v-else>
                                <button @click="changeMode(index)" class="text-blue-500 hover:text-blue-700">Sửa</button>
                                <button @click="deleteAccount(account)" class="text-red-500 hover:text-red-700 ml-2">Xóa</button>
                            </div>
                        </td>
                        <!-- Add more columns as needed -->
                    </tr>
                </tbody>
            </table>
        </div>
    
        <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" id="popup-handle-account" @keydown.esc.prevent="closePopup" @keydown.enter.prevent="createAccount">
            <div class="bg-white p-8 rounded shadow-md">
                <h2 class="text-2xl font-bold mb-4 text-gray-700">{{ mode == 'add' ? 'Thêm' : 'Sửa' }} tài khoản</h2>
                <form @submit.prevent="login" class="text-gray-700">
                    <div class="mb-4">
                        <label for="username" class="block text-sm font-medium">Tên tài khoản</label>
                        <input v-model="userName" autocomplete="off" type="text" id="username" name="username" class="mt-1 p-2 border rounded" required />
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-sm font-medium">Mật khẩu</label>
                        <div class="relative">
                            <input v-model="password" autocomplete="off" type="text" id="password" name="password" class="mt-1 p-2 border rounded" required />
                        </div>
                    </div>
                    <div>
                        <button type="submit" @click="createAccount" class="bg-blue-500 text-white p-2 rounded float-right">Thêm</button>
                        <button @click="closePopup" type="button" class="p-2 text-gray-500 float-left">Hủy</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
    name: "Group",
    data() {
        return {
            accounts: [],
            showPopup: false,
            userName: '',
            password: '',
            currentEdit: null,
            isLoading: true
        }
    },
    created() {
        const me = this;

        me.timeShowToast = 1500;
    },
    async mounted() {
        const me = this;

        me.enumState = {
            'view': 0,
            'add': 1,
            'edit': 2
        };

        await me.getAccounts();
    },
    methods: {
        cancel() {
            const me = this;

            if (me.currentEdit) {
                me.accounts[me.currentEdit.index] = JSON.parse(JSON.stringify(me.currentEdit.account));
            }
        },
        /**
         * Chuyển trạng thái
         * @param {*} mode 
         */
        changeMode(index) {
            const me = this;

            me.cancel();

            me.currentEdit = {
                index: index,
                account: JSON.parse(JSON.stringify(me.accounts[index]))
            };

            me.accounts.forEach((account, i) => {
                account.state = index == i ? me.enumState.edit : me.enumState.view;
            });

            me.$nextTick(() => {
                let tbContent = document.getElementById("tb-content");

                if (tbContent) {
                    let inputs = tbContent.getElementsByTagName('input');

                    if (inputs && inputs.length > 0) {
                        inputs[0].focus();
                    }
                }
            });
        },
        /**
         * Lấy danh sách tài khoản
         */
        async getAccounts() {
            const me = this;

            me.isLoading = true;

            const res = await axios({
                method: "GET",
                url: `${import.meta.env.VITE_API_TESTING_URL}/api/APITesting`,
            });

            if (res && res.data && res.data.success) {
                me.accounts = res.data.data;
            }

            me.isLoading = false;
        },

        /**
         * Chuyển kiểu giờ sang định dạng dd/MM/yyyy hh:mm:ss
         * @param {*} datetimeString 
         */
        formatToString(datetimeString) {
            const date = new Date(datetimeString);

            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
            const year = date.getFullYear();

            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');

            return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        },

        /**
         * Xóa tài khoản
         * @param {*} account 
         */
        async deleteAccount(account) {
            const me = this;

            const res = await axios({
                method: "DELETE",
                url: `${import.meta.env.VITE_API_TESTING_URL}/api/APITesting`,
                data: account
            });

            if (res && res.data && res.data.success) {
                swal("Xóa tài khoản!", "Thành công!", "success", {
                    buttons: false,
                    timer: me.timeShowToast,
                });

                setTimeout(async () => {
                    await me.getAccounts();
                }, me.timeShowToast);
            }
        },

        /**
         * Sửa tài khoản
         * @param {*} account 
         */
        async editAccount(index) {
            const me = this;

            const res = await axios({
                method: "PUT",
                url: `${import.meta.env.VITE_API_TESTING_URL}/api/APITesting/EditAccount`,
                data: {
                    account_id: me.accounts[index].account_id,
                    user_name: me.accounts[index].user_name,
                    password: me.accounts[index].password
                }
            });

            me.closePopup();

            if (res && res.data && res.data.success) {
                swal("Sửa tài khoản!", "Thành công!", "success", {
                    buttons: false,
                    timer: me.timeShowToast,
                });


                setTimeout(async () => {
                    await me.getAccounts();
                }, me.timeShowToast);
            }
        },

        /**
         * Hiển thị form xử lý
         */
        showForm() {
            const me = this;

            me.showPopup = true;

            me.$nextTick(() => {
                let pAccount = document.getElementById("popup-handle-account");

                if (pAccount) {
                    let inputs = pAccount.getElementsByTagName('input');

                    if (inputs && inputs.length > 0) {
                        inputs[0].focus();
                    }
                }
            });
        },

        /**
         * Thêm tài khoản
         */
        async createAccount() {
            const me = this;

            const res = await axios({
                method: "POST",
                url: `${import.meta.env.VITE_API_TESTING_URL}/api/APITesting/CreateAccount`,
                data: {
                    user_name: me.userName,
                    password: me.password
                }
            });

            me.closePopup();

            if (res && res.data && res.data.success) {
                swal("Thêm tài khoản!", "Thành công!", "success", {
                    buttons: false,
                    timer: me.timeShowToast,
                });


                setTimeout(async () => {
                    await me.getAccounts();
                }, me.timeShowToast);
            }
        },

        /**
         * Đóng form
         */
        closePopup() {
            const me = this;

            me.showPopup = false;
            // Reset input fields on close
            me.userName = '';
            me.password = '';
        }
    }
};
</script>

<style scoped>
.group {
    position: absolute;
    padding: 10px;
    width: calc(100% - 50px);
}

.edit input {
    width: 100%;
    color: black;
}
</style>
