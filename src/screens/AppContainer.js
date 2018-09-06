import React from 'react';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
// import SplashScreen from 'react-native-splash-screen';
import { AppWithNavigationState } from '../redux/store/ulti';
import { connect } from 'react-redux';

function isStackHasOneScreenLeft(route) {
  if (hasNestedStack(route)) {
    const nestedStack = route.routes[route.index];
    // Yeah, let check the nested stack
    const isNestedLeftOne = isStackHasOneScreenLeft(nestedStack);
    return isNestedLeftOne
      ? isNestedLeftOne
      : route.index !== 0
        ? route.routes[route.index].key
        : undefined;
  }
  return route.index !== 0 ? route.routes[route.index].key : undefined;
}

function hasNestedStack(route) {
  return (
    Array.isArray(route.routes) &&
    route.routes[route.index] &&
    route.routes[route.index].routes
  );
}

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // SplashScreen.hide();
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    const backFromKey = isStackHasOneScreenLeft(nav);
    if (backFromKey) {
      dispatch(NavigationActions.back({ key: backFromKey }));
    }
    return !!backFromKey;
  };

  render() {
    return <AppWithNavigationState />;
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav,
});

const AppContainer = connect(mapStateToProps)(Container);
export default AppContainer;
