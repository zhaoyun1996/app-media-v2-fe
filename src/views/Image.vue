<template lang="">
    <div id="image">
        <div class="control px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div class="flex justify-center items-center w-1/5">
                <label
                    for="dropzone-file"
                    class="flex flex-col justify-center items-center w-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                    <div
                        class="flex flex-col justify-center items-center pt-5 pb-6"
                    >
                        <svg
                            class="mb-3 w-10 h-10 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                        </svg>
                        <p
                            class="mb-2 text-sm text-gray-500 dark:text-gray-400"
                        >
                            <span class="font-semibold"
                                >Nhấn để tải ảnh lên</span
                            >
                        </p>
                        <!-- <p class="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p> -->
                    </div>
                    <input
                        ref="file"
                        id="dropzone-file"
                        type="file"
                        class="hidden"
                        @change="handlePreviewImage"
                    />
                </label>
            </div>

            <div style="display: grid">
                <button
                    :class="[
                        !file || uploading
                            ? 'bg-blue-300 focus:outline-none'
                            : 'bg-blue-500 hover:bg-blue-700',
                        'text-white font-bold py-2 px-4 rounded',
                    ]"
                    :disabled="!file || uploading"
                    @click="uploadImage"
                >
                    Tải ảnh lên
                </button>
                <button
                    :class="[
                        'bg-green-500 hover:bg-green-700',
                        'text-white font-bold py-2 px-4 rounded',
                    ]"
                    style="margin-top: 15px"
                    @click="fetchImages"
                >
                    Lấy lại danh sách ảnh
                </button>
            </div>
            <img v-if="image" :src="image.preview" alt="" />
        </div>

        <div class="px-5 py-2 mx-auto lg:pt-12 lg:px-32 images">
            <div class="flex flex-wrap">
                <div
                    class="rounded-md md:w-1/4 w-1/2 image-temp"
                    v-for="item in 16"
                    v-if="loading"
                >
                    <div
                        class="m-1 md:m-2 animate-pulse flex image-content-temp"
                    >
                        <div
                            class="rounded-full bg-slate-700 h-10 w-10 m-2"
                        ></div>
                        <div class="flex-1 space-y-6 py-1 m-2">
                            <div class="h-2 bg-slate-700 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                    <div
                                        class="h-2 bg-slate-700 rounded col-span-2"
                                    ></div>
                                    <div
                                        class="h-2 bg-slate-700 rounded col-span-1"
                                    ></div>
                                </div>
                                <div class="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="flex flex-wrap md:w-1/4 w-1/2"
                    v-for="image in images"
                    :key="image.public_id"
                    v-else
                >
                    <div class="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            class="block object-cover object-center rounded-lg"
                            :src="image.secure_url"
                            :style="[
                                {
                                    width: image.width,
                                    height: image.height,
                                    margin: '0 auto',
                                },
                            ]"
                        />
                    </div>
                </div>
            </div>
            <div class="text-center my-4" v-if="next">
                <button
                    class="bg-green-700 px-4 py-2 text-center text-white border rounded shadow-sm"
                    :disabled="disabled"
                    @click="loadMore"
                >
                    Load more
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";

export default {
    name: "Image",

    data() {
        window.image = this;

        return {
            images: [],
            image: null,
            file: null,
            next: null,
            loading: false,
            timeShowToast: 1500,
            uploading: false,
        };
    },

    methods: {
        /**
         * Khởi tạo đường dẫn của file ảnh
         */
        handlePreviewImage(e) {
            const me = this;

            me.file = e.target.files[0];

            me.file.preview = URL.createObjectURL(me.file);

            me.setImage(me.file);
        },

        /**
         * Gán lại thông tin để hiển thị ảnh
         */
        setImage(file) {
            let me = this;

            me.image = file;
        },

        /**
         * Upload ảnh
         */
        async uploadImage() {
            const me = this;

            me.mask();

            me.uploading = true;

            let formData = new FormData();
            if (me.file) {
                formData.append("file", me.file);

                try {
                    const response = await axios({
                        method: "POST",
                        url: `${import.meta.env.VITE_API_URL}/api/upload`,
                        data: formData,
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });
                    if (response.data.url) {
                        console.log(import.meta.env);
                        swal("Tải ảnh lên!", "Thành công!", "success", {
                            buttons: false,
                            timer: me.timeShowToast,
                        });

                        setTimeout(async () => {
                            await me.fetchImages();
                        }, me.timeShowToast);
                    }
                } catch (error) {
                    swal("Tải ảnh lên!", "Thất bại!", "error", {
                        buttons: false,
                        timer: 1500,
                    });

                    me.uploading = false;

                    me.unmask();
                }
            }
        },

        /**
         * Lấy danh sách ảnh
         */
        async fetchImages() {
            const me = this;

            me.mask();

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/photos`
                );

                me.images = response.data.results.images;
                me.resetForm();

                if (response.data.results.next_cursor) {
                    me.next = response.data.results.next_cursor;
                }

                me.unmask();
            } catch (error) {
                me.unmask();
                console.log(error);
            }
        },

        /**
         * Xem chi tiết ảnh
         */
        async loadMore() {
            const me = this;

            let params = new URLSearchParams();
            if (me.next) {
                params.append("next_cursor", me.next);
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/photos?${params}`
                );
                if (response.data.results) {
                    for (
                        let i = 0;
                        i < response.data.results.images.length;
                        i++
                    ) {
                        me.images.push(response.data.results.images[i]);
                    }
                    if (response.data.results.next_cursor) {
                        me.next = response.data.results.next_cursor;
                        params.delete("next_cursor");
                    } else {
                        params.delete("next_cursor");
                        me.next = null;
                    }
                }
            }
        },

        /**
         * Hiển thị loading
         */
        mask() {
            const me = this;

            me.loading = true;
        },

        /**
         * Ẩn loading
         */
        unmask() {
            const me = this;

            me.loading = false;
        },

        /**
         * Reset lại form
         */
        resetForm() {
            const me = this;

            me.$refs.file.value = null;
            me.image = null;
            me.file = null;
            me.uploading = false;
        },
    },

    mounted() {
        const me = this;

        me.fetchImages();
    },
};
</script>
<style lang="css" scoped>
.control {
    display: flex;
    height: 200px;
    align-items: center;
    position: fixed;
    width: calc(100% - 32rem);
    z-index: 1;
    background-color: #18191a;
}

.control button {
    margin-left: 50px;
}

.control img {
    height: 100%;
    margin-left: 50px;
}

.images {
    position: absolute;
    top: 256px;
    width: -webkit-fill-available;
}

.image-temp {
}

.image-content-temp {
    background-color: #3a3b3c;
    height: 130px;
    border-radius: 5px;
}
</style>
