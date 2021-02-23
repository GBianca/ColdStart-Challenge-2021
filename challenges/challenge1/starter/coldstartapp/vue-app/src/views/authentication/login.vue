<script>
import AuthLogin from '@/components/auth-login.vue';

export default {
  name: 'Login',
  components: {
    AuthLogin,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<template>
<div>
<auth-login provider="Facebook"/>
<auth-login provider="Google"/>
<auth-login provider="GitHub"/>
  </div>
</template>
