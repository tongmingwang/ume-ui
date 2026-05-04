<template>
  <i
    class="u-iconfont"
    :class="['u-icon-' + props.name]"
    :style="{
      fontSize: parseInt(props.size) + 'px',
      color: props.color,
    }"></i>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'UIcon',
  });
  const props = defineProps({
    name: {
      type: String,
      default: '',
    },
    size: {
      type: [String],
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  });
</script>

<style scoped lang="css">
  @import './icon.css';
  .u-iconfont {
    font-size: 16px;
  }
</style>
