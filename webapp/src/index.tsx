import { Store, Action } from "redux";

import { GlobalState } from "mattermost-redux/types/store";

import manifest from "./manifest";

// eslint-disable-next-line import/no-unresolved
import { PluginRegistry } from "./types/mattermost-webapp";

// const dispatchPluginStore = (updateFunction: CallableFunction, data: unknown) =>
//   console.log(data);
//   pluginStore.dispatch(updateFunction(data));

export default class Plugin {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  public async initialize(
    registry: PluginRegistry,
    store: Store<GlobalState, Action<Record<string, unknown>>>
  ) {
    // @see https://developers.mattermost.com/extend/plugins/webapp/reference/
    const endpoint = `${window.basename}/plugins/${manifest.id}/config`;
    console.log("HERE");
    console.log(endpoint);
  }
}
// login-body-card-content
declare global {
  interface Window {
    registerPlugin(id: string, plugin: Plugin): void;
    basename: string;
  }
}

window.registerPlugin(manifest.id, new Plugin());
