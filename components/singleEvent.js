import * as React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image} from 'react-native';

const SingleEvent = (props) => {
    return (
        <View style={styles.singleEvent}>
            <Text style={styles.textStyle}>
               {props.event} 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    singleEvent: {
        width: '30%',
        //height: '30px',
        backgroundColor: 'yellow',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 30,
        alignItems: 'stretch',
        justifyContent: 'center',
        color: 'black',
    }

});

export default SingleEvent;