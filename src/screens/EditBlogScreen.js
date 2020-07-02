import React, {useContext}from 'react'
import { StyleSheet } from 'react-native'
import {Context} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditBlogScreen = ({route}) => {
    const {state} = useContext(Context)

    const blogPost = state.find((post) =>{
        if (post.id === route.params.id){
            return post
        } else {
            console.log('wrongid')
        }
    })

    return <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => console.log(title, content)}/>
}

export default EditBlogScreen

const styles = StyleSheet.create({})
