<template>
  <div class="u-card_text">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'UCardText',
  });
</script>

<style scoped lang="scss">
  .u-card_text {
    margin: 0;
    padding: 16px;
    color: var(--u-text-2);
    line-height: 1.6;
  }
</style>
