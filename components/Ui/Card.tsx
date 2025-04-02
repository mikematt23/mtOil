import { View, Text, StyleSheet, useWindowDimensions,KeyboardAvoidingView } from "react-native"
import { ReactNode } from "react"




interface props{
    children: ReactNode;
}

const Card: React.FC<props> = ({children})=>{
  const styles = useStyle()
   return(
     <View  style = {styles.card}>
       {children}
     </View>)
}

const useStyle = ()=>{
  const {height, width, scale, fontScale} = useWindowDimensions();
  const styles = StyleSheet.create({
    card:{
      height: height/1.5,
      width: width/1.05,
      borderRadius:4,
      marginTop:height/11,
      padding:height/10,
      backgroundColor: "rgba(235, 37, 7, 0.76)",
      display:"flex",
      alignItems:"center"
    }
  })
  return styles
}



export default Card