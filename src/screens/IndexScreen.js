import React, {useContext} from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import {Context} from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context)
    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList
                data={state}
                keyExtractor={(blogPosts)=> blogPosts.title}
                renderItem={({item}) => {
                    return <View style={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                        <Feather name='trash' style={styles.icon} />
                    </TouchableOpacity>
                    </View>
                }}
            />

        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon:{
        fontSize: 24
    }

})
