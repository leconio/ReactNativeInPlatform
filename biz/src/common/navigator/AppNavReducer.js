import {AppNavigator} from './AppNavigator';

export const AppNavReducer = (state, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState;
};
