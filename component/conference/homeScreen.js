import React from 'react';
import { StyleSheet, Text, ImageBackground, View, Dimensions, TouchableOpacity, FlatList,} from 'react-native';
import { Ionicons,EvilIcons,FontAwesome  } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DATA = [
    {
        id: '1',
        hotel_name: "conference",
        floor_count : 5,
        room_count : 12,
        conference_hall: 8
    },
    {   
        id: '2',
        hotel_name: "conference",
        floor_count : 8,
        room_count : 20,
        conference_hall: 6
    },
    {
        id: '3',
        hotel_name: "conference",
        floor_count : 4,
        room_count : 24,
        conference_hall: 0
    }
  ];

  const image = { uri: "https://images.unsplash.com/photo-1581887300455-5eb259f6eac0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVldGluZyUyMHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" };
  
 export default function homeScreen({navigation}) {

    const Item = ({item}) => (
        <View>
            <View  style={{flexDirection:"column", alignItems:"center",
                height: 150,borderRadius:20,backgroundColor:"#000",color:"#fff",shadowColor: "#000",
                shadowOffset: {
                width: 0,
                height: 2
                },shadowOpacity: 0.25,shadowRadius: 4,elevation: 5,width:width/2.5,justifyContent:"space-between",margin:10}}>
                    
                <TouchableOpacity onPress={() => navigation.navigate("conferenceEnterScreen",{paramRoom: item.room_count,
                                                                                        paramHall: item.conference_hall,
                                                                                        paramFloor: item.floor_count})}>
                    <View style={{alignItems:"center",height: 100,justifyContent:"space-evenly"}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <EvilIcons name="location" size={20} color="white" />
                            <Text style={{fontWeight:"bold",fontSize:12,color:"#fff",textDecorationLine:"underline",marginLeft:2}}>{item.hotel_name}</Text>
                        </View>
                        <Text style={{fontWeight:"bold",fontSize:12,color:"#fff"}}>Halls : {item.conference_hall}</Text>
                        <Text style={{fontWeight:"bold",fontSize:12,color:"#fff"}}>Rooms : {item.room_count}</Text>
                        <Text style={{fontWeight:"bold",fontSize:12,color:"#fff"}}>Floors : {item.floor_count}</Text>
                    </View>                  
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{backgroundColor:"#fff",alignItems:"center",justifyContent:"center"
                    ,width:width/2.5,height:50,borderBottomRightRadius:20,borderBottomLeftRadius:20}}>
                    <FontAwesome name="pencil-square-o" size={30} color="black" />
                    </View>
                </TouchableOpacity>
            </View>   
        </View>
      );
  return (
    <View style={{...styles.container}}>
            <ImageBackground source={image} resizeMode='cover'
            style={{flex:1,alignItems: 'center',justifyContent: 'center',opacity:.5,position:"relative"}}/>

        <View style={{position:"absolute"}}>
            
            <View style={{height: height/3,overflow:"hidden"}}>
                
                <View style={{flexDirection:"row",justifyContent: 'center',marginTop:15}}>
                    <TouchableOpacity  onPress={() => navigation.navigate("conferencePlaceDetails")}>
                        <View style={{flexDirection:"row",width:width/1.2,padding:5,
                                    alignItems: 'center',justifyContent: 'space-around',borderWidth:1,borderRadius:15,
                                    backgroundColor:"#e6e6e6"}}>

                        <Text style={{fontSize:12,fontWeight:"bold"}}>Add your conference here</Text>
                        <Ionicons name="add-circle-outline" size={30} color="black" style={{margin: 0}}/>

                    </View>
                    </TouchableOpacity>
                </View>
            
                <View style={{flexDirection:"row",justifyContent: 'space-evenly',marginTop:10}}>

                    <View style={{borderWidth:1,width:width/3.5,height:width/2.5,justifyContent:"center",alignItems:"center"
                        ,borderRadius:50,backgroundColor:"#f2f2f2"}}>
                        <Text style={{color:"#000",fontSize:15,fontWeight:"bold"}}>Total</Text>
                        <Text style={{color:"#000",fontSize:15,fontWeight:"bold"}}>conference</Text>
                        <Text  style={{color:"#737373",fontSize:20,fontWeight:"bold"}}>+0</Text>
                    </View>

                    <View style={{borderWidth:1,width:width/3.5,height:width/2.5,justifyContent:"center",alignItems:"center",
                        borderRadius:50,backgroundColor:"#f2f2f2"}}>
                        <Text style={{color:"#000",fontSize:15,fontWeight:"bold"}}>Total</Text>
                        <Text style={{color:"#000",fontSize:15,fontWeight:"bold"}}>members</Text>
                        <Text style={{color:"#737373",fontSize:20,fontWeight:"bold"}}>+0</Text>
                    </View>

                </View>
            </View>

            <View style={{height: height/2.1, backgroundColor:"#66000000",marginTop:0,width:width,}}>
                <Text style={{marginLeft:5,fontWeight:"bold",fontSize:20,color:"#000"}}>Conference List</Text>
                <FlatList
                    horizontal
                    data={DATA}
                    renderItem={({item})=>  <Item item={item} />}/>
            </View>
        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        alignItems:"center",
        width: width/1.3,
        height: 120,
        margin: 5,
        borderRadius:20,
        backgroundColor:"#000",
        justifyContent:"space-around",
        color:"#fff",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    image: {
        flex:1,
        resizeMode: "cover",
        justifyContent: "center"
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
        backgroundColor: "#25a7da",
        width: width / 3,
        borderRadius: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',flexDirection:"row",
        alignSelf:"center",
        elevation: 5
    }

});
