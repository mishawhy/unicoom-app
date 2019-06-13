<template>
  <div class="position-fixed fixed-top top-panel-container p-3">
    <b-button-group class="top-panel ">
      <b-button
        class="text-left btn-light rounded-pill btn-selected-2 p-2 pl-3 rounded-right"
        v-if="!wait"
        @click="playSelected"
      >
        <i class="fas mr-1" v-bind:class="{ 'fa-play': !play, 'fa-pause': play }"></i>
        1 selected you to meet</b-button
      >

      <b-button
        class="text-left btn-light  rounded-pill btn-selected-2 p-2 pl-3 rounded-right"
        v-if="wait"
      >
        <b-spinner small type="grow" class=" mr-1"></b-spinner>
        Find matches</b-button
      >

      <b-button v-touch:tap="goToStart" class="w-30 btn-light btn-close rounded-pill p-1"
        >×</b-button
      >
    </b-button-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wait: true,
      play: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.wait = false;
    }, 6000);
  },
  methods: {
    playSelected() {
      this.play = !this.play;
      this.$emit('playSelected', 1);
    },
    goToStart() {
      this.$router.push({ path: '/start' });
    },
  },
  name: 'TopPanel',
};
</script>

<style lang="scss">
.btn-selected-2 {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}
.btn-close {
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  font-size: 25px;
}
.top-panel-container {
  z-index: 1000;
  width: 100%;
  touch-action: manipulation;
}
.top-panel {
  border-radius: 100;
  width: 100%;
}
</style>
