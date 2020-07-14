import {connect} from 'react-redux';
import {createStackNavigator} from 'react-navigation';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import {AppNavRouteMapper} from './AppNavMapper';

export const navMiddleware = createReactNavigationReduxMiddleware(
  (state) => state.AppNavReducer,
);

export const AppNavigator = createStackNavigator(
  {
    ...AppNavRouteMapper,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {},
  },
);

const mapStateToProps = (state) => {
  return {
    state: state.AppNavReducer,
  };
};

const App = createReduxContainer(AppNavigator);

export const AppWithNavigationState = connect(mapStateToProps)(App);
