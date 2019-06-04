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

export default {
  components: {
    UploadPanel,
    TopPanelStart,
  },
  mounted() {},
};
</script>
