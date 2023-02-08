import { View, Text, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile'
import { useState } from 'react';
const Stack = createNativeStackNavigator();
const Home = (props) => {
   const nav = props.navigation;
   const [name, setName] = useState("Hà Trần Ngọc Minh");
   const [age, setAge] = useState("19");
   const [address, setAddress] = useState("Phú Thọ");
   const [phone, setPhone] = useState("123456789");
   const [email, setEmail] = useState("minhhtnph27570@fpt.edu.vn");
   const update = (name, age, address, phone, email) => {
     setName(name);
     setAge(age);
     setAddress(address);
     setPhone(phone);
     setEmail(email);
   };
    return (
    <View style={{
        width: "100%",
        flex: 1,
        marginTop: 50,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      }}>
      <Image style={{ width: 80, height: 80, borderRadius: 50, margin: 5}}
            source={{ uri: "https://vcdn1-dulich.vnecdn.net/2021/07/16/3-1-1626444927.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=0nww5sftrDimoUxyn9lM5g" }}></Image>
      <Text style={{fontSize: 24,fontWeight: "600",margin: 5}}>Thông tin cá nhân</Text>
      <View style={{justifyContent: 'space-around', flexDirection: 'row', padding: 10, width: "100%"}}>
        <Button title='Profile' onPress={() => nav.navigate("Profile", {
            name: name,
            age: age,
            address: address,
            phone: phone,
            email: email,
            update: update,
          })
        }></Button>
      </View>
    </View>)
}
const App=()=> {
   return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
             <Stack.Screen
                name='Profile'component={Profile}
            />
            <Stack.Screen
                name='Home'component={Home}
            />
        </Stack.Navigator>
    </NavigationContainer>)
}
export default App;
