# popsicle-swiper

##Demo

See [vue-swiper](https://5dfd333d31224447370b4f13--stupefied-roentgen-38fd99.netlify.com/)

## Project setup
First setup your vue-cli application. Then you enter the following commands in terminal
```
yarn install
```
OR
```
npm install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### How to use
To begin using the plugin, you must first add it to vue instance

**Globally**
```vuejs
import Vue from 'vue'
import Swiper from '@popsicle/vue-swiper'

Vue.use(Swiper)
```

On a **component**
```vuejs
<script>
import {Swiper, SwiperSlide} from '@popsicle/vue-swiper'

export default({
    component: {
        'swiper': 'Swiper',
        'swiper-slide': 'SwiperSlide'
    }, 
    ...
})
</script>
```
Then you can include it in your vue template as follows:

```vuejs
<swiper></swiper>
```
#### Output:
```html
<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper" style="height: auto">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
    </div>
   
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

</div>
```
#### Props:
|Props          |  Description| Type        |   Default |  Required |
|---------------|-----------  |:-------------:|-----------|-----------|
|`loop`           |Set to true to enable continuous loop mode|`Boolean`      |  `true`     | `false`   |
|`slidesPerView` |Number of slides per view (slides visible at the same time on slider's container).| `auto` or `Number` | 1     | `false`   |
|`spaceBetween` |Distance between slides in px. | `Number` | 0    | `false`   |
|`watchOverflow` |When enabled Swiper will be disabled and hide navigation buttons on case there are not enough slides for sliding| `Boolean` | `true`    | `false`   |
|`freeMode` |slidesPerView: 'auto' is currently not compatible with multirow mode, when slidesPerColumn > 1 | `Boolean` | `false`    | `false`   |
|`centeredSlides` |	If true, then active slide will be centered, not always on the left side. | `Boolean` | `true`    | `false`   |
|`autoplay` | 	Object with autoplay parameters or boolean true to enable with default settings. For example: `{delay: 5000, ...}`| `Boolean` or `Object` | `true`    | `false`   |
|`autoHeight` | 	Set to true and slider wrapper will adopt its height to the height of the currently active slide| `Boolean` | `false`    | `false`   |
|`navigation` | Show or hide navigation| `Boolean` | `true`    | `false`   |
|`breakpoints` | 	Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which are not required different layout and logic, like slidesPerView, slidesPerGroup, spaceBetween, slidesPerColumn.| `Object` | {...}    | `false`   |
|`speed` | Duration of transition between slides (in ms)| `Number` | 300   | `false`   |
|`initialSlide` | 	Index number of initial slide.| `Number` | 0   | `false`   |
|`direction` | 		Could be 'horizontal' or 'vertical' (for vertical slider).| `String` | `horizontal`   | `false`   |

> If you use "margin" css property to the elements which go into Swiper in which you pass "spaceBetween" into, navigation might not work property.

> If you use it with "auto" value and along with loop: true then you need to specify loopedSlides parameter with amount of slides to loop (duplicate)

> slidesPerView: 'auto' is currently not compatible with multirow mode, when slidesPerColumn > 1
