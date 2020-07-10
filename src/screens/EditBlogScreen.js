import React, {useContext}from 'react'
import { StyleSheet } from 'react-native'
import {Context} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditBlogScreen = ({route}) => {
    const id = route.params.id
    const {state, editBlogPost} = useContext(Context)

    const blogPost = state.find((post) =>{
        if (post.id === id){
            return post
        } else {
            console.log('wrongid')
        }
    })

    return <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
            editBlogPost(id, title, content)
        }}/>
}

export default EditBlogScreen

const styles = StyleSheet.create({})
