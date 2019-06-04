<template>
  <div class="page">
    <v-touch
      v-on:tap="onTap"
      v-on:swipeleft="onSwipeLeft"
      v-on:press="onPress"
      v-on:pressup="onPressUp"
    >
      {{ video.posters }}
      <vue-plyr ref="plyr" :options="options">
        <cld-video
          :cloudName="video.cloud"
          :publicId="video.publicId"
          fallbackContent="Your browser does not support HTML5 video tags."
          playsinline="true"
          autoplay="true"
        >
          <cld-transformation crop="fill" height="630" width="355" quality="70" />
          <cld-poster>
            <cld-transformation crop="fill" height="630" width="355" />
            <cld-transformation v-bind:dpr="devicePixelRatio" />
          </cld-poster>
        </cld-video>
      </vue-plyr>
    </v-touch>
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
.page {
  position: absolute;
  overflow-y: hidden !important;
  min-height: 100vh;
  padding-bottom: 0;
  width: 100%;
  display: flex;
  align-items: top;
  justify-content: top;
  font-size: 100px;
  color: #fff;
  max-width: 400px;
  background-color: black;
}
.plyr {
  margin: 0px auto;
  margin-bottom: 0px !important;
  max-height: 100%;
  background-color: yellow !important;
  width: 100%;
  min-width: 420px !important;
}
</style>
