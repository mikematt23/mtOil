import { useState } from "react";
import { TextInput } from "react-native"
import {user} from "../../assets/interfaces/signUpInterFace"
import themeStyle from "@/theme/themeStyle"
import Button from "../Ui/Button";


interface props {
    handleUserInfo: (userInfo: user) => void;
    handleAddressForm : ()=> void
}

const UserInfoForm = ({handleUserInfo, handleAddressForm}:props)=>{
  const theme = themeStyle()
    
  const [formData, setFormData] = useState<user>({
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  function handleChange (key: keyof user, value: string){
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  function handleSubmit(){
    handleUserInfo(formData)
    handleAddressForm()
  }
  return(
    <>
      <TextInput 
        style={theme.input} 
        placeholder="Please Enter Your Email"
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
      />
      <TextInput 
        style={theme.input} 
        placeholder="Please Enter Your Password"
        value={formData.password}
        onChangeText={(text) => handleChange('password', text)}
      />
      <TextInput 
        style={theme.input} 
        placeholder="Please Enter Your Confirm Your Password"
        value={formData.confirmPassword}
        onChangeText={(text) => handleChange('confirmPassword', text)}
      />
      <TextInput 
        style={theme.input} 
        placeholder="Please Enter Your Phone Number"
        value={formData.phoneNumber}
        onChangeText={(text) => handleChange('phoneNumber', text)}
       />
       <Button title="Next" onPress={handleSubmit}/>
    </>
  )
}


export default UserInfoForm