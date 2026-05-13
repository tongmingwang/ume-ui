<template>
  <div
    class="u-card"
    :class="{
      'has-shadow': props.shadow,
      'has-border': props.bordered,
    }"
    :style="{
      height: props.height,
      '--u-card-radius': props.radius || '4px',
    }">
    <slot />
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'UCard',
  });
  const props = withDefaults(
    defineProps<{
      bordered?: boolean;
      shadow?: boolean;
      radius?: string;
      height?: string;
    }>(),
    {
      bordered: false,
      shadow: true,
      radius: '4px',
    }
  );
</script>

<style scoped lang="scss">
  .u-card {
    background: var(--u-bg);
    width: 100%;
    height: 100%;
    border-radius: var(--u-card-radius, 4px);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    &.has-shadow {
      box-shadow: 0 5px 12px -3px rgba(0, 0, 0, 0.33);
      filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.1));
    }
    &.has-border {
      border: 1px solid var(--u-border);
    }
  }
</style>
