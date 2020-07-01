import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useRoute} from '@react-navigation/native'
import {Context} from '../context/BlogContext'

const BlogScreen = () => {
    const {state} = useContext(Context)
    const route = useRoute()
    const  id = route.params.id
    console.log("hello", id)

    const blogPost = state.find((blogPost) => {blogPost.id === route.params.id} )

    console.log(blogPost)

    return (
        <View>
            <Text>Blog Screen</Text>
        </View>
    )
}

export default BlogScreen

const styles = StyleSheet.create({})
