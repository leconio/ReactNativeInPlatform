import {AppNavImpl} from './AppNavImpl';

export class AppNavHelper {
  static navigatorImpl;

  static getInstance() {
    if (!AppNavHelper.navigatorImpl) {
      AppNavHelper.navigatorImpl = new AppNavImpl(AppNavHelper.INIT_ACITON);
    }
    return AppNavHelper.navigatorImpl;
  }

  static push(options) {
    AppNavHelper.navigatorImpl.push(options);
  }

  static replace(options) {
    AppNavHelper.navigatorImpl.replace(options);
  }

  static back() {
    AppNavHelper.navigatorImpl.back();
  }
}
