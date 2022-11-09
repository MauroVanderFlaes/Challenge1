import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Book from './components/Book.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Bookshop</Text>
      <View>
        <Book Title="Book 1" Author="by Some Random dude" Description="Lorem tekstje: " Isbn="ISBN 978-8-2165-1860-1"/>
        <Book Title="Book 2" Author="by Some other dude" Description="Lorem tekstje: " Isbn="ISBN 978-2-1425-4277-8"/>
        <Book Title="Book 3" Author="by Jane Doe" Description="Lorem tekstje: " Isbn="ISBN 978-5-9634-0436-7"/>
        <Book Title="Book 4" Author="by John Doe" Description="Lorem tekstje: " Isbn="ISBN 978-8-3356-4834-0"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 56,
  },

  header1: {
    fontSize: 32,
    fontWeight: '800',
    margin: 12,
  },

});
