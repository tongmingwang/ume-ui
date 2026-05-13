<template>
  <button
    type="button"
    ref="button"
    :class="className"
    :style="style"
    :disabled="props.disabled"
    v-ripple
    @click="handleClick">
    <span class="u-button_inner">
      <slot>{{ props.text }}</slot>
    </span>
    <span v-if="props.loading" class="u-button__loading">
      <USvg :icon="svgIcons.loading" class="u-button_icon-loading"></USvg>
    </span>
  </button>
</template>

<script setup lang="ts">
  import type { ButtonProps } from './types';
  import { computed, useTemplateRef, inject } from 'vue';
  import ripple from '@/directives/ripple';
  import type { UButtonGroupProps } from '../../button-group/src/types';
  import { UButtonGroupProvider } from '@/ume-ui/button-group/src/constants';
  import { svgIcons,USvg } from '@/ume-ui/base';

  const emit = defineEmits(['click']);
  const buttonGroupProps = inject<UButtonGroupProps>(UButtonGroupProvider, {});
  const props = withDefaults(defineProps<ButtonProps>(), {
    color: '',
    variant: '',
    shape: '',
    size: '',
  });
  const buttonRef = useTemplateRef<HTMLButtonElement>('button');

  // 组件类
  const className = computed(() => {
    const groupSize = props.size || buttonGroupProps?.size || 'medium';
    const groupColor = props.color || buttonGroupProps?.color || '';
    const groupVariant = props.variant || buttonGroupProps?.variant || '';
    return [
      'u-button',
      props.disabled ? 'is-disabled' : '',
      props.loading ? 'is-loading' : '',
      groupSize ? `u-button--${groupSize}` : '',
      groupColor ? `u-button--${groupColor}` : '',
      groupVariant ? `u-button--${groupVariant}` : '',
      props.shape ? `u-button--${props.shape}` : '',
    ];
  });

  // 组件样式
  const style = computed(() => {
    return {
      width: props.width,
      height: props.height,
    };
  });
  // 组件选项
  defineOptions({
    name: 'UButton',
    directives: { ripple },
  });

  // 暴露方法
  defineExpose({
    $el: buttonRef,
    focus: () => buttonRef.value?.focus(),
    blur: () => buttonRef.value?.blur(),
  });

  // 事件处理
  const handleClick = (e: MouseEvent) => {
    emit('click', e);
  };
</script>

<style lang="scss" scoped>
  @use './style.scss';
</style>
