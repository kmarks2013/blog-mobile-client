import React, {useContext} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const blogPosts = useContext(BlogContext)
    return (
        <View>
            <Text>Index Screen {value.number}</Text>
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({})
