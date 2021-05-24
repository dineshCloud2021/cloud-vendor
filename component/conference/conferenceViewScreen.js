import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import LottieView from 'lottie-react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function conferenceViewScreen({navigation,route}) {

    var room = route.params.paramRoom;
    const DATA = [];
    for (var i = 1; i <= room; i++) {
        DATA.push(i);
    }

    var hall = route.params.paramHall;
    const DATAHALL = [];
    for (var i = 1; i <= hall; i++) {
        DATAHALL.push(i);
    }

    const Item = ({item}) => (
        <View>
            <TouchableOpacity style={{alignItems:"center",justifyContent:"center"}} onPress={() => navigation.navigate("conferenceRoomViewScreen",{paramRoom: route.params.paramRoom,
                                                                                        paramHall: route.params.paramHall,
                                                                                        paramFloor: route.params.paramFloor})}>
                <LottieView style={{width:60,height:60}}
                        source={require('../conference/lottie/door.json')}autoPlay={true}loop/>
                <Text style={{color:"#000"}}>{item}</Text>
            </TouchableOpacity>
        </View>
      );

      const ItemHall = ({item}) => (
        <View>
           <TouchableOpacity  style={{alignItems:"center",justifyContent:"center"}} onPress={() => navigation.navigate("conferenceHallViewScreen",{paramRoom: route.params.paramRoom,
                                                                                        paramHall: route.params.paramHall,
                                                                                        paramFloor: route.params.paramFloor})}>
                <LottieView style={{width:90,height:90}}
                            source={require('../conference/lottie/door.json')}autoPlay={true}loop/>
                    <Text style={{color:"#000"}}>{item}</Text>
           </TouchableOpacity>
            
        </View>
      );

    return (
        <View style={styles.container}>
            
            <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'space-between',width:width}}/>

                <View style={{flexDirection:"row",justifyContent: 'space-around',marginTop:8}}>
                  <Text style={{fontSize:13,fontWeight:"bold"}}>Room's</Text>
                  <Text style={{fontSize:13,fontWeight:"bold"}}>Hall's</Text>
                  <Text style={{fontSize:13,fontWeight:"bold"}}>Floor's</Text>
                </View>

                <View style={{flexDirection:"row",justifyContent: 'space-around',marginTop:0}}>
                  <Text style={{fontSize:15,fontWeight:"bold"}}>{route.params.paramRoom}</Text>
                  <Text style={{fontSize:15,fontWeight:"bold"}}>{route.params.paramHall}</Text>
                  <Text style={{fontSize:15,fontWeight:"bold"}}>{route.params.paramFloor}</Text>
                </View>
            <View>
                <Text style={{marginLeft:5,fontWeight:"bold",fontSize:16,color:"#000"}}>Conference Room's</Text>
                <FlatList
                    contentContainerStyle={{alignItems:"center"}}
                    data={DATA}
                    numColumns={6}
                    renderItem={({item})=>  <Item item={item} />}/>
                    <View style={{borderBottomWidth:0.5,width:width/1.2,alignSelf:"center"}}/>
            </View>

            <View>
                <Text style={{marginLeft:5,fontWeight:"bold",fontSize:16,color:"#000",marginTop:5}}>Conference Hall's</Text>
                {DATAHALL <= 0 ? <Text style={{alignSelf:"center",marginTop:20}}>This Conference have no Hall's</Text> :  
                <FlatList
                    contentContainerStyle={{alignItems:"center"}}
                    data={DATAHALL}
                    numColumns={4}
                    renderItem={({item})=>  <ItemHall item={item} />}/>
                }
               
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
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
        borderRadius:10
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
    },
});