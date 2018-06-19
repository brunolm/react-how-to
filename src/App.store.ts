import { action, observable } from 'mobx';

import homeStore from './app/home/home.store';

export class AppStore {
  @observable title = 'Initial title';

  @observable counter = 0;

  //
  home = homeStore;
  //

  @action
  updateTitle() {
    const offset = 32;

    this.title = Math.random().toString(offset);
  }

  @action
  count() {
    this.counter++;
  }
}
export default new AppStore();
