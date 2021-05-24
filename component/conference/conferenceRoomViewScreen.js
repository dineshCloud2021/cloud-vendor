import React,{useState} from 'react';
import { StyleSheet, Text, ImageBackground, View,Pressable, Dimensions, TouchableOpacity, TextInput, Modal, FlatList} from 'react-native';
import { Ionicons,MaterialCommunityIcons,FontAwesome,Foundation  } from '@expo/vector-icons'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

  const image = { uri: "https://images.unsplash.com/photo-1581887300455-5eb259f6eac0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVldGluZyUyMHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" };
  
  

 export default function conferenceRoomViewScreen({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleTime, setModalVisibleTime] = useState(false);

  const [room_num, setroomNum] = useState("")
  const [floor_num, setFloorNum] = useState("")
  const [seats_count, setSeats] = useState("")

  const [start_time, setStart] = useState("")
  const [price, setPrice] = useState("")
  const [end_time, setEnd] = useState("")
  const [tittle, setTittle] = useState("")
  
  const [notes, setNotes] = useState([])
  
  const handleSubmit = (e , notes, setNotes ,tittle, setTittle,
    price,setPrice,start_time, setStart,end_time, setEnd,setModalVisible) => {
    e.preventDefault();
    const id = (notes.length) ? notes[notes.length - 1].id + 1 : 0
    //console.log("Notes.handleSubmit id", id)
    setNotes([...notes, {id: id, tittle: tittle, price: price, start: start_time , end :end_time}])
    setTittle("")
    setPrice("")
    setStart("")
    setEnd("")
    setModalVisibleTime(!modalVisibleTime)
    }

    const deleteNote = ( id, notes, setNotes) => {
      setNotes(notes.filter(note => note.id != id))
    }

    const Item = ({item}) => (
      <View style={{alignItems:"center"}}>
        <View  style={{flexDirection:"row", alignItems:"center",
          height: 100,borderRadius:20,backgroundColor:"#000",color:"#fff",shadowColor: "#000",
          shadowOffset: {
          width: 0,height: 2
          },shadowOpacity: 0.25,shadowRadius: 4,elevation: 5,width:width/1.5,justifyContent:"space-between",margin:10}}>
            <TouchableOpacity onPress={() => navigation.navigate("conferenceViewScreen")}>
              <View style={{alignItems:"center",alignContent:"center",alignSelf:"center",justifyContent:"space-evenly",width:width/2, height: 100}}>
                <Text style={{fontWeight:"bold",fontSize:18,color:"#fff",textDecorationLine:"underline",marginLeft:0}}>{item.tittle}</Text>
                <Text style={{fontWeight:"bold",fontSize:12,color:"#fff",marginLeft:0}}>Price : {item.price} $</Text>
                <Text style={{fontWeight:"bold",fontSize:12,color:"#fff",marginLeft:0}}>Start-Time : {item.start}</Text>
                <Text style={{fontWeight:"bold",fontSize:12,color:"#fff",marginLeft:0}}>End-Time : {item.end}</Text>
              </View>
            </TouchableOpacity>
            <View style={{backgroundColor:"#fff",alignItems:"center",justifyContent:"space-around"
                      ,width:60,height:100,borderTopRightRadius:20,borderBottomRightRadius:20}}>
              <TouchableOpacity>
                <FontAwesome name="pencil-square-o" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => deleteNote(item.id,notes,setNotes)}>
                <MaterialCommunityIcons  name="delete" size={32} color="#b30000" />
              </TouchableOpacity>
            </View>
            
        </View>
      </View>
    );  
   
  return (
    <View style={{...styles.container}}>
            <ImageBackground source={image} resizeMode='cover'
            style={{flex:1,alignItems: 'center',justifyContent: 'center',opacity:.5,position:"relative"}}/>

        <View style={{position:"absolute"}}>
            
            <View>
                
                <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'space-between',width:width}}/>

                <Pressable>
                  <TouchableOpacity onPress={() => setModalVisibleTime(true)}>
                    <View style={{flexDirection:"row",justifyContent: 'center',marginTop:15}}>
                      <View style={{flexDirection:"row",width:width/1.2,padding:5,
                                    alignItems: 'center',justifyContent: 'space-around',borderWidth:1
                                    ,borderRadius:15,backgroundColor:"#e6e6e6"}}>
                        <Text style={{fontSize:12,fontWeight:"bold"}}>Add conference timing</Text>
                        <Ionicons name="add-circle-outline" size={30} color="black" style={{margin: 0}}/>
                      </View>
                    </View> 
                  </TouchableOpacity>
                </Pressable>

                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={{fontSize:10,fontWeight:"bold",marginTop:10,
                textAlign:"center"}}>click to set seats counts,room number & floor number</Text>

                <View style={{flexDirection:"row",justifyContent: 'space-around',marginTop:8}}>
                  <Text style={{fontSize:13,fontWeight:"bold",textDecorationLine:"underline"}}>R.No</Text>
                  <Text style={{fontSize:13,fontWeight:"bold",textDecorationLine:"underline"}}>F.No</Text>
                  <Text style={{fontSize:13,fontWeight:"bold",textDecorationLine:"underline"}}>Seat's</Text>
                </View>

                <View style={{flexDirection:"row",justifyContent: 'space-around',marginLeft:-8,marginTop:5}}>
                  <Text style={{fontSize:15,fontWeight:"bold"}}>{room_num <= "" ? "-" : room_num}</Text>
                  <Text style={{fontSize:15,fontWeight:"bold"}}>{floor_num <= "" ? "-" : floor_num}</Text>
                  <Text style={{fontSize:15,fontWeight:"bold"}}>{seats_count <= "" ? "-" : seats_count}</Text>
                </View>
                </TouchableOpacity>

                <View style={styles.centeredView}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <View>
                          <Pressable
                            style={{alignSelf:"flex-end",marginTop:-10,marginRight:-10,marginBottom:10}}>
                              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <FontAwesome name="close" size={24} color="black" />
                              </TouchableOpacity>
                          </Pressable>
                          <View>
                            <Text style={styles.tittle}>Enter Details</Text>
                            <View style={{...styles.viewCont,alignItems:"center"}}>
                                <Foundation style={styles.icon} name="clipboard-notes" size={30} color={room_num <= "" ? "#666666" : "#000"} />
                                <TextInput 
                                    onChangeText={room_num => setroomNum(room_num)}
                                    keyboardType="number-pad" 
                                    placeholderTextColor="#666666" 
                                    autoFocus
                                    autoCorrect
                                    placeholder={"Room Number"}
                                    style={{...styles.input,paddingLeft:10}} />

                            </View>
                            <View style={{...styles.viewCont,alignItems:"center"}}>
                                <Foundation style={styles.icon} name="clipboard-notes" size={30} color={floor_num <= "" ? "#666666" : "#000"} />
                                <TextInput 
                                    onChangeText={floor_num => setFloorNum(floor_num)}
                                    keyboardType="number-pad" 
                                    placeholderTextColor="#666666" 
                                    autoFocus
                                    autoCorrect
                                    placeholder={"Floor Number"}
                                    style={{...styles.input,paddingLeft:10}} />

                            </View>
                            <View style={{...styles.viewCont,alignItems:"center"}}>
                                <Foundation style={styles.icon} name="clipboard-notes" size={30} color={seats_count <= "" ? "#666666" : "#000"} />
                                <TextInput 
                                    onChangeText={seats_count => setSeats(seats_count)}
                                    keyboardType="number-pad" 
                                    placeholderTextColor="#666666" 
                                    autoFocus
                                    autoCorrect
                                    placeholder={"Seats Counts"}
                                    style={{...styles.input,paddingLeft:10}} />
                            </View>
                        </View>

                          <View style={{alignSelf:"flex-end", marginTop: 20}}>
                            <TouchableOpacity style={styles.logBtn} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={{color: "#fff",fontSize:15,fontWeight:"bold"}}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                      </View>
                    </View>
                  </Modal>
                </View>

                <View style={styles.centeredView}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibleTime}
                    onRequestClose={() => {
                        setModalVisibleTime(!modalVisibleTime);
                    }}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <View>
                          <Pressable
                            style={{alignSelf:"flex-end",marginTop:-10,marginRight:-10,marginBottom:10}}>
                              <TouchableOpacity onPress={() => setModalVisibleTime(!modalVisibleTime)}>
                                <FontAwesome name="close" size={24} color="black" />
                              </TouchableOpacity>
                          </Pressable>
                          <View>
                            <Text style={styles.tittle}>Enter Details</Text>
                            <View style={{...styles.viewCont,alignItems:"center"}}>
                                <Foundation style={styles.icon} name="clipboard-notes" size={30} color={tittle <= "" ? "#666666" : "#000"} />
                                <TextInput 
                                    onChangeText={tittle => setTittle(tittle)}
                                    keyboardType="default" 
                                    placeholderTextColor="#666666" 
                                    autoFocus
                                    autoCorrect
                                    placeholder={"Tittle"}
                                    style={{...styles.input,paddingLeft:10}} />

                            </View>
                            <View style={{...styles.viewCont,alignItems:"center"}}>
                                <Foundation style={styles.icon} name="clipboard-notes" size={30} color={price <= "" ? "#666666" : "#000"} />
                                <TextInput 
                                    onChangeText={price => setPrice(price)}
                                    keyboardType="number-pad" 
                                    placeholderTextColor="#666666" 
                                    placeholder={"Price"}
                                    style={{...styles.input,paddingLeft:10}} />

                            </View>
                            <View style={{...styles.viewCont,alignItems:"center"}}>
                                <Foundation style={styles.icon} name="clipboard-notes" size={30} color={start_time <= "" ? "#666666" : "#000"} />
                                <TextInput 
                                    onChangeText={start_time => setStart(start_time)}
                                    keyboardType="default" 
                                    placeholderTextColor="#666666" 
                                    placeholder={"Start time"}
                                    style={{...styles.input,paddingLeft:10}} />

                            </View>
                            <View style={{...styles.viewCont,alignItems:"center"}}>
                                <Foundation style={styles.icon} name="clipboard-notes" size={30} color={end_time <= "" ? "#666666" : "#000"} />
                                <TextInput 
                                    onChangeText={end_time => setEnd(end_time)}
                                    keyboardType="default" 
                                    placeholderTextColor="#666666"
                                    placeholder={"End time"}
                                    style={{...styles.input,paddingLeft:10}} />

                            </View>
                        </View>

                          <View style={{alignSelf:"flex-end", marginTop: 20}}>
                            <TouchableOpacity style={styles.logBtn} onPress={(e) => handleSubmit(e , notes, setNotes ,tittle, setTittle,
                                                      price,setPrice,start_time, setStart,end_time, setEnd)}>
                                <Text style={{color: "#fff",fontSize:15,fontWeight:"bold"}}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                      </View>
                    </View>
                  </Modal>
                </View>
            
                </View>

            <View style={{height: height/1.5,paddingBottom:10}}>
                <Text style={{marginLeft:5,fontWeight:"bold",fontSize:20,color:"#000"}}>Timing List</Text>

                <FlatList
                    data={notes}
                    renderItem={({item})=>  <Item item={item} />}/>
            </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
      container: {
        flex: 1
    },
    tittle: {
        fontSize: 26,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom: 10,
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
        width: width / 1.5,
        height: 45,
        margin: 6,
        borderWidth:.5,
        borderRadius:10
    },
    icon: {
        paddingLeft: 8
    },
    input: {
        color: '#000',
        paddingLeft: 5,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        width: width / 1.8,
        height: 36,
    },
    logBtn:{
        backgroundColor: "#000",
        width: width / 3.5,
        borderRadius: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row",
        alignSelf:"center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      viewContItem: {
        alignItems:"center",
        height: 100,
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

});
