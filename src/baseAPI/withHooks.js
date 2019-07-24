import Vue from 'vue'
import { plugin, value, state } from 'vue-function-api'

Vue.use(plugin)

const getAPI = () => ({
  pods: [
    { id: 'one'},
    { id: 'two' },
    { id: 'three' }
  ],
  buildings: [
    { id: 'ones'},
    { id: 'twos' },
    { id: 'threes' }
  ]
})

export const loading = value(false);
export const list = state({
  pods: [],
  buildings: []
})

export const getData = (prop, key) => {
  loading.value = true;
  list[prop] = getAPI()[key];
  loading.value = false;
}