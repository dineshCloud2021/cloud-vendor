import React,{useState} from 'react';
import { StyleSheet, Text, ImageBackground, View,Pressable, Dimensions, TouchableOpacity, TextInput, Modal, FlatList} from 'react-native';
import { Ionicons,MaterialCommunityIcons ,FontAwesome,Foundation  } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

  const image = { uri: "https://images.unsplash.com/photo-1581887300455-5eb259f6eac0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVldGluZyUyMHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" };

 export default function conferenceEnterScreen({navigation,route}) {

  const [notes, setNotes] = useState([])

  const [modalVisible, setModalVisible] = useState(false);

  const [conference_name, setConference] = useState("")
  const [price, setPrice] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")

  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

  const startshowDatePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const starthideDatePicker = () => {
    setStartDatePickerVisibility(false);
  };

  const starthandleConfirm = (date) => {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd+ '-' +mm+ '-' + yyyy;
    setStart(today)
    starthideDatePicker();
  };

  const endshowDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const endhideDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

  const endhandleConfirm = (date) => {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd+ '-' +mm+ '-' + yyyy;
    setEnd(today)
    endhideDatePicker();
  };

  const handleSubmit = (e , notes, setNotes , conference_name, setConference,
    price,setPrice,start,setStart,end, setEnd) => {
    e.preventDefault();
    const id = (notes.length) ? notes[notes.length - 1].id + 1 : 0
    //console.log("Notes.handleSubmit id", id)
    setNotes([...notes, {id: id, conference_name: conference_name, price: price, start: start , end :end}])
    setConference("")
    setPrice("")
    setStart("")
    setEnd("")
    setModalVisible(!modalVisible)
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
          <TouchableOpacity onPress={() => navigation.navigate("conferenceViewScreen",{paramRoom: route.params.paramRoom,
                                                                                        paramHall: route.params.paramHall,
                                                                                        paramFloor: route.params.paramFloor})}>
            <View style={{alignItems:"center",alignContent:"center",alignSelf:"center",justifyContent:"space-evenly",width:width/2, height: 100}}>
              <Text style={{fontWeight:"bold",fontSize:18,color:"#fff",textDecorationLine:"underline",marginLeft:0}}>{item.conference_name}</Text>
              <Text style={{fontWeight:"bold",fontSize:12,color:"#fff",marginLeft:0}}>Price : {item.price} $</Text>
              <Text style={{fontWeight:"bold",fontSize:12,color:"#fff",marginLeft:0}}>Start-Date : {item.start}</Text>
              <Text style={{fontWeight:"bold",fontSize:12,color:"#fff",marginLeft:0}}>End-Date : {item.end}</Text>
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
            
            <View style={{height: height/5.5,overflow:"hidden",width:width}}>
                
                <Pressable>
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <View style={{flexDirection:"row",justifyContent: 'center',marginTop:15}}>
                      <View style={{flexDirection:"row",width:width/1.2,padding:5,
                                    alignItems: 'center',justifyContent: 'space-around',borderWidth:1,borderRadius:15,backgroundColor:"#e6e6e6"}}>
                        <Text style={{fontSize:12,fontWeight:"bold"}}>Add your conference</Text>
                        <Ionicons name="add-circle-outline" size={30} color="black" style={{margin: 0}}/>
                      </View>
                    </View> 
                  </TouchableOpacity>
                </Pressable>

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
                                <Foundation style={styles.icon} name="clipboard-notes" size={30} color={conference_name <= "" ? "#666666" : "#000"} />
                                <TextInput 
                                    onChangeText={conference_name => setConference(conference_name)}
                                    keyboardType="default" 
                                    placeholderTextColor="#666666" 
                                    autoFocus
                                    autoCorrect
                                    value={conference_name}
                                    placeholder={"Conference Name"}
                                    style={{...styles.input,paddingLeft:10}} />

                            </View>
                            <View style={{...styles.viewCont,alignItems:"center"}}>
                                <Foundation style={styles.icon} name="clipboard-notes" size={30} color={price <= "" ? "#666666" : "#000"} />
                                <TextInput 
                                    onChangeText={price => setPrice(price)}
                                    keyboardType="number-pad" 
                                    value={price}
                                    placeholderTextColor="#666666"
                                    placeholder={"Conference Price"}
                                    style={{...styles.input,paddingLeft:10}} />

                            </View>
                            <View>
                            <TouchableOpacity onPress={startshowDatePicker}>
                              <View style={{...styles.viewCont,alignItems:"center"}}  >
                                <Foundation style={styles.icon} name="clipboard-notes" size={30} color={start <= "" ? "#666666" : "#000"} />
                                <Text style={{fontSize:16,fontWeight:"bold",paddingLeft:10,color: start <= "" ? "#666666" : "#000"}} >{start <= " " ? "StartDate" : start}</Text>
                              </View>
                              <DateTimePickerModal
                                isVisible={isStartDatePickerVisible}
                                mode="date"
                                onConfirm={starthandleConfirm}
                                onCancel={starthideDatePicker}
                              />
                            </TouchableOpacity>
                            </View>
                            <View>
                              <TouchableOpacity  onPress={endshowDatePicker}>
                                <View style={{...styles.viewCont,alignItems:"center"}}>
                                  <Foundation style={styles.icon} name="clipboard-notes" size={30} color={end <= "" ? "#666666" : "#000"} />
                                  <Text style={{fontSize:16,fontWeight:"bold",paddingLeft:10,color: start <= "" ? "#666666" : "#000"}} >{end <= " " ? "EndDate" : end}</Text>
                                </View>
                              </TouchableOpacity>
                              <DateTimePickerModal
                                isVisible={isEndDatePickerVisible}
                                mode="date"
                                onConfirm={endhandleConfirm}
                                onCancel={endhideDatePicker}
                              />
                            </View>
                        </View>

                          <View style={{alignSelf:"flex-end", marginTop: 20}}>
                            <TouchableOpacity style={styles.logBtn} onPress={(e) => handleSubmit(e, notes, setNotes,conference_name, setConference,
                                price,setPrice,start,setStart,end, setEnd)} >
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
              <Text style={{marginLeft:5,fontWeight:"bold",fontSize:20,color:"#000"}}>Conference List</Text>
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
        width: width/1.3,
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
