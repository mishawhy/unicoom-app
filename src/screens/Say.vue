<template>
  <div>
    <TopPanelStart />
    <UploadPanel />
  </div>
</template>

<script>
import Feed from '@/components/Feed';
import UploadPanel from '@/components/UploadPanel';
import TopPanelStart from '@/components/TopPanelStart';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    UploadPanel,
    TopPanelStart,
  },
  computed: mapState(['loading']),
  async created() {
    await this.getUser();
  },
  methods: {
    ...mapActions(['getUser']),
  },
};
</script>
