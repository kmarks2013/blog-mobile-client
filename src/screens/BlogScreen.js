import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useRoute} from '@react-navigation/native'
import {Context} from '../context/BlogContext'

const BlogScreen = () => {
    const {state} = useContext(Context)
    const route = useRoute()
    const  id = route.params.id
    console.log("hello", id)


    const blogPost = state.find((post) =>{
        if (post.id === id){
            console.log(post.id)
            return post
        } else {
            console.log(' wrongid')
        }
    })
    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

export default BlogScreen

const styles = StyleSheet.create({})
