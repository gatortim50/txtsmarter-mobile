import { createStackNavigator,createAppContainer } from "react-navigation";

import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';

const RootNavigator = createStackNavigator(
    {
        login: {
            screen: Login,
            navigationOptions:{
                header:null,
            }
        }, 
        signUp: {
            screen: SignUp,
            navigationOptions:{
                header:null,
            }
        }, 
    },
    {
        initialRouteName: "login",
    }
);

export default createAppContainer(RootNavigator);