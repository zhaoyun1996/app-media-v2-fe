<template>
    <TheNavbar />
    <div class="content">
        <LeftContent />
        <RightContent />
    </div>
    <!-- <Footer /> -->
</template>

<script>
import TheNavbar from "@/components/layout/TheNavbar.vue";
import LeftContent from "@/components/layout/LeftContent.vue";
import RightContent from "@/components/layout/RightContent.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
    name: "Mai",
    components: {
        TheNavbar,
        LeftContent,
        RightContent,
        Footer,
    }
};
</script>

<style>
.content {
    height: 94%;
    display: flex;
}
</style>
