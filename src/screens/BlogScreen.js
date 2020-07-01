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

    React.useLayoutEffect(() => {
        navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity>
                <EvilIcons name="pencil" size={35}/>
            </TouchableOpacity>
            )
        })
    })

    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

export default BlogScreen

const styles = StyleSheet.create({})
