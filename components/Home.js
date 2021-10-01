import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, ImageBackground, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
  
          <Stack.Screen name="Home" component={Home}/>
  
          <Stack.Screen name="About" component={About}/>
          <Stack.Screen name="MondayEvents" component={MondayEvents}/>
          {/* <Stack.Screen name="FlexDemo1" component={FlexDemo1Screen} /> */}
  
        </Stack.Navigator>
      </NavigationContainer>
    );
};


const Home = ({navigation}) => {
    const [MonEvents, setMonEvents] = useState([""]);
    const [MonText, setMonText] = useState("");

    const [TueEvents, setTueEvents] = useState([]);
    const [TueText, setTueText] = useState("");

    const [WedEvents, setWedEvents] = useState([]);
    const [WedText, setWedText] = useState("");

    const [ThuEvents, setThuEvents] = useState([]);
    const [ThuText, setThuText] = useState("");

    const [FriEvents, setFriEvents] = useState([]);
    const [FriText, setFriText] = useState("");

    const [SatEvents, setSatEvents] = useState([]);
    const [SatText, setSatText] = useState("");

    const [SunEvents, setSunEvents] = useState([]);
    const [SunText, setSunText] = useState("");
    return (
        // <View>   
        <ImageBackground
            blurRadius={7}
            style={{flex:1}} 
            source={{uri:'https://cdn.wallpapersafari.com/98/93/GefbNz.jpg'}} 
        >
            <View style = {styles.Title}>
                <Text style={{fontSize: 45}}>
                    Zhiwei's Calender
                </Text> 

                <View style = {styles.About}>
                    <Button
                        title="About"
                        onPress={() =>
                            navigation.navigate('About', {content: "This app is used for checking daily events"})
                        }
                    />
                </View>
                
            </View>

            <View style = {styles.Calenders}>
                <View style={{flexDirection: 'row'}}>
                    <Text>
                        Monday
                    </Text>
                    <TextInput
                        placeholder=""
                        onChangeText={text => (setMonText(text))}
                    />
                    <Button
                        title="add event to Monday"
                        onPress = {(MonText) => setMonEvents([...MonEvents, MonText])}
                    />
                    <Button
                        title = "check Monday Events"
                        onPress={(MonEvents) =>
                            navigation.navigate('MondayEvents', {eventList: ["monday event1", "monday event2", "monday event3"]})
                        }
                    />
                </View>


                <Text>
                    bbbbb
                </Text>
                <Text>
                    ccccc
                </Text>
            </View>
        </ImageBackground>

        

            
        
        // </View>
        
    );
}

const About = ({navigation, route}) => {
    return (
        <ImageBackground
            blurRadius={7}
            style={{flex:1}} 
            source={{uri:'https://cdn.wallpapersafari.com/98/93/GefbNz.jpg'}} 
        >
            <Text style={{fontSize: 45}}>
                {route.params.content}
            </Text>
        </ImageBackground>
    )
};

const MondayEvents = ({navigation, route}) => {
    return (
        <ImageBackground
            blurRadius={7}
            style={{flex:1}} 
            source={{uri:'https://cdn.wallpapersafari.com/98/93/GefbNz.jpg'}} 
        >
            <View style = {{flexDirection: 'column'}}>
                {
                    route.params.eventList.map((event) => {
                        console.log(event);
                        return <Text>{event}</Text>
                    })
                    //<Text>{route.params.eventList}</Text>
                    
                    //<Text>monday event</Text>
                }
            </View>
            
            
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    Title: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#53e0ce',
        flexDirection: 'row',
    },
    Calenders: {
        width: '20%',
        flexDirection: 'column',
        justifyContent: 'start'
    },
    About: {
        backgroundColor: '#38f58d',
        marginRight: '20px',
    }
})

export default MyStack;