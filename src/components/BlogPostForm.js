import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const BlogPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.label}>Add Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
            <Button title="Submit Post"
            />
        </View>
    )
}

export default BlogPostForm

const styles = StyleSheet.create({})
