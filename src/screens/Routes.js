import { createStackNavigator } from 'react-navigation';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const RootStack = createStackNavigator({
  Screen1: Screen1,
  Screen2: Screen2,
});

export default RootStack
