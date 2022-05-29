<template lang="">
    <div id="header">
        <div class="left-header">
            <img src="@/assets/images/logo.png" />
            <label class="group-search">
                <span class="icon-search">
                    <FontAwesomeIcon :icon="['fas', 'magnifying-glass']" />
                </span>
                <input class="input-search" placeholder="Tìm kiếm bài hát" />
            </label>
        </div>
        <div class="center-header">
            <div class="category">
                <div
                    :class="[
                        'category-item',
                        `category-item-${categoryItem.name}`,
                    ]"
                    v-for="categoryItem in categoryItems"
                    @click="changeCategory(categoryItem.name)"
                >
                    <div
                        :class="[
                            'category-item-line',
                            { active: categoryItem.name == categoryItemActive },
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
            </div>
        </div>
        <div class="right-header">
            <div class="action-extend">
                <div class="user">
                    <!-- <img /> -->
                    <div class="avatar"></div>
                    <span class="user-name">Vũ Văn</span>
                    <div class="user-background"></div>
                </div>
                <div class="menu">
                    <img src="@/assets/images/caret-down.svg" />
                    <div class="menu-background"></div>
                    <!-- <div class="menu-sub">
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header",

    data() {
        return {
            categoryItems: [
                {
                    name: "home",
                    src: "/src/assets/images/home.svg",
                    srcActive: "/src/assets/images/home-active.svg",
                },
                {
                    name: "watch",
                    src: "/src/assets/images/watch.svg",
                    srcActive: "/src/assets/images/watch-active.svg",
                },
                {
                    name: "market-place",
                    src: "/src/assets/images/market-place.svg",
                    srcActive: "/src/assets/images/market-place-active.svg",
                },
                {
                    name: "group",
                    src: "/src/assets/images/group.svg",
                    srcActive: "/src/assets/images/group-active.svg",
                },
            ],

            categoryItemActive: "home",
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
};
</script>
<style lang="css" scoped>
#header {
    height: 5%;
    display: flex;
    background-color: #242526;
    color: #e4e6eb;
}

/* LEFT HEADER */
.left-header {
    height: 100%;
    width: 20%;
    display: flex;
    align-items: center;
    margin: 0 16px;
}

.left-header img {
    height: 80%;
    cursor: pointer;
}

.left-header .group-search {
    margin-left: 12px;
    height: 80%;
    position: relative;
    background-color: #3a3b3c;
    border-radius: 50px;
    display: flex;
    align-items: center;
}

.left-header .icon-search {
    padding-left: 12px;
}

.left-header .input-search {
    border-radius: 50px;
    padding: 7px 8px;
    outline: none;
    background-color: transparent;
}

/* CENTER-HEADER */
.center-header {
    width: 60%;
}

.category {
    height: 100%;
    display: flex;
    width: fit-content;
    margin: 0 auto;
}

.category-item {
    height: 100%;
    width: 13%;
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
    width: 20%;
    position: relative;
}

.action-extend {
    position: absolute;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
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
    background: url("https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b52bf5e0a914ece14f6a27286a697941.jpeg?x-expires=1654020000&x-signature=kPJEHqEOlz%2BykeFxiVGTCC6M2Vs%3D");
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
