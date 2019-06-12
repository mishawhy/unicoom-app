<template>
  <div class="position-fixed fixed-bottom text-center border-white p-3 pb-5">
    <div v-if="!confirmation">
      <h3 class="mb-5">Meet easy <br />with people nearby</h3>
      <!-- <vue-telegram-login
      mode="redirect"
      telegram-login="slktbot"
      redirect-url="https://slkt-dev.herokuapp.com/api/auth/telegram"
    /> -->
      <vue-phone-number-input
        default-country-code="UA"
        v-model="phoneNumber"
        @update="updatePhone"
      />
      <!-- <b-button
        id="bt2"
        class="btn btn-dark rounded mt-3 btn-lg w-100"
        v-touch:tap="confirmationStep"
      >
        Get started
      </b-button> -->
    </div>
    <div v-if="confirmation">
      <h3 class="mb-5">Enter SMS code</h3>
      <!-- <vue-telegram-login
      mode="redirect"
      telegram-login="slktbot"
      redirect-url="https://slkt-dev.herokuapp.com/api/auth/telegram"
    /> -->
      <b-form-input
        v-model="confirmationCode"
        type="tel"
        size="lg"
        class=" text-center"
        placeholder="5 digits code"
      ></b-form-input>
      <b-button v-touch:tap="goToStart" id="bt" class="btn btn-dark rounded mt-3 btn-lg w-100">
        Start
      </b-button>
    </div>
  </div>
</template>

<script>
import { vueTelegramLogin } from 'vue-telegram-login';

export default {
  data() {
    return {
      confirmation: false,
      phoneNumber: '',
      confirmationCode: '',
    };
  },
  methods: {
    confirmationStep() {
      console.log('s');
      this.confirmation = true;
    },
    updatePhone(d) {
      if (d.isValid) this.confirmationStep();
    },
    goToStart() {
      console.log('s2');
      this.$router.push({ path: '/start' });
    },
  },
  components: {
    vueTelegramLogin,
  },
  name: 'AuthPanel',
};
</script>

<style lang="scss"></style>
