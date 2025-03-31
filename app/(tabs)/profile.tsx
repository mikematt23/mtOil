import { ImageBackground, ScrollView  } from "react-native"
import Card from "@/components/Ui/Card"
import Theme from "@/theme/Theme";
import Input from "@/components/Ui/Input";
import { Redirect } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/Store';


    
const Profile = ()=>{
  const isLoggedin = useSelector((state: RootState) => state.user.isLoggedIn);
  console.log(isLoggedin)
 

    const theme = Theme()
    return(
        <ScrollView style={theme.holder}>
        <ImageBackground
         source={require('../../assets/images/redLogo.png')}
         style = {theme.img}
         resizeMode="contain"
        >
          <Card>
            <Input title="UserName" placeHolder="Enter User Name"/>
            <Input title="Password" placeHolder="Enter Password"/>
          </Card>
        </ImageBackground>
      </ScrollView>
    )
}


export default Profile