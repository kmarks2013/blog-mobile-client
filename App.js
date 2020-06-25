import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from './src/screens/HomeScreen';
import IndexScreen from './src/screens/IndexScreen';
import {BlogProvider} from './src/context/BlogContext'

const Stack = createStackNavigator()

export default function App() {
  return (
    <BlogProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" >
        {/* <Stack.Screen
          component={HomeScreen}
          name="Home"
          options={{title: "Blogs"}} */}

        {/* /> */}
        <Stack.Screen
          component={IndexScreen}
          name="Index"
          options={{title:"Blogs"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </BlogProvider>
  );
}
