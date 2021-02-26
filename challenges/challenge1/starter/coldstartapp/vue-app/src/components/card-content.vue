<script>
import { mapActions } from 'vuex';
import getUserInfo from '../assets/js/userInfo';

export default {
  name: 'CardContent',
  props: {
    user: {
      type: Object,
    },
    id: {
      type: Number,
      default: () => 0,
    },
    name: {
      type: String,
      default: () => '',
    },
    description: {
      type: String,
      default: () => '',
    },
    imageurl: {
      type: String,
      default: () => '',
    },
  },
  async created() {
    this.user = await getUserInfo();
  },
  methods: {
    ...mapActions('orders', ['placeOrderAction']),
    async placeOrder() {
      this.errorMessage = undefined;
      try {
        await this.placeOrderAction(this.id);
      } catch (error) {
        this.errorMessage = 'Error - please try again';
      }
    },
  },
};
</script>

<template>
  <div class="card-content">
    <header class="card-header">
      <p class="card-header-title">{{ name }}</p>
    </header>

    <div class="content">
      <div class="catalog-image">
        <img v-bind:src="imageurl" />
      </div>
      <p class="description">{{ description }}</p>
    </div>
    <div class="card-action">
      <button v-if="user" v-on:click="placeOrder">Preorder</button>
  </div>
  </div>
</template>
