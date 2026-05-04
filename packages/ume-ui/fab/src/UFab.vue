<template>
  <button
    type="button"
    ref="fab"
    :class="className"
    :style="style"
    :disabled="props.disabled"
    v-ripple
    @click="handleClick">
    <slot name="icon">
      <span class="u-fab__icon" v-if="props.loading">
        <svg
          viewBox="0 0 1024 1024"
          class="u-icon__svg"
          version="1.1"
          fill="currentColor">
          <path
            d="M960 447.008q-11.008-152.992-120-261.504t-260.992-120.512q-16-0.992-27.488 9.504t-11.488 26.496q0 14.016 9.504 24.512t23.488 11.488q55.008 4 107.008 26.016 60.992 26.016 108.992 73.504t74.016 109.504q22.016 51.008 26.016 106.016 0.992 14.016 11.488 23.488t24.512 9.504q15.008 0 26.016-11.008 11.008-12 8.992-27.008z"></path>
        </svg>
      </span>
    </slot>
    <span class="u-fab__label" v-if="props.label || $slots.default">
      <slot>{{ props.label }}</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
  import type { FabProps } from './types';
  import { computed, useTemplateRef } from 'vue';
  import ripple from '@/directives/ripple';

  const emit = defineEmits(['click']);
  const props = withDefaults(defineProps<FabProps>(), {
    color: 'primary',
    size: 'medium',
    fixed: false,
    shadow: true,
    ripple: true,
  });
  const fabRef = useTemplateRef<HTMLButtonElement>('fab');

  const className = computed(() => {
    return [
      'u-fab',
      props.disabled ? 'is-disabled' : '',
      props.loading ? 'is-loading' : '',
      props.size ? `u-fab--${props.size}` : '',
      props.color ? `u-fab--${props.color}` : '',
      props.fixed ? 'u-fab--fixed' : '',
      !props.shadow ? 'u-fab--no-shadow' : '',
    ];
  });

  const style = computed(() => {
    return {
      width: props.width,
      height: props.height,
      top: props.top,
      right: props.right,
      bottom: props.bottom,
      left: props.left,
    };
  });

  defineOptions({
    name: 'UFab',
    directives: { ripple },
  });

  defineExpose({
    $el: fabRef,
    focus: () => fabRef.value?.focus(),
    blur: () => fabRef.value?.blur(),
  });

  const handleClick = (e: MouseEvent) => {
    emit('click', e);
  };
</script>

<style lang="scss" scoped>
  @use './style.scss';
</style>
