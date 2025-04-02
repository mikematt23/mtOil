import { useWindowDimensions, StyleSheet } from 'react-native';
import {ImageBackground ,ScrollView, Text, TextInput } from "react-native";
import { ReactNode } from "react"
import Card from "@/components/Ui/Card";

interface props{
  children: ReactNode;
}

const Theme : React.FC<props> = ({children})=>{
  const style = useStyle()
  return(
    <ScrollView style={style.holder} contentContainerStyle={{ justifyContent: "flex-end"}}>
    <ImageBackground
     source={require('../assets/images/redLogo.png')}
     style = {style.img}
     resizeMode="contain"
    >
      <Card>
        {children}
      </Card>
    </ImageBackground>
  </ScrollView>
  )
}


const useStyle = ()=>{
    const {height, width, scale, fontScale} = useWindowDimensions();

    const styles = StyleSheet.create({
      holder:{
        height:"100%",
        width:width,
        flex:1,
        backgroundColor:"rgb(27, 17, 15)"
      },
   
      img:{
        height:height,
        width:width,
        display:"flex",
        alignItems:"center",
        objectFit:"cover"
      },
      input:{
        backgroundColor:"rgba(255, 252, 251, 0.84)",
        width: width/1.5,
        borderRadius:6,
        marginTop:height/40,
        marginBottom:height/40
      }
    })
    return styles
}

export default Theme