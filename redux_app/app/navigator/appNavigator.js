import { createStackNavigator, createAppContainer } from 'react-navigation';
import User from '../components/user';
import UserDetails from '../components/userDetails';
import Post from '../components/userPost';

const AppNavigator = createStackNavigator({
    user: User,
    userDetails: UserDetails,
    post:Post
},{
    initialRouteName: 'user'
});

const NavigationContainer = createAppContainer(AppNavigator);

export default NavigationContainer;