<template lang="">
    <div id="right-content">
        <router-view />
    </div>
</template>
<script>
export default {
    name: "RightContent"
};
</script>
<style lang="css" scoped>
#right-content {
    width: 82%;
    background-color: #18191a;
    color: #e4e6eb;
    overflow: auto;
    overflow: overlay;
    position: relative;
}
</style>
