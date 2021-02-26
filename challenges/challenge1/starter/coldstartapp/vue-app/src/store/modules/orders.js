import axios from 'axios';
import API from '../config';
import { parseItem } from './action-utils';
import { PLACE_ORDER } from './mutation-types';

const captains = console;

export default {
  strict: process.env.NODE_ENV !== 'production',
  namespaced: true,
  state: {
    orders: [],
  },
  mutations: {
    [PLACE_ORDER](state, order) {
      state.orders.push(order);
    },
  },
  actions: {
    async placeOrderAction({ commit }, icecreamId) {
      try {
        const data = {
          IcecreamId: icecreamId,
        };
        const response = await axios.post(`${API}/orders`, data);
        const order = parseItem(response, 200);
        commit(PLACE_ORDER, order);
      } catch (error) {
        captains.error(error);
        throw new Error(error);
      }
    },
  },
  getters: {
    orders: (state) => state.orders,
  },
};
