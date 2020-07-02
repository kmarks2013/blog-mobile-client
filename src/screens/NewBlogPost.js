import React, { useContext} from 'react'
import { StyleSheet } from 'react-native'
import {Context} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const NewBlogPost = ({navigation}) => {
    const {addBlogPost} = useContext(Context)

    return <BlogPostForm/>

}

export default NewBlogPost

const styles = StyleSheet.create({})
