import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

function pressed(){
    console.log("pressed");
}


const Book = (props) => {
    return(
        <View>
            <TouchableNativeFeedback onPress={()=> pressed()}>
            <Text>
                {props.Title}
            </Text>
            </TouchableNativeFeedback>
            <Text>
            {props.Author}
            </Text>
            <Text>
            {props.Description}
            </Text>
            <Text>
            {props.Isbn}
            </Text>
            <TouchableNativeFeedback onPress={()=> pressed()}>
            <Text>
                
            </Text>
            </TouchableNativeFeedback>
        </View>
    );
}
export default Book
const styles = StyleSheet.create({
    
})