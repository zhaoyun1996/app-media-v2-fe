<template lang="">
    <div id="left-content">
        <div class="user-content">
            <router-link :to="{ path: '/profile' }">
                <div class="left-content-item">
                    <div class="user content-item">
                        <div class="avatar"></div>
                        <span class="user-name">Vũ Văn</span>
                        <div class="content-item-background"></div>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="category-content">
            <router-link
                :to="{ path: `${leftItem.path}` }"
                v-for="leftItem in leftItems"
                :key="leftItem.name"
            >
                <div class="left-content-item">
                    <div :class="[leftItem.name, 'content-item']">
                        <img class="icon" :src="leftItem.src" />
                        <span class="title">{{ leftItem.title }}</span>
                        <div class="content-item-background"></div>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="arrow-category-content">
            <div class="left-content-item" @click="viewMoreCategory">
                <div class="arrow content-item">
                    <div class="img-arrow icon">
                        <img
                            :src="srcArrow"
                            :style="{
                                transform: isViewMoreCategory
                                    ? 'rotate(180deg)'
                                    : 'rotate(0deg)',
                            }"
                        />
                    </div>
                    <span class="title">{{
                        isViewMoreCategory ? "Ẩn bớt" : "Xem thêm"
                    }}</span>
                    <div class="content-item-background"></div>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div
            @mouseover="changeHoverShortCut(true)"
            @mouseleave="changeHoverShortCut(false)"
        >
            <div class="title-shortcut title">
                <div class="shortcut-text">
                    <span>Lối tắt của bạn</span>
                </div>
                <div class="shortcut-edit" v-show="isHoverShortCut">
                    <span>Chỉnh sửa</span>
                    <div class="shortcut-edit-background"></div>
                </div>
            </div>
        </div>
        <div class="shortcut-category-content">
            <router-link
                :to="{ path: `${leftShortCut.path}` }"
                v-for="leftShortCut in leftShortCuts"
                :key="leftShortCut.name"
            >
                <div class="left-content-item">
                    <div :class="[leftShortCut.name, 'content-item']">
                        <img class="icon" :src="leftShortCut.src" />
                        <span class="title">{{ leftShortCut.title }}</span>
                        <div class="content-item-background"></div>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="arrow-shortcut-content">
            <div class="left-content-item" @click="viewMoreShortCut">
                <div class="arrow content-item">
                    <div class="img-arrow icon">
                        <img
                            :src="srcArrow"
                            :style="{
                                transform: isViewMoreShortCut
                                    ? 'rotate(180deg)'
                                    : 'rotate(0deg)',
                            }"
                        />
                    </div>
                    <span class="title">{{
                        isViewMoreShortCut ? "Ẩn bớt" : "Xem thêm"
                    }}</span>
                    <div class="content-item-background"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import images from "@/assets/images";
export default {
    name: "LeftContent",

    data() {
        return {
            srcAvatar: images.avatar,
            leftItems: [
                {
                    name: "watch",
                    path: "/watch",
                    src: images.watchLeft,
                    title: "Watch",
                },
                {
                    name: "market-place",
                    path: "/market-place",
                    src: images.marketPlaceLeft,
                    title: "Marketplace",
                },
                {
                    name: "group",
                    path: "/group",
                    src: images.groupLeft,
                    title: "Group",
                },
            ],
            leftTempItems: [],
            leftShortCuts: [
                {
                    name: "watch",
                    path: "/watch",
                    src: images.watchLeft,
                    title: "Watch",
                },
                {
                    name: "market-place",
                    path: "/market-place",
                    src: images.marketPlaceLeft,
                    title: "Marketplace",
                },
                {
                    name: "group",
                    path: "/group",
                    src: images.groupLeft,
                    title: "Group",
                },
            ],
            leftTempShortCuts: [],
            srcArrow: images.arrow,
            isViewMoreCategory: false,
            isViewMoreShortCut: false,
            isHoverShortCut: false,
        };
    },

    methods: {
        /**
         * Xem thêm content
         */
        viewMoreCategory() {
            const me = this;

            me.isViewMoreCategory = !me.isViewMoreCategory;

            if (me.isViewMoreCategory) {
                me.leftItems = JSON.parse(JSON.stringify(me.leftTempItems));
            } else {
                me.viewContentDefault();
            }
        },

        /**
         * Xem thêm content
         */
        viewMoreShortCut() {
            const me = this;

            me.isViewMoreShortCut = !me.isViewMoreShortCut;

            if (me.isViewMoreShortCut) {
                me.leftShortCuts = JSON.parse(
                    JSON.stringify(me.leftTempShortCuts)
                );
            } else {
                me.viewShortCutDefault();
            }
        },

        /**
         * Hiển thị content mặc định
         */
        viewContentDefault() {
            const me = this;

            me.leftTempItems = JSON.parse(JSON.stringify(me.leftItems));

            // 1 row là 52px
            let n =
                Math.floor(
                    document
                        .getElementById("left-content")
                        .getBoundingClientRect().height /
                        2 /
                        52
                ) - 2;

            me.leftItems = me.leftItems.slice(0, n);
        },

        /**
         * Hiển thị shortcut mặc định
         */
        viewShortCutDefault() {
            const me = this;

            me.leftTempShortCuts = JSON.parse(JSON.stringify(me.leftShortCuts));

            // 1 row là 52px
            let n =
                Math.floor(
                    document
                        .getElementById("left-content")
                        .getBoundingClientRect().height /
                        2 /
                        52
                ) - 2;

            me.leftShortCuts = me.leftShortCuts.slice(0, n);
        },

        /**
         * Sự kiện hover vào lối tắt
         */
        changeHoverShortCut(isHoverShortCut) {
            const me = this;

            me.isHoverShortCut = isHoverShortCut;
        },
    },

    mounted() {
        const me = this;

        // Fake content
        for (let index = 0; index < 10; index++) {
            const element = me.leftItems[index % 3];
            me.leftItems.push(element);
        }

        // Fake content
        for (let index = 0; index < 10; index++) {
            const element = me.leftShortCuts[index % 3];
            me.leftShortCuts.push(element);
        }

        // Hiển thị content mặc định
        me.viewContentDefault();

        // Hiển thị shortcut mặc định
        me.viewShortCutDefault();
    },
};
</script>
<style lang="css" scoped>
#left-content {
    width: 18%;
    background-color: #18191a;
    color: #e4e6eb;
    padding-top: 16px;
    overflow-y: scroll;
}

.left-content-item {
    padding: 0 8px;
    height: 52px;
}

.content-item {
    height: 100%;
    padding: 0 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
}

.content-item:hover .content-item-background {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    height: 100%;
    left: 0;
    width: 100%;
}

.avatar {
    margin-right: 12px;
    border-radius: 50%;
    display: flex;
    height: 36px;
    width: 36px;
    background: url("@/assets/images/avatar.jpeg");
    background-size: 36px 36px;
}

.user-name,
.title {
    font-weight: 600;
}

.icon {
    margin-right: 12px;
}

.left-content-item .arrow .img-arrow {
    height: 36px;
    width: 36px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
}

.left-content-item .down .img-arrow img {
    height: 20px;
}

.line {
    margin: 8px 16px 0 16px;
    border-bottom: 1px solid #3e4042;
}

.title-shortcut {
    position: relative;
    display: flex;
    padding: 20px 16px 12px 16px;
    justify-content: space-between;
}

.shortcut-edit {
    position: relative;
}

.shortcut-edit span {
    color: #4599ff;
    font-weight: 400;
}

.shortcut-edit:hover .shortcut-edit-background {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    border-radius: 4px;
    inset: -8px;
    position: absolute;
}
</style>
