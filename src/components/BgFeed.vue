<template>
  <div class="bg-feed">
    <swiper
      v-if="!loading && !error"
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
        <Want :index="index + 1" :video="item" :current="indicator" @next="next" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import TopPanel from '@/components/TopPanel';
import { Swiper, SwiperItem } from 'vue-h5-swiper';
import SelectPanel from '@/components/SelectPanel';
import BgWant from './BgWant';
import { getFeed } from '@/services/feed';

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
    Want: BgWant,
    Swiper,
    SwiperItem,
    TopPanel,
  },
  data() {
    return {
      feed: [],
      loop: true,
      autoplay: false,
      interval: 1000,
      showIndicator: false,
      pageTransition: PAGE_TRANSITIONS[6],
      pageTransitions: PAGE_TRANSITIONS,
      indicator: 0,
      loading: false,
      error: '',
    };
  },
  async mounted() {
    this.loading = true;
    try {
      this.feed = await getFeed();
      this.loading = false;
    } catch (e) {
      this.error = 'something goes wrong';
    }
  },
  methods: {
    beforeChange(activeIndex, oldIndex) {},
    afterChange(activeIndex, oldIndex) {
      this.indicator = activeIndex;
    },
    playSelected(index) {
      this.$refs.swiperItem.moveTo(index);
    },
    next() {
      this.$refs.swiperItem.next();
    },
  },
};
</script>

<style lang="scss">
.bg-feed {
  opacity: 0.4;
}
</style>
