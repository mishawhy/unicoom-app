<template>
  <div>
    <!-- <TopPanel v-on:playSelected="playSelected" /> -->
    <swiper
      v-if="!loading"
      :page-transition="pageTransition"
      :loop="loop"
      :autoplay="autoplay"
      :interval="interval"
      :show-indicator="showIndicator"
      @beforeChange="beforeChange"
      @afterChange="afterChange"
      ref="swiperItem"
    >
      <swiper-item v-for="(item, index) in feed" :key="index">
        <Say :index="index + 1" :video="item" :current="indicator" @next="next" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import TopPanel from '@/components/TopPanel';
import { Swiper, SwiperItem } from 'vue-h5-swiper';
import SelectPanel from '@/components/SelectPanel';
import Say from './Say';
import { mapActions, mapState } from 'vuex';

const PAGE_TRANSITIONS = [
  'move',
  'fade',
  'cover',
  'carousel',
  'scale',
  'glue',
  'cube',
  'push',
  'three',
];
export default {
  components: {
    Say,
    Swiper,
    SwiperItem,
    TopPanel,
  },
  data() {
    return {
      loop: true,
      autoplay: false,
      interval: 1000,
      showIndicator: false,
      pageTransition: PAGE_TRANSITIONS[3],
      pageTransitions: PAGE_TRANSITIONS,
      indicator: 0,
      error: '',
    };
  },
  async mounted() {
    this.getFeed();
  },
  computed: mapState(['feed', 'loading']),
  methods: {
    ...mapActions(['getFeed']),
    beforeChange(activeIndex, oldIndex) {
      this.indicator = activeIndex;
    },
    afterChange(activeIndex, oldIndex) {},
    playSelected(index) {
      this.$refs.swiperItem.moveTo(index);
    },
    next() {
      this.$refs.swiperItem.next();
    },
  },
};
</script>
