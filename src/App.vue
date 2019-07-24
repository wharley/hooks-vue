<template>
  <div id="app">
    <Select
      v-model="podId"
    >
      <option value="" selected disabled>-Select Option-</option>
      <option
        v-for="(item, index) in list['pods']"
        :value="item.id"
        :key="index"
      >
        {{ item.id }}
      </option>
    </Select>
    <hr>
    <Select
      v-model="buildingId"
    >
      <option value="" selected disabled>-Select Option-</option>
      <option
        v-for="(item, index) in list['buildings']"
        :value="item.id"
        :key="index"
      >
        {{ item.id }}
      </option>
    </Select>
  </div>
</template>

<script>
import Select from "./components/Select.vue";
import { getData, list } from "./baseAPI/withHooks";
import { onBeforeMount, value } from 'vue-function-api'
import { Promise } from 'q';

export default {
  name: "App",
  components: {
    Select
  },
  setup(props) {
    const podId = value('');
    const buildingId = value('');

    onBeforeMount(async () => {
      await Promise.all([
        getData('pods', 'pods'),
        getData('buildings', 'buildings')
      ])
    })

    return {
      podId,
      buildingId,
      list,
      getData
    }

  }
};
</script>