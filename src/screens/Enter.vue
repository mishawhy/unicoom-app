<template>
  <div>
    <div class="over-container">
      <TopLogoHeader />
      <AuthPanel />
    </div>
  </div>
</template>

<script>
import AuthPanel from '@/components/AuthPanel';
import TopLogoHeader from '@/components/TopLogoHeader';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
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
