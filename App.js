import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogContext'
import BlogScreen from './src/screens/BlogScreen';
import NewBlogPost from './src/screens/NewBlogPost';
import EditBlogScreen from './src/screens/EditBlogScreen';



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
        <Stack.Screen
          component={BlogScreen}
          name="Blog"
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen
          component={NewBlogPost}
          name="New"
          options={{title:"Add Post"}}
        />
        <Stack.Screen
          component={EditBlogScreen}
          name="Edit"
          // options={({route}) => ({title: `Edit ${route.params.blogPost.title}`})}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
