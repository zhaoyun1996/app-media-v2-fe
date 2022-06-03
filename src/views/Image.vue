<template lang="">
    <div id="image">
        <input type="file" @change="handlePreviewAvatar" />
        <img v-if="avatar" :src="avatar.preview" alt="" />
    </div>
</template>
<script>
export default {
    name: "Image",
    data() {
        return {
            avatar: null,
        };
    },
    methods: {
        /**
         * Khởi tạo đường dẫn của file ảnh
         */
        handlePreviewAvatar(e) {
            let me = this,
                file = e.target.files[0];

            file.preview = URL.createObjectURL(file);

            me.setAvatar(file);
        },

        /**
         * Gán lại thông tin để hiển thị ảnh
         */
        setAvatar(file) {
            let me = this;

            console.log(file);

            me.avatar = file;
        },
    },
};
</script>
<style lang="css" scoped>
input {
    margin: 40px;
    width: 100%;
}

img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50%;
}
</style>
