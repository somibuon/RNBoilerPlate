import RootStack from '../../screens/Routes';
import { NavigationActions } from 'react-navigation';
import { RESET_ROUTE, SESSION_EXPIRE } from '../../constants/redux-actions';

const initialState = RootStack.router.getStateForAction(
  NavigationActions.init(),
);
const nav = (state = initialState, action) => {
  if (action.type === RESET_ROUTE) {
    return initialState;
  }
  const nextState = RootStack.router.getStateForAction(action, state);

  if (nextState) {
    const nextLastIndex = nextState.routes.length - 1;
    const lastIndex = state.routes.length - 1;

    const nextLastRoute = nextState.routes[nextLastIndex];
    const lastRoute = state.routes[lastIndex];

    if (
      nextLastIndex !== lastIndex &&
      nextLastRoute.routeName === lastRoute.routeName
    ) {
      // skip if same routeName, so won't push same view twice
      return state;
    }
    return nextState;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default nav;
