<template>
  <div>
    <b-spinner
      large
      style="width: 3rem; height: 3rem;"
      type="grow"
      class="text-white mr-1"
      v-if="loading"
    ></b-spinner>
    <TopPanelStart v-if="!loading" />
    <UploadPanel v-if="!loading" />
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
