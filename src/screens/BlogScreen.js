import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Context} from '../context/BlogContext'

const BlogScreen = ({route}) => {
    const {state} = useContext(Context)
    const  id = route.params.id

    const blogPost = state.find((post) =>{
        if (post.id === id){
            return post
        } else {
            console.log('wrongid')
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
