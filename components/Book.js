import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

function pressed(){
    console.log("pressed");
}


const Book = (props) => {
    return(
        <View style={styles.Bookcontainer}>
            <TouchableNativeFeedback onPress={()=> pressed()}>
            <Text style={styles.Title}>
                {props.Title}
            </Text>
            </TouchableNativeFeedback>
            <Text style={styles.Author}>
            {props.Author}
            </Text>
            <Text>
            {props.Description}
             Vinyl hell of locavore raclette. Humblebrag beard etsy, seitan 8-bit next level hell of tacos keffiyeh trust fund banh mi mlkshk mumblecore health goth.
            </Text>
            <Text>
            {props.Isbn}
            </Text>
            <TouchableNativeFeedback onPress={()=> pressed()}>
            <Text style={styles.Button}>
                READ
            </Text>
            </TouchableNativeFeedback>
        </View>
    );
}
export default Book
const styles = StyleSheet.create({
    Bookcontainer: {
        margin: 12,
    },
    Title: {
        fontSize: 22,
        fontWeight: '800',
      },

    Author: {
        fontSize: 16,
    },
    Button: {
        border: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        textAlign: 'center',
    },
})