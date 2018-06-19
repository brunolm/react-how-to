import { action, observable } from 'mobx';

export default class AppStore {
  @observable title = 'Initial title';

  @observable counter = 0;

  @action
  updateTitle() {
    this.title = Math.random().toString(32);
  }

  @action
  count() {
    this.counter++;
  }
}
