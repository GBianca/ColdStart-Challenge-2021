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
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    async created() {
      this.user = await getUserInfo();
    },
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
      <auth-login v-if="user!=null"  provider="github"/>
      <auth-logout v-if="!user"/>
      </div>
    </nav>
  </header>
</template>
