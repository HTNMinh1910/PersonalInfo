import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, Modal, TextInput } from 'react-native';
import {useState} from 'react';
import Home from './App'
export default function App(props) {
   const {route} = props;
   const nav = props.navigation;
   const name = route.params.name;
   const age = route.params.age;
   const address = route.params.address;
   const phone = route.params.phone;
   const email = route.params.email;
   const [show, setShow] = useState(false);
   const [nameEdit, setNameEdit] = useState("");
   const [ageEdit, setAgeEdit] = useState("");
   const [addressEdit, setAddressEdit] = useState("");
   const [phoneEdit, setPhoneEdit] = useState("");
   const [emailEdit, setEmailEdit] = useState("");

   const ShowData = (label, value) => (label + ': ' + value);

   const onClose = () => {
      setShow(false);
      setNameEdit("");
      setAgeEdit("");
      setAddressEdit("");
      setPhoneEdit("");
      setEmailEdit("");
    };
    const onclose = () => {
      onClose();
      nav.navigate("Home");
    }
    const onSave = () => {
      name: nameEdit;

      return onClose();
    };
    const onEdit = () => {
      setShow(true);
      setNameEdit(name);
      setAgeEdit(age);
      setAddressEdit(address);   
      setPhoneEdit(phone);   
      setEmailEdit(email);   
    };
  return (
    <View style={styles.container}>
      <StatusBar translucent={false}/>
      {show ? null:<Text style={styles.button} onPress={() => onEdit()}>Edit</Text>}
        <Modal visible={show} animationType={"slide"}>
          <View style={{alignSelf: "center", marginTop: 150}}>
          <TextInput placeholder="Name" onChangeText={(text) => setNameEdit(text)} value={nameEdit} style={styles.input}/>
          <TextInput placeholder="Age" onChangeText={(text) => setAgeEdit(text)} value={ageEdit} style={styles.input}/>
          <TextInput placeholder="Address" onChangeText={(text) => setAddressEdit(text)} value={addressEdit} style={styles.input}/>
          <TextInput placeholder="Phone" onChangeText={(text) => setPhoneEdit(text)} value={phoneEdit} style={styles.input}/>
          <TextInput placeholder="Email" onChangeText={(text) => setEmailEdit(text)} value={emailEdit} style={styles.input}/>
          <View style={{margin: 10, flexDirection: "row", justifyContent: "space-around", width: "100%"}}>
            <Text style={styles.btnDialog} title="Cancel" onPress={() => onclose()}>Cancel</Text>
            <Text style={styles.btnDialog} title="Save" onPress={() => onSave()}>Save</Text>
          </View>
        </View>
        </Modal>
      <Image style={{ width: 80, height: 80, borderRadius: 50, margin: 5}}
            source={{ uri: "https://vcdn1-dulich.vnecdn.net/2021/07/16/3-1-1626444927.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=0nww5sftrDimoUxyn9lM5g" }}></Image>
      <Text style={styles.text}>{ShowData('Name',name)}</Text>
      <Text style={styles.text}>{ShowData('Age',age)}</Text>
      <Text style={styles.text}>{ShowData('Address',address)}</Text>
      <Text style={styles.text}>{ShowData('Phone',phone)}</Text>
      <Text style={styles.text}>{ShowData('Email',email)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    height: "50%",
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: "800",
    margin: 5
   },
   button: {
      backgroundColor: "#71EBEF", 
      borderRadius: 10, 
      alignSelf: 'flex-end', 
      fontSize: 14,
      color: "#fff",
      fontWeight: "900",
      paddingLeft:15, paddingRight:15, paddingTop:3,paddingBottom:3, 
      marginRight:10,
   },
   input: {
      borderRadius: 5, 
      borderWidth: 1, 
      width: 300, 
      alignSelf: "center", 
      padding: 10, 
      marginTop: 10
   },
   btnDialog: {marginLeft: 50, backgroundColor: "red", borderRadius:5, borderWidth: 1, padding: 5},
});