<template>
  <div :class="classNames">
    <div class="u-alert_icon" v-if="props.showIcon">
      <slot name="icon">
        <USvg :icon="icon" class="u-alert_icon_svg"></USvg>
      </slot>
    </div>
    <div class="u-alert_content">
      <div class="u-alert_title" v-if="props.title || $slots.title">
        <slot name="title">{{ props.title }}</slot>
      </div>
      <div class="u-alert_message">
        <slot>{{ props.message }}</slot>
      </div>
    </div>
    <div class="u-alert_action" v-if="$slots.action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { AlertProps } from './types';
  import { USvg, svgIcons } from '@/ume-ui/base';
  import { computed } from 'vue';

  defineOptions({
    name: 'UAlert',
  });
  const props = withDefaults(defineProps<AlertProps>(), {
    color: 'primary',
    variant: 'tonal',
    showIcon: true,
  });

  const icon = computed(() => {
    if (props.showIcon) {
      const iconMap = {
        primary: 'info',
        success: 'check',
        warning: 'warning',
        error: 'danger',
      };
      // @ts-ignore
      return svgIcons[iconMap[props.color || 'primary']];
    }
  });

  const classNames = computed(() => {
    return [
      'u-alert',
      props.color && `u-alert--${props.color}`,
      props.variant && `u-alert--${props.variant}`,
    ].filter(Boolean);
  });
</script>

<style scoped lang="scss">
  .u-alert {
    --u-alert-bg: var(--u-primary-50);
    --u-alert-color: var(--u-info-700);
    --u-alert-icon-color: var(--u-primary-600);
    --u-alert-radius: 4px;
    margin: 8px 0;
    display: flex;
    align-items: flex-start;
    padding: 6px 16px;
    color: var(--u-alert-color);
    background-color: var(--u-alert-bg);
    border-radius: var(--u-alert-radius);
    overflow: hidden;

    @each $color in primary, success, warning, error {
      &.u-alert--#{$color} {
        --u-alert-bg: var(--u-#{$color}-50);
        --u-alert-icon-color: var(--u-#{$color}-600);

        &.u-alert--outlined {
          --u-alert-bg: transparent;
          border: 1px solid var(--u-#{$color}-600);
        }
        &.u-alert--filled {
          --u-alert-bg: var(--u-#{$color}-600);
          --u-alert-color: var(--u-info-50);
          --u-alert-icon-color: var(--u-info-50);
        }
      }
    }
    &.u-alert--outlined {
      --u-alert-bg: transparent;
      --u-alert-color: var(--u-info-700);
      border: 1px solid var(--u-primary-600);
    }
    &.u-alert--filled {
      --u-alert-bg: var(--u-primary-600);
      --u-alert-color: var(--u-info-50);
      --u-alert-icon-color: var(--u-info-50);
    }

    &_icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      color: var(--u-alert-icon-color);
      font-size: 22px;
      padding: 8px 0;
    }
    &_content {
      display: flex;
      flex-direction: column;
      flex: 1;
      line-height: 1.5;
    }
    &_title {
      font-size: 16px;
      font-weight: 600;
      padding: 8px 0 0 0;
    }
    &_message {
      font-size: 14px;
      padding: 8px 0;
    }
    &_action {
      display: flex;
      justify-content: flex-end;
      padding: 0;
      margin-right: -8px;
    }
  }
</style>
