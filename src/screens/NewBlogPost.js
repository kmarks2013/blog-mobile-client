import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import {Context} from '../context/BlogContext'


const NewBlogPost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.label}>Add Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
            <Button title="Add Blog Post"/>
        </View>
    )
}

export default NewBlogPost

const styles = StyleSheet.create({})
