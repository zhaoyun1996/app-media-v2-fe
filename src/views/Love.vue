<template lang="">
    <div id="love">
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
            <div>
                <img id="avatar_1" class="avatar" src="@/assets/images/avatar_1.jpg">
                <p id="nickname_1" class="nickname">Kiệt</p>
            </div>
            <img class="heart" src="@/assets/images/big_heart.png">
            <div>
                <img id="avatar_2" class="avatar" src="@/assets/images/avatar.jpeg">
                <p id="nickname_2" class="nickname">Duyên</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Love",

    data() {
        window.love = this;
        return {
            fromDate: new Date("2023/02/14")
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
        }
    },

    mounted() {

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