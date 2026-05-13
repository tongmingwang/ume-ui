<template>
  <div :class="classNames" ref="uList">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import type { UListProps } from './types';
  import { useList } from './useList';

  defineOptions({ name: 'UList' });
  const props = withDefaults(defineProps<UListProps>(), { modelValue: '' });
  const emit = defineEmits(['update:modelValue']);
  const { classNames } = useList(props, emit);
</script>

<style scoped lang="scss">
  .u-list {
    // 默认显示
    --u-list-bg: var(--u-bg);
    --u-list-color: var(--u-text-1);
    // 激活状态
    --u-list-active-color: var(--u-primary);
    --u-list-active-bg: var(--u-primary-light-hover);
    display: flex;
    flex-direction: column;
    padding: 6px 0;
    background-color: var(--u-bg);
    overflow-y: auto;
    height: 100%;

    @each $color in primary, success, warning, error {
      &--#{$color} {
        --u-list-active-bg: var(--u-#{$color}-light);
        --u-list-active-color: var(--u-#{$color});
      }
    }
  }
</style>
