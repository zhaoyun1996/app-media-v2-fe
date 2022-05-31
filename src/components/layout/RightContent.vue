<template lang="">
    <div id="right-content">
        <Image v-if="false" />
        <Audio v-if="false" />
        <router-view />
    </div>
</template>
<script>
import Image from "../media/Image.vue";
import Audio from "../media/Audio.vue";

export default {
    name: "RightContent",
    components: {
        Image,
        Audio,
    },
};
</script>
<style lang="css" scoped>
#right-content {
    width: 82%;
    background-color: #18191a;
    color: #e4e6eb;
    overflow: auto;
    overflow: overlay;
}
</style>
