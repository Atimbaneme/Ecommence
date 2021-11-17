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
import Detail3 from './screens/Detail3';
import Detail4 from './screens/Detail4';
import Detail5 from './screens/Detail5';
import Detail6 from './screens/Detail6';
import Detail7 from './screens/Detail7';
import Detail8 from './screens/Detail8';
import Detail9 from './screens/Detail9';
import Detail10 from './screens/Detail10';







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
        <Stack.Screen name="Detail3" component={Detail3} options={{headerShown:false}} />
        <Stack.Screen name="Detail4" component={Detail4} options={{headerShown:false}} />
        <Stack.Screen name="Detail5" component={Detail5} options={{headerShown:false}} />
        <Stack.Screen name="Detail6" component={Detail6} options={{headerShown:false}} />
        <Stack.Screen name="Detail7" component={Detail7} options={{headerShown:false}} />
        <Stack.Screen name="Detail8" component={Detail8} options={{headerShown:false}} />
        <Stack.Screen name="Detail9" component={Detail9} options={{headerShown:false}} />
        <Stack.Screen name="Detail10" component={Detail10} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    


   

  );
}



