import React, {useContext} from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import {Context} from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('New')}>
                <Feather name="plus" size={30} style={styles.plus} />
            </TouchableOpacity>
          ),
        });
      }, [navigation]);

    const {state, addBlogPost, deleteBlogPost} = useContext(Context)
    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPosts)=> blogPosts.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Blog', { id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title} - {item.id}
                                </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name='trash' style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
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
    },
    plus: {
        marginRight: 5
    }

})
