import { action, observable } from 'mobx';

export class HomeStore {
  @observable homeTitle = {};

  @action
  changeTitle(msg = '', id) {
    this.homeTitle[id] = msg || 'dsakldsakljheklwqjkelwqjklewqjklewqjklewq';
  }
}

export default new HomeStore();
