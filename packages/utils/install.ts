import type { App, Plugin, Component } from 'vue';

export function withInstallComponent(com: Component): Plugin {
  const UICom: Plugin = {
    install(app: App) {
      if (com.name && app) {
        app.component(com.name!, com);
      }
    },
  };
  return UICom;
}
