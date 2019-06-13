<template>
  <div class="d-flex position-absolute fixed-bottom align-items-end">
    <div class="mb-0 p-0">
      <a class="btn-slkt mt-0 text-left" v-touch:tap="slkt">
        <img v-if="!select" :src="btnIcon" width="70" />

        <transition name="bounce">
          <img v-if="select" :src="btnActive" width="70" />
        </transition>
      </a>
    </div>
    <!-- <div class="mt-0 p-0">
      <a :href="'https://t.me/' + telegram" class="btn btn-lg google"
        ><i class="fab fa-telegram"></i
      ></a>
    </div> -->
  </div>
</template>

<script>
import BtnSlkt from '@/assets/btn-slkt.svg';
import BtnSlktActive from '@/assets/btn-slkt-active-2.svg';
export default {
  data() {
    return {
      btnIcon: BtnSlkt,
      btnActive: BtnSlktActive,
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
  bottom: 30px;
}
.select-panel {
  border-radius: 100;
  width: 50%;
}
</style>
