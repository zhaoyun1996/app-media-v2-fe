<template lang="">
    <div id="header">
        <div class="left-header">
            <div class="back" v-if="isFocusInputSearch">
                <div class="img-back">
                    <img :src="srcBack" />
                    <div class="back-background"></div>
                </div>
            </div>
            <img class="logo" :src="srcLogo" v-else />
            <label class="group-search">
                <span class="icon-search">
                    <img :src="srcSearch" />
                </span>
                <input
                    class="input-search"
                    placeholder="Tìm kiếm bài hát"
                    @focus="isFocusInputSearch = !isFocusInputSearch"
                    @blur="isFocusInputSearch = !isFocusInputSearch"
                />
            </label>
        </div>
        <div class="center-header">
            <div class="category">
                <router-link
                    :to="{ path: `${categoryItem.path}` }"
                    v-for="categoryItem in categoryItems"
                    :key="categoryItem.name"
                >
                    <div
                        :class="[
                            'category-item',
                            `category-item-${categoryItem.name}`,
                        ]"
                        @click="changeCategory(categoryItem.name)"
                    >
                        <div
                            :class="[
                                'category-item-line',
                                {
                                    active:
                                        categoryItem.name == categoryItemActive,
                                },
                            ]"
                        ></div>
                        <span>
                            <img
                                :src="
                                    categoryItem.name == categoryItemActive
                                        ? categoryItem.srcActive
                                        : categoryItem.src
                                "
                            />
                        </span>
                        <div
                            :class="[
                                {
                                    'category-item-background':
                                        categoryItem.name != categoryItemActive,
                                },
                            ]"
                        ></div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="right-header">
            <div class="action-extend">
                <router-link :to="{ path: '/profile' }">
                    <div class="user">
                        <div class="avatar"></div>
                        <span class="user-name">Vũ Văn</span>
                        <div class="user-background"></div>
                    </div>
                </router-link>
                <div class="menu">
                    <img :src="srcCaretDown" />
                    <div class="menu-background"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import images from "@/assets/images";
export default {
    name: "Header",

    data() {
        return {
            categoryItems: [
                {
                    name: "home",
                    path: "/",
                    src: images.home,
                    srcActive: images.homeActive,
                },
                {
                    name: "watch",
                    path: "/watch",
                    src: images.watch,
                    srcActive: images.watchActive,
                },
                {
                    name: "market-place",
                    path: "/market-place",
                    src: images.marketPlace,
                    srcActive: images.marketPlaceActive,
                },
                {
                    name: "group",
                    path: "/group",
                    src: images.group,
                    srcActive: images.groupActive,
                },
            ],
            srcSearch: images.search,
            srcLogo: images.logo,
            srcCaretDown: images.caretDown,
            srcBack: images.back,
            categoryItemActive: "home",
            isFocusInputSearch: false,
        };
    },

    methods: {
        changeCategory(type) {
            const me = this;

            me.categoryItemActive = type;
        },
    },

    mounted() {
        const me = this;
    },

    watch: {
        $route(to, from) {
            const me = this;

            let categoryItem = me.categoryItems.find(
                (item) => item.path == to.path
            );

            if (categoryItem) {
                me.categoryItemActive = categoryItem.name;
            }
        },
    },
};
</script>
<style lang="css" scoped>
#header {
    height: 6%;
    display: flex;
    background-color: #242526;
    color: #e4e6eb;
}

/* LEFT HEADER */
.left-header {
    height: 100%;
    width: 18%;
    display: flex;
    align-items: center;
    margin: 0 16px;
}

.left-header .logo {
    height: 70%;
    cursor: pointer;
}

.left-header .back .img-back {
    height: 36px;
    width: 36px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    justify-content: center;
}

.left-header .back img {
    height: 20px;
}

.back:hover .back-background {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    height: 36px;
    left: 0;
    width: 100%;
}

.left-header .group-search {
    margin-left: 12px;
    height: 70%;
    width: -webkit-fill-available;
    position: relative;
    background-color: #3a3b3c;
    border-radius: 50px;
    display: flex;
    align-items: center;
}

.left-header .icon-search {
    padding-left: 12px;
    width: 16px;
    display: flex;
    align-items: center;
}

.left-header .icon-search img {
    position: absolute;
}

.left-header .input-search {
    width: 100%;
    border-radius: 50px;
    padding: 7px 15px 7px 10px;
    outline: none;
    background-color: transparent;
}

/* CENTER-HEADER */
.center-header {
    width: 64%;
}

.category {
    height: 100%;
    display: flex;
    width: fit-content;
    margin: 0 auto;
}

.category-item {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 50px;
    cursor: pointer;
    position: relative;
}

.category-item:hover .category-item-background {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    top: 4px;
    bottom: 4px;
    left: 0;
    width: 100%;
}

.category-item-line.active {
    position: absolute;
    right: 2px;
    left: 2px;
    bottom: 0;
    background-color: #2374e1;
    height: 3px;
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
}

.category-item-watch,
.category-item-market-place,
.category-item-group {
    margin-left: 8px;
}

/* RIGHT-HEADER */
.right-header {
    width: 18%;
    position: relative;
}

.action-extend {
    position: absolute;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 16px;
}

.user {
    margin-right: 8px;
    height: 36px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
}

.user:hover .user-background {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 18px;
    height: 36px;
    left: 0;
    width: 100%;
}

.avatar {
    margin-right: 6px;
    margin-left: -8px;
    border-radius: 50%;
    display: flex;
    height: 28px;
    width: 28px;
    background: url("@/assets/images/avatar.jpeg");
    background-size: 28px 28px;
}

.user-name {
    font-weight: 600;
}

.menu {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
}

.menu:hover .menu-background {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    height: 36px;
    left: 0;
    width: 100%;
}

.menu img {
    width: 18px;
    height: 18px;
}
</style>
