import {Navigator, NavigationActions, StackActions} from './Navigator';
import {Keyboard} from 'react-native';

export class AppNavImpl extends Navigator {
  constructor(initAction) {
    this.action = initAction;
  }

  /**
   * 跳转页面
   * @param {*} options
   *    key
   *    newKey
   *    routeName 路由名字
   *    params 参数
   *    action 指定Action
   */
  push(options) {
    if (options && !options.params) {
      //如果params参数为空的情况，构建一个空的参数，防止双击跳转奔溃问题
      options = {...options, params: {}};
    }
    const startPageAction = (dispatch, getState) => {
      // 页面跳转前 将键盘收起
      Keyboard.dismiss();
      options = {
        oneAndOnlyPage: true,
        replaceCurrentPage: false,
        ...options,
      };

      const navState = this.getNavState(getState);
      if (navState.routes[0].isTransitioning) {
        // 如果导航栏的转场动画没有结束，则不做新的页面跳转操作，防止页面多次跳转情况
        return;
      }
      dispatch({...options, ...NavigationActions.navigate(options)});
    };
    return startPageAction;
  }

  back() {
    return (dispatch, getState) => {
      const navState = this.getNavState(getState);
      if (navState.routes.length > 1) {
        dispatch(NavigationActions.back());
      } else {
        // 关闭容器
      }
    };
  }

  replace(options) {
    return StackActions.replace(options);
  }
}
