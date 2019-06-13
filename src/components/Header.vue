<template>
  <div class=" d-flex header-box text-center justify-content-between p-3 w-100 ">
    <b-link to="say" class="btn-white btn-link-2  d-flex w-20">
      <div class="slkt-logo"><img :src="userBtn" /></div>
    </b-link>

    <b-link href="/enter" class="btn-white btn-link-2 d-flex text-right w-20">
      <div class="slkt-logo"><img :src="slktActive" /></div>
    </b-link>
    <b-link href="/enter" class="btn-white btn-link-2 d-flex w-60">
      <div class="slkt-logo"><img :src="logo" /></div>
    </b-link>
  </div>
</template>

<script>
import slktActive from '@/assets/slkt-text.svg';
import SlktLogo from '@/assets/slkt-active.svg';
import btnUser from '@/assets/btn-user.png';
export default {
  data() {
    return {
      logo: SlktLogo,
      userBtn: btnUser,
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
  height: 30px;
}
.slkt-logo-2 {
  img {
    max-height: 100%;
    height: 100%;
  }
  height: 50px;
}
</style>
