import type { App, Plugin } from 'vue';
import UButton from './button';
import UInput from './input';
import UButtonGroup from './button-group';
import UCheckbox from './checkbox';
import UFab from './fab';

const components: Plugin[] = [UButton, UInput, UButtonGroup, UCheckbox, UFab];

export const install = (app: App) => {
  components.forEach((component) => {
    app.use(component);
  });
};

export { UButton, UInput, UButtonGroup, UCheckbox, UFab };

export * from './button';
export * from './input';
export * from './button-group';
export * from './checkbox';
export * from './fab';

export default {
  install,
};
