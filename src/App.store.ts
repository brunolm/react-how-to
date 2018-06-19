import { action, observable } from 'mobx';

export class AppStore {
  @observable title = 'Initial title';

  @observable counter = 0;

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
