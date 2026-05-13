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
        <USvg :icon="svgIcons.loading" class="u-fab__svg" />
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
    import { svgIcons,USvg } from '@/ume-ui/base';

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
