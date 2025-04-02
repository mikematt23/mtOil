import Card from "@/components/Ui/Card";
import { useRouter } from 'expo-router';
import Theme from "@/theme/Theme";
import { useRef, useState } from "react";
import {ImageBackground ,ScrollView, Text, TextInput } from "react-native";
import Button from "@/components/Ui/Button";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "@/store/Store";
import { setLogIn } from "@/store/reducers/USerReducer";
import themeStyle from "@/theme/themeStyle";





export default function Index() {
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  
  const theme = themeStyle()
  const router = useRouter()

  const isLoggedIn = useSelector((state:RootState)=> state.user.isLoggedIn)
  const dispatch = useDispatch<AppDispatch>()

  const handleLoginPress = async ()=>{
      try{
        const response = await fetch("http://192.168.1.246:3000/login",{
          headers:{
            "Content-type":"application/json"
          },
          method:"POST",
          body:JSON.stringify({email:email, password:password})
        })
        const data = await response.json()
        console.log("here",data)
        if(data.message === "Match"){
           dispatch(setLogIn())
           console.log(isLoggedIn)
           router.replace("/profile")
        }else if(data.message === "No Match" ){
          setMessage("Password is incorrect")
        }else{
          setMessage("No user, Please Sign Up")
        }
        
        return data
      }catch(error){
        console.log('error', error)
        return error
      }
  }
  
  return (
     <Theme>
        <Text>{message}</Text>
        <Text>Please Login To Continue</Text>
        <TextInput style={theme.input} placeholder="Enter Your Email" value={email} onChangeText={setemail}/>
        <TextInput style={theme.input}  secureTextEntry={true} placeholder="Enter Your Password" value={password} onChangeText={setPassword}/>
        <Button  title="Login" onPress={handleLoginPress}/>
     </Theme>
  );
}

