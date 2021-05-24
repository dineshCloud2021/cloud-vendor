import React from 'react';
import { StyleSheet,Button, TouchableOpacity,View} from 'react-native';
import { Ionicons,Entypo,AntDesign,MaterialIcons  } from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import loginScreen from '../component/conference/loginScreen';
import registerScreen from '../component/conference/registerScreen';
import homeScreen from '../component/conference/homeScreen';
import conferenceEnterScreen from '../component/conference/conferenceEnterScreen';
import conferenceViewScreen from '../component/conference/conferenceViewScreen';
import conferenceRoomViewScreen from '../component/conference/conferenceRoomViewScreen';
import conferenceHallViewScreen from '../component/conference/conferenceHallViewScreen';
import placeSearch from '../component/conference/placeSearch';
import conferencePlaceDetails from '../component/conference/uploadScreens/conferencePlaceDetails';
const Stack = createStackNavigator();

const screenOptionStyle ={
    headerShown : true
}

const conStackNavigator = () =>{

    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}}
                name="loginScreen"
                component={loginScreen}
            />
            <Stack.Screen options={{headerShown: false}}
                name="registerScreen"
                component={registerScreen}
            />
            <Stack.Screen
                name="homeScreen"
                component={homeScreen}
                options={{
                    title: 'Cloud Vendor',
                    headerStyle: {
                      backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      textAlign:"center",
                      fontSize:18
                    },
                    headerLeft: () => (
                        <TouchableOpacity>
                        <Entypo name="menu" size={30} color="white" style={{marginLeft:5}}/>
                        </TouchableOpacity>
                      ),
                    headerRight: () => (
                        <TouchableOpacity>
                        <Ionicons name="person-circle-outline" size={30} color="white" style={{marginRight:5}}/>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen 
                name="conferenceEnterScreen"
                component={conferenceEnterScreen}
                options={{
                    title: 'Conference',
                    headerStyle: {
                      backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      textAlign:"center",
                      fontSize:18
                    },
                    headerRight: () => (
                        <TouchableOpacity>
                        <View style={{marginRight:5}}/>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen 
                name="conferencePlaceDetails"
                component={conferencePlaceDetails}
                options={{
                    title: 'Conference Details',
                    headerStyle: {
                      backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      textAlign:"center",
                      fontSize:18
                    },
                    headerRight: () => (
                        <TouchableOpacity>
                        <View style={{marginRight:5}}/>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen 
                name="conferenceViewScreen"
                component={conferenceViewScreen}
                options={{
                    title: 'Conference Name',
                    headerStyle: {
                      backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      textAlign:"center",
                      fontSize:18
                    },
                    headerRight: () => (
                        <TouchableOpacity>
                        <View style={{marginRight:5}}/>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen 
                name="conferenceRoomViewScreen"
                component={conferenceRoomViewScreen}
                options={{
                    title: 'Room ID',
                    headerStyle: {
                      backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      textAlign:"center",
                      fontSize:18
                    },
                    headerRight: () => (
                        <TouchableOpacity>
                        <View style={{marginRight:5}}/>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen 
                name="conferenceHallViewScreen"
                component={conferenceHallViewScreen}
                options={{
                    title: 'Hall ID',
                    headerStyle: {
                      backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      textAlign:"center",
                      fontSize:18
                    },
                    headerRight: () => (
                        <TouchableOpacity>
                        <View style={{marginRight:5}}/>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen 
                name="placeSearch"
                component={placeSearch}
                options={{
                    title: 'Conference Place',
                    headerStyle: {
                      backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      textAlign:"center",
                      fontSize:18
                    },
                    headerRight: () => (
                        <TouchableOpacity>
                        <View style={{marginRight:5}}/>
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>
    )
}
export default conStackNavigator;