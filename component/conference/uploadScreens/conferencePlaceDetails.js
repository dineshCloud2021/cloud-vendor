import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions,ImageBackground, TouchableOpacity, } from 'react-native';
import { Ionicons,Foundation ,Entypo  } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const image = { uri: "https://static.turbosquid.com/Preview/2018/11/11__18_43_10/2.jpg98728108-D3B4-44F0-9992-4B3FF71B0AF0Large.jpg" };

export default function conferencePlaceDetails({navigation}) {

    const [conferencePlace, setConferencePlace] = useState("")
    const [conferenceAddress, setConferenceAddress] = useState("")
    const [conferenceCount, setConferenceCount] = useState("")

    const [roomCount, setRoomCount] = useState("")
    const [floorCount, setFloorCount] = useState("")
    
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode='cover'
            style={{flex:1,opacity:.5,position:"relative"}}/>
            
            <View style={{position:"absolute",justifyContent:"center",alignItems:"center",width:width,height:height}}>

            <View>
                <Text style={styles.tittle}>Enter Details</Text>
                <Text style={{...styles.titDes}}>Welcome our conference register portel</Text>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("placeSearch")}>
                        <View style={{...styles.viewCont,alignItems:"center"}}>
                            <Ionicons style={{...styles.icon,marginTop:0,paddingLeft:0}} name="location" size={28} color={conferencePlace <= "" ? "#666666" : "#000"} />
                            <Text style={{...styles.input,paddingLeft:5,color:"#666666",marginTop:12}}>
                                {conferencePlace <= "" ? "Conference place" : conferencePlace}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View>
                        <View style={{...styles.viewCont,alignItems:"center"}}>
                            <Entypo style={{...styles.icon,marginTop:0}} name="location" size={22} color={conferenceAddress <= "" ? "#666666" : "#000"} />
                            <Text style={{...styles.input,paddingLeft:5,color:"#666666",marginTop:12}}>
                                {conferenceAddress <= "" ? "Conference address" : conferenceAddress}
                            </Text>
                        </View>
                </View>
                <View style={{...styles.viewCont}}>
                    <Foundation style={styles.icon} name="clipboard-notes" size={30} color={floorCount <= "" ? "#666666" : "#000"} />
                    <TextInput 
                        onChangeText={floorCount => setFloorCount(floorCount)}
                        returnKeyType='go'
                        keyboardType="number-pad" 
                        placeholderTextColor="#666666" 
                        placeholder={"Floor count"}
                        style={{...styles.input,paddingLeft:10}} />
                </View>
                <View style={{...styles.viewCont}}>
                    <Foundation style={styles.icon} name="clipboard-notes" size={30} color={roomCount <= "" ? "#666666" : "#000"} />
                    <TextInput 
                        onChangeText={roomCount => setRoomCount(roomCount)}
                        returnKeyType='go'
                        keyboardType="number-pad" 
                        placeholderTextColor="#666666" 
                        placeholder={"Room count"}
                        style={{...styles.input,paddingLeft:10}} />
                </View>
                <View style={{...styles.viewCont}}>
                    <Foundation style={styles.icon} name="clipboard-notes" size={30} color={conferenceCount <= "" ? "#666666" : "#000"} />
                    <TextInput 
                        onChangeText={conferenceCount => setConferenceCount(conferenceCount)}
                        returnKeyType='go'
                        keyboardType="number-pad" 
                        placeholderTextColor="#666666" 
                        placeholder={"Hall count"}
                        style={{...styles.input,paddingLeft:10}} />
                </View>
            </View>

            <View style={{alignSelf:"flex-end",marginRight:30, marginTop: 20}}>
                <TouchableOpacity style={styles.logBtn}>
                    <Text style={{color: "#fff",fontSize:15,fontWeight:"bold"}}>
                        Enter
                    </Text>
                </TouchableOpacity>
            </View>
    
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center"
    },
    tittle: {
        fontSize: 30,
        fontWeight:"bold",
        textAlign:"center"
    },
    titDes: {
        fontSize: 12,
        color: '#666666',
        fontWeight: "bold",
        marginTop: 10,
        textAlign:"center"
    },
    viewCont: {
        flexDirection:"row",
        alignSelf:"center",
        width: width / 1.2,
        height: 45,
        margin: 10,
        borderWidth:.5,
        borderRadius:10,
        
    },
    icon: {
        paddingLeft: 8,
        marginTop: 5.5
    },
    input: {
        color: '#000',
        paddingLeft: 5,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        width: width / 1.6,
        height: 36,
    },
    logBtn:{
        backgroundColor: "#000",
        width: width / 3.7,
        borderRadius: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',flexDirection:"row",
        alignSelf:"center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }

});
