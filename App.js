import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
import { ShoppingList } from './components/ShoppingList';

export default function App() {

  const [shoppingList, setShoppingList] = useState([
    {
      todo: 'Buy News Paper', id: '1'
    },
    {
      todo: 'Buy Vegetables', id: '2'
    },
    {
      todo: 'Buy Fruits', id: '3'
    },
    {
      todo: 'Buy Rice', id: '4'
    },
  ])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <ShoppingList list={shoppingList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});
