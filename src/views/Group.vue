<template lang="">
    <div class="table-container">
        <div class="text-center px-6 py-3" style="font-size: 20px;">
            Danh sách tài khoản
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
            <tbody class="divide-y divide-gray-200">
                <!-- Table rows -->
                <tr v-for="(account, index) in accounts" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap">{{ index + 1 }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ account.user_name }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ account.password }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-center">{{ formatToString(account.created_date) }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-center">{{ formatToString(account.modified_date) }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <button @click="showForm('edit', account)" class="text-blue-500 hover:text-blue-700">Sửa</button>
                        <button @click="deleteAccount(account)" class="text-red-500 hover:text-red-700 ml-2">Xóa</button>
                    </td>
                    <!-- Add more columns as needed -->
                </tr>
            </tbody>
        </table>
    </div>

    <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-8 rounded shadow-md">
            <h2 class="text-2xl font-bold mb-4 text-gray-700">{{ mode == 'add' ? 'Thêm' : 'Sửa' }} tài khoản</h2>
            <form @submit.prevent="login" class="text-gray-700">
                <div class="mb-4">
                    <label for="username" class="block text-sm font-medium">Tên tài khoản</label>
                    <input v-model="user_name" autocomplete="off" type="text" id="username" name="username" class="mt-1 p-2 border rounded" required />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-sm font-medium">Mật khẩu</label>
                    <div class="relative">
                        <input v-model="password" autocomplete="off" type="password" id="password" name="password" class="mt-1 p-2 border rounded" required />
                        <button @click="togglePasswordVisibility" class="absolute top-1/2 right-2 transform -translate-y-1/2">👁️</button>
                    </div>
                </div>
                <button type="submit" @click="handleAccount" class="bg-blue-500 text-white p-2 rounded">{{ mode == 'add' ? 'Thêm' : 'Sửa' }}</button>
                <button @click="closePopup" type="button" class="ml-2 text-gray-500">Hủy</button>
            </form>
        </div>
    </div>

    <div class="text-center">
        <button @click="showForm('add')" class="text-green-500 hover:text-green-700 mr-4">Thêm tài khoản</button>
        <button @click="getAccounts" class="text-blue-500 hover:text-blue-700">Lấy lại danh sách tài khoản</button>
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
            account_id: '',
            user_name: '',
            password: '',
            mode: 'add',
            showPassword: false,
        }
    },
    created() {
        const me = this;

        me.timeShowToast = 1500;
    },
    async mounted() {
        const me = this;

        await me.getAccounts();
    },
    methods: {
        /**
         * Lấy danh sách tài khoản
         */
        async getAccounts() {
            const me = this;

            const res = await axios({
                method: "GET",
                url: `${import.meta.env.VITE_API_TESTING_URL}/api/APITesting`,
            });

            if (res && res.data && res.data.success) {
                me.accounts = res.data.data;
            }
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
        async editAccount() {
            const me = this;

            const res = await axios({
                method: "PUT",
                url: `${import.meta.env.VITE_API_TESTING_URL}/api/APITesting/EditAccount`,
                data: {
                    account_id: me.account_id,
                    user_name: me.user_name,
                    password: me.password
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
         * Xử lý tài khoản
         */
        handleAccount() {
            const me = this;

            me.mode == 'add' ? me.createAccount() : me.editAccount();
        },

        /**
         * Hiển thị form xử lý
         */
        showForm(mode, account) {
            const me = this;

            me.mode = mode;

            if (account) {
                me.account_id = account.account_id;
                me.user_name = account.user_name;
                me.password = account.password;
            }
            else {
                me.account_id = '';
                me.user_name = '';
                me.password = '';
            }

            me.showPopup = true;
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
                    user_name: me.user_name,
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
            me.user_name = '';
            me.password = '';
            me.account_id = '';
            me.showPassword = false;
        },

        /**
         * Hiển thị mật khẩu
         */
        togglePasswordVisibility() {
            const me = this;

            me.showPassword = !me.showPassword;

            let iPass = document.getElementById('password');

            if(iPass) {
                if(me.showPassword) {
                    iPass.setAttribute('type', 'text');
                }
                else {
                    iPass.setAttribute('type', 'password');
                }
            }
        },
    }
};
</script>

<style scoped>
/* div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */

.eye-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
}
</style>
