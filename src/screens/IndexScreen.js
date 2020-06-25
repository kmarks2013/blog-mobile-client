import React, {useContext} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext)
    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={data}
                keyExtractor={(blogPosts)=> blogPosts.title}
                renderItem={({item}) => {
                    return <Text>{item.title}</Text>
                }}
            />

        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({})
