<script>
import axios from 'axios';
import API from '../store/config';

export default {
  name: 'CardContent',
  props: {
    id: {
      type: String,
      default: () => '',
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
  methods: {
    async placeOrder() {
      axios.post(`${API}/orders`, {
        Id: '0B476647-586A-EB11-9889-000D3AB17657',
        User: 'Pip Doe',
        Date: '2021-02-08T21:54:56.260Z',
        IcecreamId: 1,
        Status: 'New',
        DriverId: null,
        FullAddress: '1 Microsoft Way, Redmond, WA 98052, USA',
        LastPosition: null,
      }).then((response) => {
        alert(response);
      }, (error) => {
        alert(error);
      });
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
      <button v-on:click="placeOrder">Preorder</button>
  </div>
  </div>
</template>
