<template>
  <div class="position-fixed fixed-top top-panel-container p-3">
    <b-button-group class="top-panel ">
      <b-button class="text-left btn-light rounded-pill btn-selected p-2 pl-3 rounded-right">
        <i class="fas fa-map-marker-alt mr-2"></i>
        Kyiv, Ukraine</b-button
      >
      <b-button v-touch:tap="goToEnter" class="w-30 btn-light btn-close rounded-pill p-1"
        >×</b-button
      >
    </b-button-group>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      mainProps: { width: 35, height: 35, class: 'm1' },
    };
  },
  computed: mapState(['user']),
  methods: {
    playSelected() {
      this.play = !this.play;
      this.$emit('playSelected', 1);
    },
    goToEnter() {
      this.$router.push({ path: '/enter' });
    },
  },
  name: 'TopPanel',
};
</script>

<style lang="scss">
.btn-selected {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}
.btn-light {
  background-color: #e2e6ea !important;
  border-color: #e2e6ea !important;
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
