import { Text,View, useWindowDimensions, StyleSheet,ImageBackground  } from "react-native"
import Card from "@/components/Ui/Card"
import Nav from "@/components/Ui/Nav"
import Theme from "@/theme/Theme";
import Input from "@/components/Ui/Input";
import { Link } from "expo-router"
    

const Profile = ()=>{
    const styles = useStyle()
    const theme = Theme()
    return(
        <View style={theme.holder}>
        <ImageBackground
         source={require('../assets/images/redLogo.png')}
         style = {theme.img}
         resizeMode="contain"
        >
          <Card>
            <Text>Profle</Text>
            <Input title="UserName" placeHolder="Enter User Name"/>
            <Input title="Password" placeHolder="Enter Password"/>
          </Card>
          <Nav items = {["index"]}/>
        </ImageBackground>
      </View>
    )
}

const useStyle = ()=>{
    const {height,width} = useWindowDimensions()
    const styles = StyleSheet.create({
        container:{
            paddingTop: height/25,
            display:"flex",
            alignItems:"center"
        }
    })
    return styles
}


export default Profile