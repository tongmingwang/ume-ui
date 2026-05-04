import type { App, Plugin } from 'vue';
import UButton from './src/UButton.vue';

const UiButton: Plugin = {
  install(app: App) {
    app.component(UButton.name!, UButton);
  },
};

export { UButton };
export * from './src/types';

export default UiButton;
