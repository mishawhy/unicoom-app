<template>
  <div
    v-touch:tap="onTap"
    v-touch:swipeleft="onSwipeLeft"
    v-touch:press="onPress"
    v-touch:pressup="onPressUp"
    class="shadow-sm d-flex align-items-stretch m-2 page"
  >
    <div class="header-say position-absolute fixed-top">
      <b-button variant="light" pill class="mt-3 shadow" style="font-size:21px"
        >Офіціант у МакДоналдс, Львів</b-button
      >
    </div>
    <vue-plyr ref="plyr" :options="options">
      <cld-video
        :cloudName="video.cloudName"
        :publicId="video.publicId"
        fallbackContent="Your browser does not support HTML5 video tags."
        playsinline="true"
        autoplay="true"
      >
        <cld-transformation crop="fill" height="650" width="360" quality="90" />
        <cld-poster>
          <cld-transformation crop="fill" height="650" width="360" />
          <cld-transformation v-bind:dpr="devicePixelRatio" />
        </cld-poster>
      </cld-video>
    </vue-plyr>
  </div>
</template>

<script>
import SelectPanel from '@/components/SelectPanel';
import { CldContext, CldImage, CldPoster, CldVideo, CldTransformation } from 'cloudinary-vue';

export default {
  props: {
    index: {
      type: Number,
      default: -1,
    },
    current: {
      type: Number,
    },
    video: {
      type: Object,
    },
  },
  watch: {
    current: {
      // the callback will be called immediately after the start of the observation
      // immediate: true,
      handler(val, oldVal) {
        if (val == this.index - 1) {
          this.player.muted = true;
          this.player.play();
          console.log('active');
        }

        if (oldVal == this.index - 1) {
          this.player.stop();
        }
      },
    },
  },
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      options: {
        controls: [],
        hideControls: true,
        clickToPlay: false,
        fullscreen: { enabled: false, iosNative: false },
        muted: true,
        debug: false,
      },
      devicePixelRatio: window.devicePixelRatio,
    };
  },
  components: {
    SelectPanel,
    CldPoster,
    CldContext,
    CldImage,
    CldVideo,
    CldTransformation,
  },
  mounted() {
    this.player.on('ended', () => {
      this.$emit('next');
    });
  },
  methods: {
    onSwipeLeft() {
      // const href = `https://t.me/${this.video.telegram}`;
      // var redirectWindow = window.open(href, '_blank');
      // redirectWindow.location;
    },
    onTap() {
      this.player.muted = false;
      this.player.play();
    },
    onPress() {
      this.player.pause();
    },
    onPressUp() {
      this.player.play();
    },
  },
  computed: {
    player() {
      return this.$refs.plyr.player;
    },
  },
};
</script>

<style lang="scss">
.header-say {
  z-index: 1000;
  width: 100%;
  position: absolute;
  // border: 1px solid red;
  bottom: 7vh;
  // background-color: rgba(0, 0, 0, 0.3);
}
.page {
  // height: 100%;
  // height: 100%;
  // padding-bottom: 0;
  // align-items: top;
  // justify-content: top;
  // font-size: 100px;
  // color: #fff;
  // border-radius: 10px;
  // background-color: red;
  // max-width: 350px;
  overflow: hidden;
  border-radius: 10px;
  max-height: 72vh !important;
}
.plyr {
  margin: 0px auto;
  margin-bottom: 0px !important;
  background-color: #f9f9f9 !important;
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
  overflow: hidden;
  max-height: 100%;
  // min-width: 420px !important;
}
.plyr__controls,
.plyr__video-wrapper {
  background-color: #f9f9f9 !important;
  border-radius: 10px;
  overflow: hidden;
}
.plyr--video {
  max-height: 100%; /* or whatever value you need */
  display: flex;
  border-radius: 10px;
  /* vertical alignment */
  align-items: center;

  /* horizontal alignment (use this if you don't set full width of .plyr__video-wrapper) */
  justify-content: center;
}

.plyr__video-wrapper {
  /* Stretch wrapper to full width */
  width: 100%;
}
</style>
