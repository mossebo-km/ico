<template>
    <div class="player-box">
        <div class="thumbnail" :style="{ backgroundImage: 'url(' + videoThumb + ')' }">
            <button
                class="play"
                @click="showVideo"
                v-show="activeButton"
            >
                &#9654;
            </button>
            <iframe
                class="video"
                width="560"
                height="315"
                :src="videoUrl"
                v-show="activeVideo"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
            >
            </iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: "youtube",
        props: {
            videoId: String,
            videoThumb: String,
        },
        data() {
            return {
                activeButton: true,
                activeVideo: false,
                videoUrl: null,
            }
        },
        methods: {
            video(code) {
                return '//www.youtube.com/embed/'+ code + '?enablejsapi=1&rel=0&playsinline=1&autoplay=1&showinfo=0&autohide=1&modestbranding=1';
            },
            showVideo(e) {
                e.preventDefault();
                this.activeButton = false;
                this.activeVideo = true;
                this.videoUrl = this.video(this.videoId);
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>

    @import "../../scss/variables/colors";

    .player-box {
        position: relative;
    }
    .thumbnail {
        margin: auto;
        width: 100%;
        max-width: 100%;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        &:before {
            content: "";
            display: block;
            padding-top: 56.25%;
        }
    }
    .play {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -20px;
        margin-left: -20px;
        width: 40px;
        height: 40px;
        background: $color-primary;
        color: $color-background;
        font-size: 20px;
        padding-left: 10px;
        padding-top: 5px;
        border: 1px solid $color-primary;
        border-radius: 50%;
        z-index: 9;
        cursor: pointer;
    }
    .video {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }
</style>
