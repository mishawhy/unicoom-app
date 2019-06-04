<template>
  <div class="position-fixed fixed-top top-panel-container p-3">
    <b-button-group class="top-panel ">
      <b-button class="text-left btn-light rounded-pill btn-selected p-2 pl-3 rounded-right">
        <b-spinner small type="grow" class=" mr-1"></b-spinner>
        {{ name }} wait your video</b-button
      >

      <b-button class="w-30 btn-light btn-close rounded-pill p-1" @click="goToEnter">×</b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  mounted() {
    this.name = this.$route.query.name;
  },
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
