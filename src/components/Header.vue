<template>
  <div class=" d-flex header-box text-center justify-content-between p-3 w-100 ">
    <b-link to="/" class="btn-white btn-link-2  d-flex w-20 mt-2">
      <div class="slkt-logo"><img :src="btnSlkt" /></div>
    </b-link>

    <b-link to="say" class="btn-white btn-link-2 d-flex w-60 mt-3">
      <div class="slkt-logo-2"><img :src="logo" /></div>
    </b-link>
    <b-link to="meet" class="btn-white btn-link-2 d-flex text-right w-20">
      <div class="slkt-logo-3"><img :src="slktActive" /></div>
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
