import * as React from 'react';
import { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, ImageBackground, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SingleEvent from './SingleEvent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
  
          <Stack.Screen name="Home" component={Home}/>
  
          <Stack.Screen name="About" component={About}/>
          <Stack.Screen name="MondayEvents" component={MondayEvents}/>
          <Stack.Screen name="TuesdayEvents" component={TuesdayEvents}/>
          <Stack.Screen name="WednesdayEvents" component={WednesdayEvents}/>
          <Stack.Screen name="ThursdayEvents" component={ThursdayEvents}/>
          <Stack.Screen name="FridayEvents" component={FridayEvents}/>
  
        </Stack.Navigator>
      </NavigationContainer>
    );
};


const Home = ({navigation}) => {
    const [theInfo, setTheInfo] = useState({MonEvents: '', TueEvents: '', WedEvents: '', ThuEvents: '', FriEvents: ''}) 

    const [MonEvents, setMonEvents] = useState("");
    const [MonText, setMonText] = useState("");

    const [TueEvents, setTueEvents] = useState("");
    const [TueText, setTueText] = useState("");

    const [WedEvents, setWedEvents] = useState("");
    const [WedText, setWedText] = useState("");

    const [ThuEvents, setThuEvents] = useState("");
    const [ThuText, setThuText] = useState("");

    const [FriEvents, setFriEvents] = useState("");
    const [FriText, setFriText] = useState("");

    const [inputText, setInputText] = useState('');

    useEffect(() => {getData()},[])

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@data_info')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setTheInfo(data)
            setMonEvents(data.MonEvents)
            setTueEvents(data.TueEvents)
            setWedEvents(data.WedEvents)
            setThuEvents(data.ThuEvents)
            setFriEvents(data.FriEvents)
            console.log('set Info, and events from Monday to Friday')
          } else {
            console.log('just read a null value from Storage')
            setMonEvents('')
            setTueEvents('')
            setWedEvents('')
            setThuEvents('')
            setFriEvents('')
          }
        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
    }

    // storeData converts the value stored in the info variable to a string
    // which is then writes into local storage using AsyncStorage.setItem.
    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@data_info', jsonValue)
            console.log('just stored '+jsonValue)
        } catch (e) {
            console.log("error in storeData ")
            console.dir(e)
            // saving error
        }
    }

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
                            navigation.navigate('About', {content: "This app is used for checking daily event"})
                        }
                    />
                </View>
            </View>

            <View style = {styles.Calenders}>
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
                                    const theInfo = {MonEvents: MonEvents, TueEvents: TueEvents, WedEvents: WedEvents, ThuEvents: ThuEvents, FriEvents: FriEvents}
                                    setTheInfo(theInfo)
                                    storeData(theInfo)
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


                <View style={{flexDirection: 'row', marginBottom: '10px'}}>
                    <Text style={styles.DayText}>
                        Tuesday
                    </Text>
                    <TextInput
                        placeholder="enter event here"
                        onChangeText={text => (setTueText(text))}
                        style={{marginRight: '10px', borderBottomWidth: 1.0}}
                        value={TueText}
                    />
                    <View style={{marginRight: '10px'}}>
                        <Button
                            title="update event of Tuesday"
                            onPress = {() => {
                                if (TueText != '') {
                                    setTueEvents(TueText); 
                                    setTueText('');
                                    const theInfo = {MonEvents: MonEvents, TueEvents: TueEvents, WedEvents: WedEvents, ThuEvents: ThuEvents, FriEvents: FriEvents}
                                    setTheInfo(theInfo)
                                    storeData(theInfo)
                                }
                            }}
                        />
                    </View>
                    <Button
                        title = "check Tuesday Event"
                        onPress={() =>
                            // navigation.navigate('MondayEvents', {eventList: ["monday event1", "monday event2", "monday event3"]})
                            navigation.navigate('TuesdayEvents', {event: TueEvents})
                        }
                    />
                </View>


                <View style={{flexDirection: 'row', marginBottom: '10px'}}>
                    <Text style={styles.DayText}>
                        Wednesday
                    </Text>
                    <TextInput
                        placeholder="enter event here"
                        onChangeText={text => (setWedText(text))}
                        style={{marginRight: '10px', borderBottomWidth: 1.0}}
                        value={WedText}
                    />
                    <View style={{marginRight: '10px'}}>
                        <Button
                            title="update event of Wednesday"
                            onPress = {() => {
                                if (WedText != '') {
                                    setWedEvents(WedText); 
                                    setWedText('');
                                    const theInfo = {MonEvents: MonEvents, TueEvents: TueEvents, WedEvents: WedEvents, ThuEvents: ThuEvents, FriEvents: FriEvents}
                                    setTheInfo(theInfo)
                                    storeData(theInfo)
                                }
                            }}
                        />
                    </View>
                    <Button
                        title = "check Wednesday Event"
                        onPress={() =>
                            // navigation.navigate('MondayEvents', {eventList: ["monday event1", "monday event2", "monday event3"]})
                            navigation.navigate('WednesdayEvents', {event: WedEvents})
                        }
                    />
                </View>


                <View style={{flexDirection: 'row', marginBottom: '10px'}}>
                    <Text style={styles.DayText}>
                        Thursday
                    </Text>
                    <TextInput
                        style={{marginRight: '10px', borderBottomWidth: 1.0}}
                        placeholder="enter event here"
                        onChangeText={text => (setThuText(text))}
                        value={ThuText}
                    />
                    <View style={{marginRight: '10px'}}>
                        <Button
                            title="update event of Thursday"
                            onPress = {() => {
                                if (ThuText != '') {
                                    setThuEvents(ThuText); 
                                    setThuText('');
                                    const theInfo = {MonEvents: MonEvents, TueEvents: TueEvents, WedEvents: WedEvents, ThuEvents: ThuEvents, FriEvents: FriEvents}
                                    setTheInfo(theInfo)
                                    storeData(theInfo)
                                }
                            }}
                        />
                    </View>
                    <Button
                        title = "check Thursday Event"
                        onPress={() =>
                            // navigation.navigate('MondayEvents', {eventList: ["monday event1", "monday event2", "monday event3"]})
                            navigation.navigate('ThursdayEvents', {event: ThuEvents})
                        }
                    />
                </View>

                <View style={{flexDirection: 'row', marginBottom: '10px'}}>
                    <Text style={styles.DayText}>
                        Friday
                    </Text>
                    <TextInput
                        style={{marginRight: '10px', borderBottomWidth: 1.0}}
                        placeholder="enter event here"
                        onChangeText={text => (setFriText(text))}
                        value={FriText}
                    />
                    <View style={{marginRight: '10px'}}>
                        <Button
                            title="update event of Friday"
                            onPress = {() => {
                                if (FriText != '') {
                                    setFriEvents(FriText); 
                                    setFriText('');
                                    const theInfo = {MonEvents: MonEvents, TueEvents: TueEvents, WedEvents: WedEvents, ThuEvents: ThuEvents, FriEvents: FriEvents}
                                    setTheInfo(theInfo)
                                    storeData(theInfo)
                                }
                            }}
                        />
                    </View>
                    <Button
                        title = "check Friday Event"
                        onPress={() =>
                            // navigation.navigate('MondayEvents', {eventList: ["monday event1", "monday event2", "monday event3"]})
                            navigation.navigate('FridayEvents', {event: FriEvents})
                        }
                    />
                </View>
            </View>
        </ImageBackground>
        
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
                {<SingleEvent event={route.params.event}/>}
            </View> 
        </ImageBackground>
    )
};

const TuesdayEvents = ({navigation, route}) => {
    return (
        <ImageBackground
            blurRadius={7}
            style={{flex:1}} 
            source={{uri:'https://cdn.wallpapersafari.com/98/93/GefbNz.jpg'}} 
        >
            <View style = {{flexDirection: 'column'}}>
                {<SingleEvent event={route.params.event}/>}
            </View> 
        </ImageBackground>
    )
};

const WednesdayEvents = ({navigation, route}) => {
    return (
        <ImageBackground
            blurRadius={7}
            style={{flex:1}} 
            source={{uri:'https://cdn.wallpapersafari.com/98/93/GefbNz.jpg'}} 
        >
            <View style = {{flexDirection: 'column'}}>
                {<SingleEvent event={route.params.event}/>}
            </View> 
        </ImageBackground>
    )
};

const ThursdayEvents = ({navigation, route}) => {
    return (
        <ImageBackground
            blurRadius={7}
            style={{flex:1}} 
            source={{uri:'https://cdn.wallpapersafari.com/98/93/GefbNz.jpg'}} 
        >
            <View style = {{flexDirection: 'column'}}>
                {<SingleEvent event={route.params.event}/>}
            </View> 
        </ImageBackground>
    )
};

const FridayEvents = ({navigation, route}) => {
    return (
        <ImageBackground
            blurRadius={7}
            style={{flex:1}} 
            source={{uri:'https://cdn.wallpapersafari.com/98/93/GefbNz.jpg'}} 
        >
            <View style = {{flexDirection: 'column'}}>
                {<SingleEvent event={route.params.event}/>}
            </View> 
        </ImageBackground>
    )
};





const styles = StyleSheet.create({
    Title: {
        marginBottom: '10px',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'space-between',
        //backgroundColor: '#53e0ce',
        flexDirection: 'row',
    },
    Calenders: {
        width: '20%',
        flexDirection: 'column',
    },
    About: {
        backgroundColor: '#38f58d',
        marginRight: '20px',
    },
    DayText: {
        color: 'blue',
        marginLeft: '10px', 
        marginRight: '10px', 
        fontSize: 20,
    }
})

export default MyStack;