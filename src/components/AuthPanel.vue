<template>
  <div class="position-fixed fixed-bottom text-center border-white p-3 pb-5">
    <h3 class="mb-5">Meet easy <br />with people nearby</h3>
    <vue-telegram-login
      mode="redirect"
      telegram-login="slktbot"
      redirect-url="https://slkt-dev.herokuapp.com/api/auth/telegram"
    />
  </div>
</template>

<script>
import { vueTelegramLogin } from 'vue-telegram-login';

export default {
  mounted() {},
  components: {
    vueTelegramLogin,
  },
  name: 'AuthPanel',
};
</script>

<style lang="scss"></style>
