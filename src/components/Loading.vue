

<template>
    <div id="loading">
        <div class="loading-modal"></div>
        <div class="loading">
            <div class="effect-1 effects"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Loading"
};
</script>

<style>
#loading {
    width: 100%;
    height: 100%;
    background: transparent;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 2;
}

.loading-modal {
    width: 100%;
    height: 100%;
    background: #fff;
    display: block;
    position: absolute;
    z-index: 9998;
    opacity: 0.2;
}

.loading {
    position: absolute;
    left: calc(50% - 27px);
    top: calc(50% - 27px);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 3px solid transparent;
    z-index: 9999;
}

.loading .effects {
    transition: all 0.3s ease;
}

.loading .effect-1 {
    animation: rotate 1s ease infinite;
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
    box-sizing: border-box;
    background: transparent url("@/assets/images/loading.svg") no-repeat center;
    background-size: 100%;
}

@-webkit-keyframes rotate {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}

@-moz-keyframes rotate {
    from {
        -moz-transform: rotate(0deg);
    }

    to {
        -moz-transform: rotate(360deg);
    }
}

@-ms-keyframes rotate {
    from {
        -ms-transform: rotate(0deg);
    }

    to {
        -ms-transform: rotate(360deg);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}</style>
