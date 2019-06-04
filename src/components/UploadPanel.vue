<template>
  <div class="select-panel-container position-fixed fixed-bottom text-center justify-content-end">
    <div class="mb-0 p-0">
      <input id="fileUpload" type="file" accept="video/*" capture="user" hidden />
      <v-touch v-on:tap="upload">
        <a class="btn-slkt mt-0 text-left">
          <img :src="btnIcon" width="70" />
        </a>
      </v-touch>
    </div>
  </div>
</template>

<script>
import BtnUpload from '@/assets/btn-upload.png';
export default {
  data() {
    return {
      btnIcon: BtnUpload,
    };
  },
  methods: {
    upload() {
      document.getElementById('fileUpload').click();
      this.$router.push({ path: '/' });
    },
  },
  name: 'UploadPanel',
};
</script>

<style lang="scss"></style>
