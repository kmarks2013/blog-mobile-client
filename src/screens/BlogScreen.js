import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Context} from '../context/BlogContext'

const BlogScreen = ({route, navigation}) => {
    const {state} = useContext(Context)
    console.log(route.params.id)
    return (
        <View>
            <Text>Blog Screen</Text>
        </View>
    )
}

export default BlogScreen

const styles = StyleSheet.create({})
