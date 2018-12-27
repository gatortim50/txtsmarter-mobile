import { createStackNavigator,createAppContainer } from "react-navigation";

import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';
import SignUp1 from '../components/auth/SignUp1';

const SignUpNavigator = createStackNavigator(
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
      signUp1: {
        screen: SignUp1,
        navigationOptions:{
          header:null,
        }
      },
    },
    {
        initialRouteName: "signUp1",
    }
);

export default createAppContainer(SignUpNavigator);