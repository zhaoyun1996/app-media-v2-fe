<template lang="">
    <div id="left-content">
        <div class="body-content">
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
                    @click="itemActive = leftItem.name"
                >
                    <div class="left-content-item">
                        <div :class="[leftItem.name, 'content-item', {'active': leftItem.name == itemActive}]">
                            <img class="icon" :src="leftItem.src" v-if="leftItem.src" />
                            <i :class="['icon', leftItem.class]" v-else></i>
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
        <div class="footer-content">
            <div class="footer-content-option">
                <a>Quyền riêng tư</a> · <a>Điều khoản</a> · <a>Quảng cáo</a> ·
                <a>Lựa chọn quảng cáo</a> · <a>Cookie</a> · <a>Xem thêm</a> ·
                Zhaoyun © 2022
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
                    name: "love",
                    path: "/love",
                    class: "sprite-icon",
                    title: "Love",
                },
                {
                    name: "music",
                    path: "/music",
                    src: images.music,
                    title: "Music",
                },
                {
                    name: "image",
                    path: "/image",
                    src: images.image,
                    title: "Image",
                },
                {
                    name: "watch",
                    path: "/watch",
                    src: images.watchLeft,
                    title: "Watch",
                },
                {
                    name: "chat",
                    path: "/chat",
                    src: images.chat,
                    title: "Chat",
                },
                {
                    name: "api-testing",
                    path: "/api-testing",
                    src: images.document,
                    title: "APITesting",
                },
                {
                    name: "group",
                    path: "/group",
                    src: images.groupLeft,
                    title: "Group",
                },
                {
                    name: "market-place",
                    path: "/market-place",
                    src: images.marketPlaceLeft,
                    title: "Marketplace",
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
            itemActive: 'home'
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
                me.viewContentDefault(me.leftItems, me.leftTempItems);
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
                me.viewContentDefault(me.leftShortCuts, me.leftTempShortCuts);
            }
        },

        /**
         * Hiển thị content mặc định
         */
        viewContentDefault(items, tempItems) {
            tempItems.splice(0, tempItems.length);
            tempItems.push(...items);

            items.splice(5, items.length);
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

        let leftItem = me.leftItems.find(
            (item) => item.path == me.$route.path
        );

        if (leftItem) {
            me.itemActive = leftItem.name;
        }

        // Fake content
        // for (let index = 0; index < 10; index++) {
        //     const element = me.leftItems[index % 3];
        //     me.leftItems.push(element);
        // }

        // Fake content
        for (let index = 0; index < 10; index++) {
            const element = me.leftShortCuts[index % 3];
            me.leftShortCuts.push(element);
        }

        // Hiển thị content mặc định
        me.viewContentDefault(me.leftItems, me.leftTempItems);
        me.viewContentDefault(me.leftShortCuts, me.leftTempShortCuts);
    },

    watch: {
        /**
         * Bắt sự kiện thay đổi router
         */
        $route(to, from) {
            const me = this;

            let leftItem = me.leftItems.find(
                (item) => item.path == to.path
            );

            if (leftItem) {
                me.itemActive = leftItem.name;
            }
        },
    },
};
</script>
<style lang="css" scoped>
#left-content {
    width: 18%;
    background-color: #18191a;
    color: #e4e6eb;
    padding-top: 16px;
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

.body-content {
    height: 90%;
    overflow-y: auto;
}

.footer-content {
    height: 10%;
    font-size: 13px;
    padding: 0 16px;
    color: #b0b3b8;
    position: relative;
}

.footer-content a:hover {
    text-decoration: underline;
    cursor: pointer;
}

.footer-content-option {
    position: absolute;
    bottom: 16px;
}

.sprite-icon {
    background-image: url("@/assets/images/sprite-icon.png");
    background-position: 0px 0px;
    background-size: auto;
    width: 36px;
    height: 36px;
    background-repeat: no-repeat;
    display: inline-block;
}

.content-item.active .content-item-background {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    height: 100%;
    left: 0;
    width: 100%;
}
</style>
