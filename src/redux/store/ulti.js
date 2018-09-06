import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import RoootStack from '../../screens/Routes';

export const middleware = createReactNavigationReduxMiddleware(
  'root',
  (state) => state.nav,
);
const App = reduxifyNavigator(RoootStack, 'root');
const mapStateToProps = (state) => ({
  state: state.nav,
});
export const AppWithNavigationState = connect(mapStateToProps)(App);

export default { middleware, AppWithNavigationState };
