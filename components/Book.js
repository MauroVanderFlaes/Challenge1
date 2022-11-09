import { StyleSheet, Text, View } from 'react-native';
const Book = (props) => {
    return(
        <View>
            <Text>
                {props.Title}
            </Text>
        </View>
    );
}
export default Book
const styles = StyleSheet.create({
    
})