import Card from "@/components/Ui/Card";

import Theme from "@/theme/Theme";
import { useRef, useState } from "react";
import {ImageBackground ,ScrollView, Text, Button, TextInput } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "@/store/Store";





export default function Index() {
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  const theme = Theme()

  const handleLoginPress = ()=>{
      console.log("Email entered:", email, password); // Get the value
  }
  
  return (
    <ScrollView style={theme.holder} contentContainerStyle={{ justifyContent: "flex-end"}}>
      <ImageBackground
       source={require('../../assets/images/redLogo.png')}
       style = {theme.img}
       resizeMode="contain"
      >
        <Card>
          <Text>index</Text>
          <TextInput placeholder="Enter Your Email" value={email} onChangeText={setemail}/>
          <TextInput secureTextEntry={true} placeholder="Enter Your Password" value={password} onChangeText={setPassword}/>
          <Button title="Press Me" onPress={handleLoginPress}/>
        </Card>
      </ImageBackground>
    </ScrollView>
  );
}




