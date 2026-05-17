<template>
  <Transition @enter="onEnter" @leave="onLeave">
    <div v-if="isActive" class="u-tab-pane">
      <div class="w-full h-full">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import type { TabPaneProps } from './types';
  import { tabsKey } from './types';
  import { computed, inject, onMounted, onUnmounted, watch } from 'vue';

  const props = withDefaults(defineProps<TabPaneProps>(), {
    label: '',
    disabled: false,
  });

  const tabsContext = inject(tabsKey, null);
  const isActive = computed(() => tabsContext?.activeName.value === props.name);

  const register = () => {
    tabsContext?.registerPane({
      name: props.name,
      label: props.label || props.name,
      disabled: props.disabled,
    });
  };

  onMounted(register);

  watch(
    () => [props.name, props.label, props.disabled],
    () => {
      tabsContext?.unregisterPane(props.name);
      register();
    }
  );

  onUnmounted(() => {
    tabsContext?.unregisterPane(props.name);
  });

  const onEnter = async (el: Element, done: () => void) => {
    if (!tabsContext?.animated.value) {
      done();
      return;
    }
    const transform =
      tabsContext?.direction.value === 'right'
        ? 'translateX(100%)'
        : 'translateX(-100%)';
    const frame = el.animate(
      [{ transform: transform }, { transform: 'translateX(0)' }],
      {
        duration: 300,
        easing: 'ease',
      }
    );
    Array.from(el.children).forEach((child) => {
      child.animate(
        [{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }],
        {
          duration: 300,
          easing: 'ease',
        }
      );
    });
    await frame.finished;

    done();
  };
  const onLeave = async (el: Element, done: () => void) => {
    const frame = el.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 150,
      easing: 'ease',
    });
    await frame.finished;
    done();
  };

  defineOptions({ name: 'UTabPane' });
</script>

<style lang="scss" scoped>
  .u-tab-pane {
    grid-area: 1 / 1;
  }
</style>
