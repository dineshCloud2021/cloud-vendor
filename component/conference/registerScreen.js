import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import { Ionicons,MaterialIcons  } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const image = { uri: "https://static.turbosquid.com/Preview/2018/11/11__18_43_10/2.jpg98728108-D3B4-44F0-9992-4B3FF71B0AF0Large.jpg" };

export default function registerScreen({navigation}) {

    const [vendor_name, setName] = useState("")
    const [email, setEamil] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")

    const [hotel, setHotel] = useState([{}]);

    const [visibilityPass, setVisibilityPass] = useState(false)
    const [visibilityConPass, setVisibilityConPass] = useState(false)

    function register(params) {
        console.log({vendor_name,email,password,hotel});
        let register_data = {vendor_name,email,password,hotel}
        fetch("http://192.168.1.2:8000/vendors/",{
            method:'POST',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(register_data)
            }).then((result) => {
                result.json().then((response) => {
                    console.log("response", response)
                })
            }).
            catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                });
        }

    
  return (
    <View style={styles.container}>
        
       <ImageBackground source={image} resizeMode='cover'
            style={{width:width,height:height,opacity:.5,position:"absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0}}/>
        <View style={{position:"absolute",justifyContent:"center",alignItems:"center",width:width,height:height}}>
            
            <View>
                <Text style={styles.tittle}>Register</Text>
                <Text style={{...styles.titDes}}>Fill the below information to Register</Text>
                <View style={{...styles.viewCont}}>
                    <Ionicons style={styles.icon} name="person" size={30} color={vendor_name <= "" ? "#666666" : "#000"} />
                    <TextInput 
                        onChangeText={vendor_name => setName(vendor_name)}
                        keyboardType="default" 
                        placeholderTextColor="#666666" 
                        placeholder={"Name"}
                        style={{...styles.input,width:width/1.6}} />
                </View>
                <View style={{...styles.viewCont}}>
                    <Ionicons style={styles.icon} name="md-mail" size={30} color={email <= "" ? "#666666" : "#000"} />
                    <TextInput 
                        onChangeText={email => setEamil(email)}
                        keyboardType="email-address" 
                        autoCapitalize="none" 
                        placeholderTextColor="#666666" 
                        placeholder={"Email"}
                        style={{...styles.input,width:width/1.4}} />

                </View>
                <View style={{...styles.viewCont}}>
                    <MaterialIcons style={styles.icon} name="lock" size={30} color={password <= "" ? "#666666" : "#000"} />
                    <TextInput 
                        onChangeText={password => setPassword(password)}
                        returnKeyType='go'
                        secureTextEntry={visibilityPass == true ? false : true}
                        autoCorrect={false}
                        autoCapitalize="none" 
                        placeholderTextColor="#666666" 
                        placeholder={"Password"}
                        style={{...styles.input}} />
                        <TouchableOpacity onPress={() => {visibilityPass == true ? setVisibilityPass(false) : setVisibilityPass(true)}}>
                            <MaterialIcons style={{marginTop:3,padding:5}} 
                            name={visibilityPass == true ? "visibility" : "visibility-off"} size={25} color={password <= "" ? "#666666" : "#000"}/>
                        </TouchableOpacity>
                </View>
                <View style={{...styles.viewCont}}>
                    <MaterialIcons style={styles.icon} name="lock" size={30} color={conPassword <= "" ? "#666666" : "#000"} />
                    <TextInput 
                        onChangeText={conPassword => setConPassword(conPassword)}
                        returnKeyType='go'
                        secureTextEntry={visibilityConPass == true ? false : true}
                        autoCorrect={false}
                        autoCapitalize="none" 
                        placeholderTextColor="#666666" 
                        placeholder={"Confirm Password"}
                        style={{...styles.input}} />
                        <TouchableOpacity onPress={() => {visibilityConPass == true ? setVisibilityConPass(false) : setVisibilityConPass(true)}}>
                            <MaterialIcons style={{marginTop:3,padding:5}} 
                            name={visibilityConPass == true ? "visibility" : "visibility-off"} size={25} color={conPassword <= "" ? "#666666" : "#000"}/>
                        </TouchableOpacity>
                </View>
            </View>

            <View style={{alignSelf:"flex-end",marginRight:30, marginTop: 20}}>
                <TouchableOpacity style={styles.logBtn} onPress={register}>
                    <Text style={{color: "#fff",fontSize:15,fontWeight:"bold"}}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity  onPress={() => navigation.navigate("loginScreen")}>
                <Text style={{color: "#000",fontSize:13,fontWeight:"bold",marginTop:20}}>
                        Click to Login...
                </Text>
            </TouchableOpacity>
        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tittle: {
        fontSize: 40,
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
        width: width / 3,
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
        elevation: 5
    }

});
