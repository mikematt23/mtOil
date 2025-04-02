import { Pressable, Text, StyleSheet, useWindowDimensions } from "react-native";

interface props{
    title:string,
    onPress: ()=> void
}

const Button = ({title, onPress}:props)=>{
  const styles = useStyles() 
  return (
    <Pressable style={styles.button} onPress={onPress}>
        <Text>{title}</Text>
    </Pressable>
  )
}

const useStyles = ()=>{
    const {height, width, scale, fontScale} = useWindowDimensions();
    const styles = StyleSheet.create({
      button:{
        width: width/1.5,
        borderWidth:1,
        borderRadius:7,
        borderColor:"black",
        backgroundColor: "rgba(211, 32, 4, 0.89)",
        padding:height/60,
        display:"flex",
        alignItems:'center'
      }
    })
    return styles
}   


export default Button