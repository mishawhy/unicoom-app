<template>
  <div class="select-panel-container align-items-end text-center">
    <div class="mb-0 p-0">
      <!-- <a class="btn-slkt mt-0 text-left" v-touch:tap="slkt"> -->
      <b-button
        v-touch:tap="slkt"
        id="bt"
        variant="primary"
        size="lg"
        pill
        class="shadow mt-3 pr-3"
      >
        <i v-if="!select" class="fas fa-hand-paper  mr-2 ml-2"></i>
        <transition name="bounce">
          <i v-if="select" class="fas fa-check mr-2 ml-2"></i>
        </transition>
        <span v-if="!select">400-800 ₴/день</span>
        <span v-if="select">Резюме відправлено</span>
      </b-button>
      <!-- </a> -->
    </div>
  </div>
</template>

<script>
import BtnSlkt from '@/assets/btn-slkt.svg';
import BtnActive from '@/assets/btn-slkt-active.svg';
export default {
  data() {
    return {
      btnIcon: BtnSlkt,
      btnActive: BtnActive,
      select: false,
    };
  },
  props: {
    telegram: {
      type: String,
    },
  },
  methods: {
    slkt() {
      this.select = true;
      setTimeout(() => {
        this.select = false;

        this.$emit('select');
      }, 1500);
    },
  },
  name: 'SelectPanel',
};
</script>

<style lang="scss">
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
// .bounce-leave-active {
//   animation: bounce-in 0.5s reverse;
// }
@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  25% {
    transform: scale(5.5);
  }
  50% {
    transform: scale(7.5);
    opacity: 0.6;
  }
  60% {
    transform: scale(4.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.btn-slkt {
  padding-left: 30px;
  padding-top: 0px;
  padding-right: 20px;
  width: 220px;
}
.select-panel-container {
  z-index: 1000;
  width: 100%;
  position: absolute;
  // border: 1px solid red;
  bottom: 7vh;
}
.select-panel {
  border-radius: 100;
  width: 50%;
}
</style>
