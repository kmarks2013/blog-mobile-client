import React, {useState, useContext}from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {Context} from '../context/BlogContext'

const EditScreen = ({route}) => {
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

const EditScreen = () => {
    return (
        <View>
            <Text>Edit</Text>
        </View>
    )
}

export default EditScreen

const styles = StyleSheet.create({})
