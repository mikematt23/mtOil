import { View, Text, StyleSheet, useWindowDimensions } from "react-native"
import { ReactNode } from "react"




interface props{
    children: ReactNode;
}

const Card: React.FC<props> = ({children})=>{
  const styles = useStyle()
   return(
     <View style = {styles.card}>
       <Text>Card</Text>
       {children}
     </View>)
}

const useStyle = ()=>{
  const {height, width, scale, fontScale} = useWindowDimensions();
  const styles = StyleSheet.create({
    card:{
      height: height/4,
      width: width/1.05,
      borderRadius:4,
      backgroundColor: "red",
      display:"flex",
      justifyContent:'center',
      alignItems:"center"
    }
  })
  return styles
}



export default Card