import React, {useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {Context} from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const BlogScreen = ({route, navigation}) => {
    const {state} = useContext(Context)
    const  id = route.params.id

    const blogPost = state.find((post) =>{
        if (post.id === id){
            return post
        } else {
            console.log('wrongid')
        }
    })

    React.useLayoutEffect((naviagation) => {
        navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={() => {navigation.navigate('Edit', {blogPost})}}>
                <EvilIcons name="pencil" size={40} style={styles.icon}/>
            </TouchableOpacity>
            )
        })
    })

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

export default BlogScreen

const styles = StyleSheet.create({
    icon:{
        marginRight: 5
    },
})
