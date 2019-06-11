<template>
  <div>
    <div class="over-container">
      <TopLogoHeader />
      <AuthPanel />
    </div>
    <BgFeed />
  </div>
</template>

<script>
import BgFeed from '@/components/BgFeed';
import AuthPanel from '@/components/AuthPanel';
import TopLogoHeader from '@/components/TopLogoHeader';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    BgFeed,
    AuthPanel,
    TopLogoHeader,
  },
  async mounted() {
    console.log(process.env.NODE_ENV, process.env.VUE_APP_ENDPOINT);
    await this.logout();
  },
  methods: {
    ...mapActions(['logout']),
  },
};
</script>
