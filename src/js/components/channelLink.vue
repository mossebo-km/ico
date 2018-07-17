<template>
    <div>
        <a :href="links[currentSlide]"
           class="button button-primary"
           target="_blank">
            {{ title }}
        </a>
    </div>
</template>

<script>
    export default {
        name: "channelLink",
        data() {
            return {
                title: window.mossebo.channelLink.title,
                links: window.mossebo.channelLink.links,
                currentSlide: 0
            }
        },
        methods: {
            getCurrentSlide: function() {
                setInterval(() => {

                    let allSlides = document.getElementsByClassName('carousel-3d-slide');
                    let i = 0;
                    ;[].forEach.call(allSlides, slide => {
                        if(slide.classList.contains('current')){
                            this.currentSlide = i;
                            i = 0;
                        }
                        else  {
                            i++;
                        }
                    })

                }, 600);

            }
        },
        mounted() {
            this.getCurrentSlide();
        }
    }
</script>

<style scoped>

</style>
