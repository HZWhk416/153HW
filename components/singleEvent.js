import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image} from 'react-native';

const SingleEvent = (props) => {
    //const [event, setEvent] = useState('');
    const events = props.event
    console.log(typeof events)
    return (
        <View style={styles.singleEvent}>
            <Text style={styles.textStyle}>
               Today's event: 
            </Text>
            <View style={{flexDirection: 'column'}}>
            {events.map((value, index) => {
                    return (
                        <Text key={index}>
                            {value}
                        </Text>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    singleEvent: {
        //width: '40%',
        //height: '30px',
        //backgroundColor: 'blue',
        fontSize: 25,
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: 20
    },
    textStyle: {
        fontSize: 20,
        alignItems: 'stretch',
        justifyContent: 'center',
        color: 'black',
    }

});

export default SingleEvent;