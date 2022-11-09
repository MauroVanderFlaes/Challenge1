import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Book from './components/Book.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bookshop</Text>
      <Image
            style={styles.tileImage}
            source={require('../assets/shoppingcart.jpg')}
          />
      <Book Title="Book 1" Author="by Some Random dude" Description="Lorem tekstje" Isbn="ISBN 978-8-2165-1860-1"/>
      <Text>Ghelloo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
