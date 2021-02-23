<script>
import HeaderBar from '@/components/header-bar.vue';
import AuthLogout from '@/components/auth-logout.vue';
import AuthLogin from '@/components/auth-login.vue';

export default {
  name: 'App',
  data() {
    return {};
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
    <auth-logout/>
    <auth-login provider="Facebook"/>
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
