<template>
  <div class="u-card_action">
    <slot />
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'UCardAction',
  });
</script>

<style scoped>
  .u-card_action {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 8px 8px 8px;
  }
</style>
