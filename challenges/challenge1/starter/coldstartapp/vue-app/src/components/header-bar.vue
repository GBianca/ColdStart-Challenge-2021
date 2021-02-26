<script>
import HeaderBarBrand from '@/components/header-bar-brand.vue';
import AuthLogout from '@/components/auth-logout.vue';
import AuthLogin from '@/components/auth-login.vue';
import getUserInfo from '@/assets/js/userInfo';

export default {
  name: 'HeaderBar',
  components: {
    HeaderBarBrand,
    AuthLogout,
    AuthLogin,
  },
  data() {
    return {
      userInfo: getUserInfo(),
    };
  },
  methods: {
  },
};
</script>

<template>
  <header>
    <nav class="navbar is-white" role="navigation" aria-label="main navigation">
      <HeaderBarBrand></HeaderBarBrand>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item nav-home" to="/">Home</router-link>
        </div>
      </div>
    <div class="navbar-end">
      <auth-logout v-if="userInfo !== undefined"/>
      <auth-login v-if="userInfo === undefined"  provider="github"/>
      </div>
    </nav>
  </header>
</template>
