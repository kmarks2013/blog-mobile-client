import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Context} from '../context/BlogContext'

const BlogScreen = ({route}) => {
    const {state} = useContext(Context)
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

    console.log(blogPost)

    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

export default BlogScreen

const styles = StyleSheet.create({})
