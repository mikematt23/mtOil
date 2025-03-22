import { View, Text, StyleSheet } from "react-native"
import { ReactNode } from "react"

interface props{
    children: ReactNode;
}

const Card: React.FC<props> = ({children})=>{
   return(
     <View style={styles.Card}>
       <Text>Card</Text>
       {children}
     </View>)
}

const styles = StyleSheet.create({
    Card:{
     backgroundColor:"red",
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     height: 200
    }
 })

export default Card