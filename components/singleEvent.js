import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, ImageBackground, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const singleEvent = ({event}) => {
    return (
        <View style={styles.singleEvent}>
            <Text>
                
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    singleEvent: {
        color: 'yellow',
        
    }
});