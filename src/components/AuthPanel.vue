<template>
  <div class="position-fixed fixed-bottom text-center border-white p-3">
    <vue-telegram-login mode="callback" telegram-login="slktbot" @callback="showUser" />
  </div>
</template>

<script>
import { vueTelegramLogin } from 'vue-telegram-login';

export default {
  data() {
    return {};
  },
  mounted() {},
  components: {
    vueTelegramLogin,
  },
  methods: {
    showUser(user) {
      // gets user as an input
      // id, first_name, last_name, username,
      // photo_url, auth_date and hash
      console.log(user);
    },
  },
  name: 'AuthPanel',
};
</script>

<style lang="scss"></style>
