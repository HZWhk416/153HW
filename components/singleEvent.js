import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, ImageBackground, Image, FlatList} from 'react-native';
import HowManyDaily from '../container/HowManyDaily';

const SingleEvent = (props) => {
    //const [event, setEvent] = useState('');
    const events = props.event
    console.log(typeof events)

    const renderItem = ({item}) => {
        return (
            <Text>{item}</Text>
        )
    }
    return (
        <View style={styles.singleEvent}>
            <Text style={styles.textStyle}>
               Today's event: 
            </Text>
            <View style={{flexDirection: 'column', maxHeight: '85%'}}>
            {/* {events.map((value, index) => {
                    return (
                        <Text key={index}>
                            {value}
                        </Text>
                    )
                })} */}
                <FlatList
                    data={events}
                    renderItem={renderItem}
                    keyExtractor={event => event}
                />
            </View>
            <HowManyDaily
                detail={<Text style={{marginTop: 10, color: 'purple', fontWeight: 'bold'}}>You have {events.length/2} events to deal with today</Text>}
            />
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