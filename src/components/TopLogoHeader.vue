<template>
  <div class="position-fixed fixed-top text-center border-white p-3">
    <a href="/enter" class="btn-white">
      <div class=" slkt-logo p-3"><img :src="logo" /></div>
    </a>
  </div>
</template>

<script>
import SlktLogo from '@/assets/slkt-logo-text-black.svg';
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
    max-height: 100%;
    height: 100%;
  }
  height: 120px;
}
</style>
