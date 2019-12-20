import Vue from 'vue'
import SwiperSlide from './SwiperSlide'
import Swiper      from './Swiper'


const Components = {
  Swiper,
  SwiperSlide
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;

