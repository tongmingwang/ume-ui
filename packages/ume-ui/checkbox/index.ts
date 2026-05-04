import type { App, Plugin } from 'vue';
import UCheckbox from './src/UCheckbox.vue';

const UiCheckbox: Plugin = {
  install(app: App) {
    app.component(UCheckbox.name!, UCheckbox);
  },
};

export { UCheckbox };
export * from './src/types';

export default UiCheckbox;
