<template>
  <div class="select-wrapper">
    <select
      :value="fieldValue"
    >
      <slot />
    </select>
    <Spinner :isSmall="true" v-if="loading"/>
  </div>
</template>

<script>
import Spinner from "./Spinner.vue";
import { loading, items } from "@/baseAPI/withHooks";
import { value } from 'vue-function-api'

export default {
  name: "Select",
  components: {
    Spinner
  },
  setup() {
    const fieldValue = value('')
    return {
      loading,
      items,
      fieldValue
    }
  }
};
</script>

<style lang="scss" scoped>
.select-wrapper {
  width: 100%;
  position: relative;
  select {
    width: 20%;
    height: 30px;
  }
  > input {
    width: 100%;
    padding-right: 30px;
  }
  > i {
    position: absolute;
    font-size: 16px;
    top: calc(50% - 8px);
    right: 12px;
    color: #AD2631;
  }
}
</style>