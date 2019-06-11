<template>
  <div class="select-panel-container position-fixed fixed-bottom text-center justify-content-end">
    <div class="mb-0 p-0">
      <span v-if="!loading">
        <h4 class="text-white mb-5" v-for="template in templates">"{{ template.text }}"</h4>
        <b-button pill class="pl-3 pr-3 mb-4" :active="false" variant="dark" @click="nextTemplates"
          >What to say for start?</b-button
        >
      </span>
      <lottie v-if="!loading" :options="defaultOptions" :height="100" :width="700" />
      <input
        id="fileUpload"
        type="file"
        accept="video/*"
        v-on:change="changeFile"
        capture="user"
        hidden
        ref="file"
      />

      <b-spinner
        large
        style="width: 3rem; height: 3rem;"
        type="grow"
        class="text-white mr-1"
        v-if="loading"
      ></b-spinner>

      <v-touch v-on:tap="upload" v-if="!loading">
        <img :src="btnIcon" width="70" />
      </v-touch>
    </div>
  </div>
</template>

<script>
import BtnUpload from '@/assets/btn-upload.png';
import axios from 'axios';
import Lottie from 'vue-lottie';
import * as animationData from '@/plugins/lottie.json';
export default {
  data() {
    return {
      btnIcon: BtnUpload,
      file: '',
      url: 'http://192.168.0.102:8000/api/publish/new',
      headers: {},
      loading: false,
      defaultOptions: {
        animationData: animationData.default,
        autoplay: true,
        loop: true,
        rendererSettings: {
          className: 'lottie-box',
        },
      },
      animationSpeed: 1,
      templatesItems: [
        { text: 'Quick business talk about local shares market' },
        { text: 'Just talk with hookhah' },
        { text: 'Watch a film today evening' },
        { text: 'Go to the pool party' },
        { text: 'Drink cocktail' },
        { text: 'Beach club relax day' },
        { text: 'Coffee meeting' },
        { text: 'Go to theatre' },
      ],
      current: 3,
    };
  },
  computed: {
    templates: function() {
      return this.templatesItems.slice(this.current - 3, this.current);
    },
  },
  methods: {
    nextTemplates() {
      if (this.templatesItems.length > this.current) {
        const dif = this.templatesItems.length - this.current;
        if (dif < 3) {
          this.current = this.current + dif;
        } else {
          this.current = this.current + 3;
        }
      } else {
        this.current = 3;
      }
    },
    changeFile() {
      this.file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append('file', this.file);
      this.loading = true;
      axios
        .post(`${process.env.VUE_APP_ENDPOINT}api/publish/new`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(e => {
          this.loading = false;
          this.$router.push({ path: '/' });
          console.log('SUCCESS!!', e);
        })
        .catch(e => {
          this.loading = false;
          console.log('FAILURE!!', e);
        });
    },
    onProgress(event) {
      console.log(event);
      // Handdle the progress
    },
    // changeFile(file) {
    //   this.loading = true;
    //   console.log(file);
    // },
    upload() {
      document.getElementById('fileUpload').click();
    },
  },
  name: 'UploadPanel',
  components: {
    lottie: Lottie,
  },
};
</script>

<style lang="scss">
.lottie-box {
  left: 0%;
  bottom: -20%;
  z-index: 1; // lowest in your page
  position: fixed; // or static, depending on what you have
  width: 140%;
  height: 100%;
  pointer-events: none;
}
.btn-upload {
  padding: 50px;
  padding-left: 40px;
  padding-right: 40px;
}
</style>
