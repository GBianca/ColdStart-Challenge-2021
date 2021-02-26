<script>
import { mapActions, mapGetters } from 'vuex';
import getUserInfo from '../assets/js/userInfo';

export default {
  name: 'CardContent',
  props: {
    user: {
      type: Object,
    },
    preorderedItems: {
      type: Number,
      default: () => 0,
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
  computed: {
    ...mapGetters('orders', { orders: 'orders' }),
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
        this.preorderedItems += 1;
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
      <button v-if="!user" v-on:click="placeOrder">Preorder</button>
      <div v-if="preorderedItems > 0"> Ordered {{preorderedItems}} times.</div>
  </div>
  </div>
</template>
