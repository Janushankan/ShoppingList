import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export const AddShoppingItem = ({ addItem }) => {

    const [item, setItem] = useState('')

    const pressHandler = (item) => {
        addItem(item)
        setItem('')
    }

    console.log(item)
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Enter an Item' value={item} onChangeText={(text) => setItem(text)} />
            <Button title='Add Item' onPress={() => pressHandler(item)} color='cornflowerblue' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginVertical: 20,
        textAlign: 'center',
    },
})