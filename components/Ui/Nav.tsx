import { View, StyleSheet, useWindowDimensions } from "react-native"
import { Link } from 'expo-router';

interface props{
    item:string[]
}

const Nav = ({item}:props)=>{
    console.log(item)
    const styles = useStyles()
    return (
      <View style={styles.nav}>

      </View>
    )
}

const useStyles = ()=>{
   const {height,width} = useWindowDimensions()
   const styles = StyleSheet.create({
     nav:{
        backgroundColor:"green"
     }
   })
   return styles
}

export default Nav