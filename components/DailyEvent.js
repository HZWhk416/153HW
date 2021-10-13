import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, ImageBackground, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SingleEvent from './SingleEvent';

const DailyEvent = (props) => {
    <View style={{flexDirection: 'row', marginBottom: '10px'}}>
        <Text style={styles.DayText}>
            Monday
        </Text>
        <TextInput
            placeholder="enter event here"
            onChangeText={text => (setMonText(text))}
            style={{marginRight: '10px', borderBottomWidth: 1.0}}
            value = {MonText}
        />
        <View style={{marginRight: '10px'}}>
            <Button
                title="update event of Monday"
                onPress = {() => {
                    if (MonText != '') {
                        setMonEvents(MonText); 
                        setMonText('');
                    }
                }}
            />
        </View>
                    
        <Button
            title = "check Monday Event"
            onPress={() =>
            // navigation.navigate('MondayEvents', {eventList: ["monday event1", "monday event2", "monday event3"]})
                navigation.navigate('MondayEvents', {event: MonEvents})
            }
        />
    </View>
}
