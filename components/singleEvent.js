import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image} from 'react-native';

const SingleEvent = (props) => {
    //const [event, setEvent] = useState('');
    return (
        <View style={styles.singleEvent}>
            <Text style={styles.textStyle}>
               Today's event: {props.event} 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    singleEvent: {
        width: '40%',
        //height: '30px',
        //backgroundColor: 'blue',
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