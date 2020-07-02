import React, {useState, useContext}from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {Context} from '../context/BlogContext'

const EditBlogScreen = ({route}) => {
    const {state} = useContext(Context)

    const blogPost = state.find((post) =>{
        if (post.id === route.params.id){
            return post
        } else {
            console.log('wrongid')
        }
    })

    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)

    return (
        <View>
            <Text>Edit Title:</Text>
            <TextInput
                value={title}
                onChangeText={(newTitle)=> setTitle(newTitle)}
            />
            <Text>Edit Content:</Text>
            <TextInput
                value={content}
                onChangeText={(newContent)=> setContent(newContent)}
            />

        </View>
    )
}

export default EditBlogScreen

const styles = StyleSheet.create({})
