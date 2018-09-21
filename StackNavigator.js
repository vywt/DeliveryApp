import {createStackNavigator} from 'react-navigation';
import {HomeScreen} from './screens/HomeScreen';
import {ProfileScreen} from './Second';
  
  const StackNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
  });
  
  export default StackNavigator;