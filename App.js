import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from './src/screens/HomeScreen';
import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogContext'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" >

        <Stack.Screen
          component={IndexScreen}
          name="Index"
          options={{title:"Blogs"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
