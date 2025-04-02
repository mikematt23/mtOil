import { StyleSheet, useWindowDimensions } from "react-native";

const themeStyle = ()=>{
  const {height, width, scale, fontScale} = useWindowDimensions();
  
  const style = StyleSheet.create({
    input:{
        backgroundColor:"rgba(255, 252, 251, 0.84)",
        width: width/1.5,
        borderRadius:6,
        marginTop:height/40,
        marginBottom:height/40
    }
  }) 

  return style 
}

export default themeStyle

