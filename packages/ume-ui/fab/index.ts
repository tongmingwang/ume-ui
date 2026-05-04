import type { App, Plugin } from 'vue';
import UFab from './src/UFab.vue';

const UiFab: Plugin = {
  install(app: App) {
    app.component(UFab.name!, UFab);
  },
};

export { UFab };
export default UiFab;
export type { FabProps } from './src/types';
