<template>
  <div class=" d-flex header-box text-center justify-content-center p-3 w-100 ">
    <b-link to="/" class="btn-white btn-link-2 d-flex text-right w-20 mt-2">
      <div class="slkt-logo-3"><img :src="slktActive" /></div>
    </b-link>
    <b-link to="meet" class="btn-white btn-link-2 d-flex text-right w-20 mt-2">
      <div class="slkt-logo-3"><img :src="slktActive" /></div>
    </b-link>
  </div>
</template>

<script>
import slktLogo from '@/assets/slkt-text.svg';
import slktActive from '@/assets/btn-slkt-active.svg';
import btnUser from '@/assets/btn-user.png';
export default {
  data() {
    return {
      logo: slktLogo,
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

.slkt-logo-3 {
  img {
    max-height: 100%;
    height: 100%;
  }
  height: 45px;
}
</style>
