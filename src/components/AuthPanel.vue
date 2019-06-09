<template>
  <div class="position-fixed fixed-bottom text-center border-white p-3">
    <h3 class="text-white mb-5">Meet easy with people nearby</h3>
    <vue-telegram-login mode="callback" telegram-login="slktbot" @callback="showUser" />
    <!-- <a class="btn btn-primary" @click="showUserTest">Telegram test</a> -->
  </div>
</template>

<script>
import { vueTelegramLogin } from 'vue-telegram-login';

export default {
  data() {
    return {
      callback: {
        auth_date: 1559652731,
        first_name: 'Misha Yefimets',
        hash: '16ae1bd4d36a652cc76c9c1f039818b748538b2dcfaaf99a0bc045c472a6030f',
        id: 357585854,
        photo_url: 'https://t.me/i/userpic/320/yefimets.jpg',
        username: 'yefimets',
      },
    };
  },
  mounted() {},
  components: {
    vueTelegramLogin,
  },
  methods: {
    showUserTest() {
      this.$router.push({ path: '/start', query: { name: this.callback.username } });

      console.log(this.callback);
    },

    showUser(user) {
      this.$router.push({ path: '/start', query: { name: user.username } });
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
