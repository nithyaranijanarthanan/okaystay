// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from './src/screens/new/login';
import HomeScreen from './src/screens/new/home';
import SignupScreen from './src/screens/SignupScreen';
import { View, Button } from 'react-native-web';
import LogoTitle from './src/screens/LogoTitle';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator initialRouteName='Login'>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Signup" component={SignupScreen} />
      </Tab.Navigator> */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} 
          options={{headerTitle: (props) => <LogoTitle {...props} />
           }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'OkayStay'}} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{title: 'OkayStay'}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
