import { FlatList, StyleSheet, View, Text } from 'react-native';

export const ShoppingList = ({list}) => {
    return (
        <FlatList
            data={list}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => {
                return <View style={styles.separator}></View>
            }}
            renderItem={({item}) => {
                return (
                    <Text style={styles.item}>{item.todo}</Text>
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
        height: 0.5,
        backgroundColor: 'lightgray',
    },
    flatlist: {
        paddingTop: 20,
    }
})