import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const ShoppingList = ({list, deleteItem}) => {
    return (
        <FlatList
            data={list}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => {
                return <View style={styles.separator}></View>
            }}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => deleteItem(item)}>
                        <Text style={styles.item}>{item.todo}</Text>
                    </TouchableOpacity>
                )
            }}
            style={styles.flatlist}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        fontWeight: 'bold',
        padding: 20,
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
    },
    flatlist: {
        paddingTop: 20,
    }
})