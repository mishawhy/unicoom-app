<template>
  <div class="meet-panel-container align-items-end text-right pr-3">
    <div class="mb-0 p-0">
      <a class="p-3 text-dark" href="whatsapp://send?phone=+380688880896">
        <i class="fab fa-whatsapp" style="font-size:50px"></i>
      </a>
      <a class="p-3 text-dark" href="viber://chat?number=+380688880896">
        <i class="fab fa-viber" style="font-size:50px"></i>
      </a>

      <!-- <a class="btn-slkt mt-0 text-left" href="viber://chat?number=+380688880896">
        <img :src="btnPhone" width="55" />
      </a> -->
    </div>
  </div>
</template>

<script>
import BtnPhone from '@/assets/btn-phone.svg';
export default {
  data() {
    return {
      btnPhone: BtnPhone,
    };
  },
  methods: {
    slkt() {
      this.select = true;
      setTimeout(() => {
        this.$emit('select');
      }, 500);
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
.meet-panel-container {
  z-index: 1000;
  width: 100%;
  position: absolute;
  // border: 1px solid red;
  bottom: 2vh;
}
.select-panel {
  border-radius: 100;
  width: 50%;
}
</style>
