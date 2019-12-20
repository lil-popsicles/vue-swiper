<template>
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <!-- Slides -->
        <div class="swiper-wrapper" style="height: auto">
            <slot>
                <swiper-slide></swiper-slide>
            </slot>
        </div>
        <!-- If we need pagination -->
        <!--      <div class="swiper-pagination"></div>-->

        <!-- If we need navigation buttons -->
        <template>
            <div class="swiper-button-prev" :class="{hidden: !navigation}">
            </div>
            <div class="swiper-button-next" :class="{hidden: !navigation}">
            </div>
        </template>
    </div>
</template>

<script>
    const swiper = require('swiper/js/swiper.min');
    import 'swiper/css/swiper.min.css'
    import SwiperSlide from './SwiperSlide'

    export default {
        name: 'Swiper',
        components: {SwiperSlide},
        mounted() {
            this.initSwiper()
        },
        props: {
            loop: {
                type: Boolean, default: true, required: false
            },
            slidesPerView: {
                default: 1, type: [String, Number], required: false
            }, spaceBetween: {
                default: 0, type: Number, required: false
            },
            watchOverflow: {
                default: true, type: Boolean, required: false
            },
            freeMode: {
                default: false, type: Boolean, required: false
            },
            centeredSlides: {
                default: true, type: Boolean, required: false
            },
            autoplay: {
                default: true, type: Boolean, required: false
            }, autoHeight: {
                default: false, type: Boolean, required: false
            },
            navigation: {
                default: true, type: Boolean, required: false
            },
            breakpoints: {
                type: Object,
                required: false,
                default() {
                    return {}
                }
            }
        },
        methods: {
            initSwiper() {
                new swiper(this.$el, {
                    // Navigation arrows
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    spaceBetween: this.spaceBetween,
                    loop: this.loop,
                    slidesPerView: this.slidesPerView,
                    watchOverflow: this.watchOverflow,
                    freeMode: this.freeMode,
                    centeredSlides: this.centeredSlides,
                    autoplay: this.autoplay,
                    autoHeight: this.autoHeight,
                    breakpoints: this.breakpoints
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .swiper-container {
        width: 100%;
        height: 100%;
        align-items: center;
        color: #999;
        display: flex;
        justify-content: center;
        background-color: transparent;

        &:hover {
            .swiper-button-prev,
            .swiper-button-next {
                @apply text-gray-500;
            }
        }


        .swiper-button-prev,
        .swiper-button-next {
            @apply text-gray-100;
            &:after {
                font-size: 18px;
            }
        }
    }

</style>
