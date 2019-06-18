<template>
  <div class="select-panel-container position-fixed fixed-bottom text-center justify-content-end">
    <div class="mb-0 p-3 pb-0">
      <span v-if="!loading">
        <h4 class=" mb-5 font-weight-normal" v-for="template in templates">
          "{{ template.text }}"
        </h4>
        <b-button
          pill
          class="pl-3 template-btn pr-3 mb-4"
          :active="false"
          variant="light"
          @click="nextTemplates"
          >Що сказати?</b-button
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
        class="mr-1"
        v-if="loading"
      ></b-spinner>
      <b-button
        pill
        size="lg"
        variant="primary"
        class="w-100 p-3 text-left font-weight-bolder shadow-sm"
        v-touch:tap="upload"
        v-if="!loading"
      >
        <i class="fas fa-video mr-2 ml-3"></i>
        Сказати привіт
      </b-button>
      <!-- <a >
        <img :src="btnIcon" width="70" />
      </a> -->
    </div>
  </div>
</template>

<script>
import BtnUpload from '@/assets/btn-upload-black.png';
import axios from 'axios';
import Lottie from 'vue-lottie';
import * as animationData from '@/plugins/lottie-blue.json';
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
        { text: 'Привіт, я добре знаю англійську' },
        { text: 'Привіт, я в універі був організатором' },
        { text: 'Привіт, я минулого літа працював в США логістом' },
        // { text: 'Привет, хочу вечером покурить кальян' },
        // { text: 'Привет, скучно, хочу прогулятся' },
        // { text: 'Привет, было бы неплохо поболтать за кофе' },
        // { text: 'Привет, настроение потусить где-то' },
        // { text: 'Привет, хочу на суши' },
        // { text: 'Привет, настроение посмотреть фильм' },
        // { text: 'Привет, хочу вечером погулять на контрактовой' },
        // { text: 'Привет, сегодня пью коктейли, много' },
      ],
      current: 1,
    };
  },
  computed: {
    templates: function() {
      return this.templatesItems.slice(this.current - 1, this.current);
    },
  },
  methods: {
    nextTemplates() {
      if (this.templatesItems.length > this.current) {
        const dif = this.templatesItems.length - this.current;
        if (dif < 1) {
          this.current = this.current + dif;
        } else {
          this.current = this.current + 1;
        }
      } else {
        this.current = 1;
      }
    },
    changeFile() {
      this.$router.push({ path: '/' });
      // this.file = this.$refs.file.files[0];
      // let formData = new FormData();
      // formData.append('file', this.file);
      // this.loading = true;
      // axios
      //   .post(`${process.env.VUE_APP_ENDPOINT}api/publish/new`, formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   })
      //   .then(e => {
      //     this.loading = false;
      //     this.$router.push({ path: '/' });
      //     console.log('SUCCESS!!', e);
      //   })
      //   .catch(e => {
      //     this.loading = false;
      //     console.log('FAILURE!!', e);
      //   });
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
      // this.$router.push({ path: '/' });
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
// .btn-green {
//   background-color: #00ff8d !important;
//   border-color: #00ff8d;
//   color: black;
// }
// .btn-green:hover {
//   border-color: #00eb82;
//   background-color: #00eb82 !important;
//   color: black;
// }
.lottie-box {
  left: 0%;
  bottom: -20%;
  z-index: 1; // lowest in your page
  position: fixed; // or static, depending on what you have
  width: 140%;
  height: 100%;
  pointer-events: none;
}
.template-btn {
  background-color: #e2e6ea !important;
}
.btn-upload {
  padding: 50px;
  padding-left: 40px;
  padding-right: 40px;
}
</style>
