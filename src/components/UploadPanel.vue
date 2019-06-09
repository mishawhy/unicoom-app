<template>
  <div class="select-panel-container position-fixed fixed-bottom text-center justify-content-end">
    <div class="mb-0 p-0">
      <h6 class="text-white mb-5">TELL ABOUT YOUR IDEA TO MEET</h6>
      <h4 class="text-white mb-5">"Quick business talk about local shares market"</h4>
      <h4 class="text-white mb-5">"Just talk with hookhah"</h4>
      <h4 class="text-white mb-5">"Watch a film today evening"</h4>
      <input id="fileUpload" type="file" accept="video/*" capture="user" hidden />
      <v-touch v-on:tap="upload">
        <a class="btn-slkt btn-upload text-center mt-0">
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

<style lang="scss">
.btn-upload {
  padding: 50px;
  padding-left: 40px;
  padding-right: 40px;
}
</style>
