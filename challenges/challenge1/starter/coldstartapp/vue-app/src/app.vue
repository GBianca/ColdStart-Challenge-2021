<script>
import HeaderBar from '@/components/header-bar.vue';
import AuthLogout from '@/components/auth-logout.vue';
import AuthLogin from '@/components/auth-login.vue';
import getUserInfo from '@/assets/js/userInfo';

export default {
  name: 'App',
  data() {
    return {
      userInfo: getUserInfo(),
    };
  },
  components: {
    HeaderBar,
    AuthLogout,
    AuthLogin,
  },
};
</script>

<template>
  <div id="app">
    <HeaderBar />
    <auth-logout v-if="userInfo === undefined"/>
    <auth-login v-if="userInfo !== undefined"  provider="Facebook"/>
    <div class="section columns">
      <main class="column">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style lang="scss">
@import 'styles.scss';
</style>
