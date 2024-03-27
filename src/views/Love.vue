<template lang="">
    <div id="love">
        <div class="progress" style="margin-bottom:50px; font-size: 20px">Been Love Memory</div>
        <div class="progress">
            <div class="loader">
                <div class="water"></div>
            </div>
            <div class="message">
                <p>Đang yêu</p>
                <p class="counter">{{ getDiffDate() }}</p>
                <p>Ngày</p>
            </div>
        </div>
        <div class="progress" style="margin-top: 80px">
            <label for="dropzone-file-1">
                <img v-if="urlAvatar1" id="avatar_1" class="avatar" :src="urlAvatar1">
                <img v-else id="avatar_1" class="avatar" src="@/assets/images/no_avatar_male.jpg">
                <p id="nickname_1" class="nickname">Kiệt</p>
                <input
                    ref="file"
                    id="dropzone-file-1"
                    type="file"
                    @change="handlePreviewImage($event, true)"
                    class="hidden"
                    />
            </label>
            <img class="heart" src="@/assets/images/big_heart.png">
            <label for="dropzone-file-2">
                <img v-if="urlAvatar2" id="avatar_2" class="avatar" :src="urlAvatar2">
                <img v-else id="avatar_2" class="avatar" src="@/assets/images/no_avatar_female.jpg">
                <p id="nickname_2" class="nickname">Duyên</p>
                <input
                    ref="file"
                    id="dropzone-file-2"
                    type="file"
                    @change="handlePreviewImage($event, false)"
                    class="hidden"
                    />
            </label>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
    name: "Love",

    data() {
        return {
            fromDate: new Date("2023/02/14"),
            urlAvatar1: null,
            urlAvatar2: null,
            timeShowToast: 1500
        };
    },

    methods: {
        /**
         * Định dạng ngày tháng
         * @param {*} date 
         */
        formatDate(date) {
            let d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            return [year, month, day].join('-');
        },

        /**
         * Tính số ngày đang yêu
         */
        getDiffDate() {
            const me = this;

            if (me.fromDate != '') {
                var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
                var firstDate = new Date(me.formatDate(me.fromDate));
                var secondDate = new Date(me.formatDate(new Date()));

                // count from 0
                var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
                return diffDays;
            }
            return 0;
        },

        /**
         * Upload ảnh
         */
         async handlePreviewImage(e, type) {
            const me = this;

            let formData = new FormData();
            if (e.target.files[0]) {
                formData.append("file", e.target.files[0]);

                try {
                    const response = await axios({
                        method: "POST",
                        url: `${import.meta.env.VITE_API_URL}/api/upload?folder_name=love&file_name=avatar_${type ? 1 : 2}`,
                        data: formData,
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });
                    if (response.data) {
                        swal("Tải ảnh lên!", "Thành công!", "success", {
                            buttons: false,
                            timer: me.timeShowToast,
                        });

                        setTimeout(async () => {
                            type ? me.urlAvatar1 = response.data.url : me.urlAvatar2 = response.data.url;
                        }, me.timeShowToast);
                    }
                } catch (error) {
                    swal("Tải ảnh lên!", "Thất bại!", "error", {
                        buttons: false,
                        timer: me.timeShowToast,
                    });
                }
            }
        },

        /**
         * Lấy danh sách ảnh
         */
         async fetchImages() {
            const me = this;

            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/photos?folder_name=love`
                );

                if(response.data.results.images) {
                    let images = response.data.results.images;

                    let avatar1 = images.find(img => img.public_id == "love/avatar_1");
                    if(avatar1) {
                        me.urlAvatar1 = avatar1.secure_url;
                    }

                    let avatar2 = images.find(img => img.public_id == "love/avatar_2");
                    if(avatar2) {
                        me.urlAvatar2 = avatar2.secure_url;
                    }
                }
            } catch (error) {
                swal("Lấy ảnh lên!", "Thất bại!", "error", {
                    buttons: false,
                    timer: 1500,
                });
            }
        },
    },

    created() {
        const me = this;

        me.fetchImages();
    },
};
</script>
<style lang="css" scoped>
#love {
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
    color: #18191a;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 20px;
}

.progress {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: cursive;
}

.message {
    color: #000;
}

.loader {
    width: 200px;
    height: 200px;
    border: 5px solid #ff4081;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
}

.counter {
    font-size: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.nickname {
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
}

.avatar {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    border: 2px solid #ffffff;
    object-fit: cover
}

.heart {
    animation: beat .25s infinite alternate;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
    width: 30px;
    height: 30px;
    padding: 10px;
}

/* Heart beat animation */
@keyframes beat {
    to {
        transform: scale(1.4);
    }
}

.water {
    width: 200px;
    height: 200px;
    background-color: #ff4081;
    border-radius: 50%;
    position: relative;
    box-shadow: inset 0 0 20px 0 rgba(0, 0, 0, .8), 0 0 20px 0 rgba(0, 0, 0, .3);
    overflow: hidden;
}

.water:before,
.water:after {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: 50%;
    background: #fff;
}

.water:before {
    border-radius: 45%;
    background: #fff;
    animation: wave 5s linear infinite;
}

.water:after {
    border-radius: 35%;
    background: rgba(255, 255, 255, .3);
    animation: wave 5s linear infinite;
}

@keyframes wave {
    0% {
        transform: translate(-50%, -50%) rotate(0);
        top: -30%;
    }

    50% {
        top: -50%;
    }

    100% {
        transform: translate(-50%, -50%) rotate(360deg);
        top: -30%;
    }
}

.message {
    position: absolute;
}

</style>