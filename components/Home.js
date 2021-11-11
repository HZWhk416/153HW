import * as React from 'react';
import { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, ImageBackground, Image, UselessTextInput, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SingleEvent from './SingleEvent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useValue } from './ValueContext';

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
    const [theInfo, setTheInfo] = useState({MonEvents: [], TueEvents: [], WedEvents: [], ThuEvents: [], FriEvents: []}) 

    const [MonEvents, setMonEvents] = useState([]);
    const [MonText, setMonText] = useState("");

    const [TueEvents, setTueEvents] = useState([]);
    const [TueText, setTueText] = useState("");

    const [WedEvents, setWedEvents] = useState([]);
    const [WedText, setWedText] = useState("");

    const [ThuEvents, setThuEvents] = useState([]);
    const [ThuText, setThuText] = useState("");

    const [FriEvents, setFriEvents] = useState([]);
    const [FriText, setFriText] = useState("");

    const [inputText, setInputText] = useState('');

    const {currentValue} = useValue()
    const BackgroundUrl = currentValue.bgurl

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
            setMonEvents([])
            setTueEvents([])
            setWedEvents([])
            setThuEvents([])
            setFriEvents([])
          }
        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
    }

    const clearAll = async () => {
        try {
            setFriEvents([])
            setMonEvents([])
            setThuEvents([])
            setTueEvents([])
            setWedEvents([])
            console.log('in clearData')
            await AsyncStorage.clear()
        } catch(e) {
            console.log("error in clearData ")
            console.dir(e)
            // clear error
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
            source={{uri: BackgroundUrl}} 
        >
            <View style = {styles.Title}>
                <Text style={{fontSize: 20}}>
                    Your weekly events list
                </Text> 
                <View>
                    <Button 
                        title="clear"
                        onPress={() => clearAll()}
                    />
                </View>
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
                <View style={styles.OneLine}>
                    <Text style={styles.DayText}>
                        Monday
                    </Text>
                    <View style={{flexDirection: 'row', marginLeft: 10}}>
                    {/* <View style={{maxWidth: '50%'}}> */}
                    <TextInput
                        style={styles.Input}
                        placeholder="enter event here"
                        onChangeText={text => (setMonText(text))}
                        style={{marginRight: 10, borderBottomWidth: 1.0}}
                        value = {MonText}
                        numberOfLines={5}
                    />
                    {/* </View> */}
                    <View style={{marginRight: 10}}>
                        <Button
                            title="update"
                            onPress = {() => {
                                if (MonText != '') {
                                    //var curMonEvents = this.state.MonEvents
                                    setMonEvents(MonEvents.concat(MonText, '')); 
                                    //console.log(MonEvents)
                                    setMonText('');
                                    const theInfo = {MonEvents: MonEvents, TueEvents: TueEvents, WedEvents: WedEvents, ThuEvents: ThuEvents, FriEvents: FriEvents}
                                    setTheInfo(theInfo)
                                    storeData(theInfo)
                                }
                            }}
                        />
                    </View> 
                    <Button
                        title = "check"
                        onPress={() =>
                            // navigation.navigate('MondayEvents', {eventList: ["monday event1", "monday event2", "monday event3"]})
                            navigation.navigate('MondayEvents', {event: MonEvents})
                        }
                    />
                    </View>
                </View>


                <View style={styles.OneLine}>
                    <Text style={styles.DayText}>
                        Tuesday
                    </Text>
                    <View style={{flexDirection: 'row', marginLeft: 10}}>
                    <TextInput
                        placeholder="enter event here"
                        onChangeText={text => (setTueText(text))}
                        style={{marginRight: 10, borderBottomWidth: 1.0}}
                        value={TueText}
                    />
                    <View style={{marginRight: 10}}>
                        <Button
                            title="update"
                            onPress = {() => {
                                if (TueText != '') {
                                    setTueEvents(TueEvents.concat(TueText, '')); 
                                    setTueText('');
                                    const theInfo = {MonEvents: MonEvents, TueEvents: TueEvents, WedEvents: WedEvents, ThuEvents: ThuEvents, FriEvents: FriEvents}
                                    setTheInfo(theInfo)
                                    storeData(theInfo)
                                }
                            }}
                        />
                    </View>
                    <Button
                        title = "check"
                        onPress={() =>
                            // navigation.navigate('MondayEvents', {eventList: ["monday event1", "monday event2", "monday event3"]})
                            navigation.navigate('TuesdayEvents', {event: TueEvents})
                        }
                    />
                    </View>
                </View>


                <View style={styles.OneLine}>
                    <Text style={styles.DayText}>
                        Wednesday
                    </Text>
                    <View style={{flexDirection: 'row', marginLeft: 10}}>
                    <TextInput
                        placeholder="enter event here"
                        onChangeText={text => (setWedText(text))}
                        style={{marginRight: 10, borderBottomWidth: 1.0}}
                        value={WedText}
                    />
                    <View style={{marginRight: 10}}>
                        <Button
                            title="update"
                            onPress = {() => {
                                if (WedText != '') {
                                    setWedEvents(WedEvents.concat(WedText, '')); 
                                    setWedText('');
                                    const theInfo = {MonEvents: MonEvents, TueEvents: TueEvents, WedEvents: WedEvents, ThuEvents: ThuEvents, FriEvents: FriEvents}
                                    setTheInfo(theInfo)
                                    storeData(theInfo)
                                }
                            }}
                        />
                    </View>
                    <Button
                        title = "check"
                        onPress={() =>
                            // navigation.navigate('MondayEvents', {eventList: ["monday event1", "monday event2", "monday event3"]})
                            navigation.navigate('WednesdayEvents', {event: WedEvents})
                        }
                    />
                    </View>
                </View>


                <View style={styles.OneLine}>
                    <Text style={styles.DayText}>
                        Thursday
                    </Text>
                    <View style={{flexDirection: 'row', marginLeft: 10}}>
                    <TextInput
                        style={{marginRight: 10, borderBottomWidth: 1.0}}
                        placeholder="enter event here"
                        onChangeText={text => (setThuText(text))}
                        value={ThuText}
                    />
                    <View style={{marginRight: 10}}>
                        <Button
                            title="update"
                            onPress = {() => {
                                if (ThuText != '') {
                                    setThuEvents(ThuEvents.concat(ThuText, '')); 
                                    setThuText('');
                                    const theInfo = {MonEvents: MonEvents, TueEvents: TueEvents, WedEvents: WedEvents, ThuEvents: ThuEvents, FriEvents: FriEvents}
                                    setTheInfo(theInfo)
                                    storeData(theInfo)
                                }
                            }}
                        />
                    </View>
                    <Button
                        title = "check"
                        onPress={() =>
                            // navigation.navigate('MondayEvents', {eventList: ["monday event1", "monday event2", "monday event3"]})
                            navigation.navigate('ThursdayEvents', {event: ThuEvents})
                        }
                    />
                    </View>
                </View>

                <View style={styles.OneLine}>
                    <Text style={styles.DayText}>
                        Friday
                    </Text>
                    <View style={{flexDirection: 'row', marginLeft: 10}}>
                    <TextInput
                        style={{marginRight: 10, borderBottomWidth: 1.0}}
                        placeholder="enter event here"
                        onChangeText={text => (setFriText(text))}
                        value={FriText}
                    />
                    <View style={{marginRight: 10}}>
                        <Button
                            title="update"
                            onPress = {() => {
                                if (FriText != '') {
                                    setFriEvents(FriEvents.concat(FriText, '')); 
                                    setFriText('');
                                    const theInfo = {MonEvents: MonEvents, TueEvents: TueEvents, WedEvents: WedEvents, ThuEvents: ThuEvents, FriEvents: FriEvents}
                                    setTheInfo(theInfo)
                                    storeData(theInfo)
                                }
                            }}
                        />
                    </View>
                    <Button
                        title = "check"
                        onPress={() =>
                            // navigation.navigate('MondayEvents', {eventList: ["monday event1", "monday event2", "monday event3"]})
                            navigation.navigate('FridayEvents', {event: FriEvents})
                        }
                    />
                    </View>
                </View>
            </View>
        </ImageBackground>
         
    );
}

const About = ({navigation, route}) => {
    const {currentValue} = useValue()
    const BackgroundUrl = currentValue.bgurl
    return (
        <ImageBackground
            blurRadius={7}
            style={{flex:1}} 
            source={{uri: BackgroundUrl}} 
        >
            <Text style={{fontSize: 45}}>
                {route.params.content}
            </Text>
        </ImageBackground>
    )
};

const MondayEvents = ({navigation, route}) => {
    const events = route.params.event
    //console.log(events)
    //console.log(typeof events)
    const {currentValue} = useValue()
    const BackgroundUrl = currentValue.bgurl
    return (
        <ImageBackground
            blurRadius={7}
            style={{flex:1}} 
            source={{uri: BackgroundUrl}} 
        >
            <View style = {{flexDirection: 'column'}}>
                {<SingleEvent event={events}/>}
            </View> 
        </ImageBackground>
    )
};

const TuesdayEvents = ({navigation, route}) => {
    const events = route.params.event
    const {currentValue} = useValue()
    const BackgroundUrl = currentValue.bgurl
    return (
        <ImageBackground
            blurRadius={7}
            style={{flex:1}} 
            source={{uri: BackgroundUrl}} 
        >
            <View style = {{flexDirection: 'column'}}>
                {<SingleEvent event={events}/>}
            </View> 
        </ImageBackground>
    )
};

const WednesdayEvents = ({navigation, route}) => {
    const events = route.params.event
    const {currentValue} = useValue()
    const BackgroundUrl = currentValue.bgurl
    return (
        <ImageBackground
            blurRadius={7}
            style={{flex:1}} 
            source={{uri: BackgroundUrl}} 
        >
            <View style = {{flexDirection: 'column'}}>
                {<SingleEvent event={events}/>}
            </View> 
        </ImageBackground>
    )
};

const ThursdayEvents = ({navigation, route}) => {
    const events = route.params.event
    const {currentValue} = useValue()
    const BackgroundUrl = currentValue.bgurl
    return (
        <ImageBackground
            blurRadius={7}
            style={{flex:1}} 
            source={{uri: BackgroundUrl}} 
        >
            <View style = {{flexDirection: 'column'}}>
                {<SingleEvent event={events}/>}
            </View> 
        </ImageBackground>
    )
};

const FridayEvents = ({navigation, route}) => {
    const events = route.params.event
    const {currentValue} = useValue()
    const BackgroundUrl = currentValue.bgurl
    return (
        <ImageBackground
            blurRadius={7}
            style={{flex:1}} 
            source={{uri: BackgroundUrl}} 
        >
            <View style = {{flexDirection: 'column'}}>
                {<SingleEvent event={events}/>}
            </View> 
        </ImageBackground>
    )
};





const styles = StyleSheet.create({
    Title: {
        marginBottom: '10px',
        //width: '40%',
        alignItems: 'center',
        justifyContent: 'space-between',
        //backgroundColor: '#53e0ce',
        flexDirection: 'row',
    },
    Calenders: {
        //width: '20%',
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
        fontSize: 15,
    },
    OneLine: {
        flexDirection: 'column',
        //marginBottom: 20
        maxWidth: '50%'
    },
    Input: {
        //maxWidth: WIDTH - 40,
        maxWidth: '50%',
        //height: '100%',
        marginRight: 10, 
        borderBottomWidth: 1.0,
        marginTop: 100,
        fontSize: 100,
        
    }
})

export default MyStack;