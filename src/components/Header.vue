<template>
  <div class=" d-flex header-box text-center justify-content-between p-3 w-100 ">
    <b-link to="/" class="btn-white btn-link-2  d-flex w-20 mt-2">
      <div class="slkt-logo"><img :src="btnSlkt" /></div>
    </b-link>

    <b-link class="btn-white btn-link-2 d-flex w-60 mt-3">
      <div class="slkt-logo-2"><img :src="logo" /></div>
    </b-link>
    <b-link to="say" class="text-dark border-0 d-flex text-right p-3 w-10">
      <i class="far fa-user-circle" style="font-size:28px"></i>
    </b-link>
  </div>
</template>

<script>
import slktLogo from '@/assets/slkt-text.svg';
import slktActive from '@/assets/slkt-active.svg';
import BtnSlkt from '@/assets/btn-slkt.svg';
export default {
  data() {
    return {
      logo: slktLogo,
      btnSlkt: BtnSlkt,
      slktActive: slktActive,
    };
  },
  mounted() {},
  methods: {},
  name: 'TopLogoHeader',
};
</script>

<style lang="scss">
.btn-link-2 {
}
.header-box {
}
.slkt-logo {
  img {
    max-height: 100%;
    height: 100%;
  }
  height: 40px;
}
.slkt-logo-2 {
  img {
    max-height: 100%;
    height: 100%;
  }
  height: 20px;
}
.slkt-logo-3 {
  img {
    max-height: 100%;
    height: 100%;
  }
  height: 45px;
}
</style>
