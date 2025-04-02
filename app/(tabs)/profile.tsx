import { ImageBackground, ScrollView, Text  } from "react-native"
import Card from "@/components/Ui/Card"
import Theme from "@/theme/Theme";
import Input from "@/components/Ui/Input";
import { Redirect } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/Store';
import themeStyle from "@/theme/themeStyle";


    
const Profile = ()=>{
  const isLoggedin = useSelector((state: RootState) => state.user.isLoggedIn);
  console.log(isLoggedin)
 

    const theme = themeStyle()
    return(
      <Theme>
        <Text>Profile</Text>
        <Input title="UserName" placeHolder="Enter User Name"/>
        <Input title="Password" placeHolder="Enter Password"/>
      </Theme>
    )
}


export default Profile