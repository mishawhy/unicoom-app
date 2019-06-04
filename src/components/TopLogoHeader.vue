<template>
  <div class="position-fixed fixed-top text-center border-white p-3">
    <a href="/" class="btn-white">
      <div class="icon slkt-logo p-3"><img :src="logo" /></div>
    </a>
  </div>
</template>

<script>
import SlktLogo from '@/assets/slkt-logo-text.svg';
export default {
  data() {
    return {
      logo: SlktLogo,
    };
  },
  mounted() {},
  methods: {},
  name: 'TopLogoHeader',
};
</script>

<style lang="scss">
.slkt-logo {
  img {
    width: 100%;
  }
  width: 70%;
}
</style>
