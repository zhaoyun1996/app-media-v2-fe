<template lang="">
    <div id="left-content">
        <router-link :to="{ path: '/profile' }">
            <div class="left-content-item">
                <div class="user content-item">
                    <div class="avatar"></div>
                    <span class="user-name">Vũ Văn</span>
                    <div class="content-item-background"></div>
                </div>
            </div>
        </router-link>
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
</template>
<script>
import images from "@/assets/images";
export default {
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
        };
    },

    mounted() {
        const me = this;

        for (let index = 0; index < 20; index++) {
            const element = me.leftItems[index % 3];
            me.leftItems.push(element);
        }
    },
};
</script>
<style lang="css" scoped>
#left-content {
    width: 15%;
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
</style>
