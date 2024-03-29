<template>
    <div id="dropdown" :class="[classList, 'relative']">
        <button class="z-10 relative flex items-center focus:outline-none select-none" @click="open = !open">
            <slot name="button"></slot>
        </button>

        <!-- to close when clicked on space around it-->
        <button class="fixed inset-0 h-full w-full cursor-default focus:outline-none" v-if="open" @click="open = false"
            tabindex="-1"></button>

        <!--dropdown menu-->
        <transition enter-active-class="transition-all duration-200 ease-out"
            leave-active-class="transition-all duration-750 ease-in" enter-class="opacity-0 scale-75"
            enter-to-class="opacity-100 scale-100" leave-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-75">
            <div class="absolute shadow-lg w-48 rounded px-2 mt-4 z-10" id="content"
                :class="placement === 'right' ? 'right-0' : 'left-0'" v-if="open">
                <slot name="content"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            open: false,
        };
    },

    props: {
        placement: {
            type: String,
            default: "right",
            validator: (value) => ["right", "left"].indexOf(value) !== -1,
        },

        classList: {
            type: String
        }
    },
    
    mounted() {
        this.onEscape = (e) => {
            if (e.key === "Esc" || e.key === "Escape") {
                this.open = false;

                this.$emit("open", this.open);
            }
        };

        this.onClick = (e) => {
            var targetDropdown = document.getElementById('dropdown');
            var clickedDropdown = targetDropdown.contains(e.target);

            if (!clickedDropdown) {
                this.open = false;
            }

            var targetContent = document.getElementById('content');

            if(targetContent) {
                var clickedContent = targetContent.contains(e.target);

                if (clickedContent) {
                    this.open = false;
                }
            }

            this.$emit("open", this.open);
        };

        document.addEventListener("keydown", this.onEscape);
        document.addEventListener("click", this.onClick);
    },

    beforeUnmount() {
        document.removeEventListener("keydown", this.onEscape);
        document.removeEventListener("click", this.onClick);
    },
};
</script>