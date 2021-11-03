import React from 'react';
import Account from './screens/Account';
import Welcome from './screens/welcome';
import Home from './screens/home';
import Signin from './screens/sign in';
import Create from './screens/create account';
import Detail1 from './screens/Detail1';
import Detail2 from './screens/Detail2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';







export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Account" component={Account} options={{headerShown:false}} />
        <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}} />
        <Stack.Screen name="Create" component={Create} options={{headerShown:false}} />
        <Stack.Screen name="Detail1" component={Detail1} options={{headerShown:false}} />
        <Stack.Screen name="Detail2" component={Detail2} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
   

  );
}

