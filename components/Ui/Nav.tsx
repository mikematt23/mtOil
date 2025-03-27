import { View, Text, StyleSheet, useWindowDimensions } from "react-native"
import { Href, Link } from 'expo-router';

interface props{
    items:string[]
}

const Nav = ({items}:props)=>{
    const styles = useStyles()
    return (
      <View style={styles.nav}>
          {items.map((item,index)=>{
            let link = "/"+item
            if(item === "index"){
              link = "/"
            }
             return <Link key={index} style={styles.link} href={link as Href} >{item.toUpperCase()}</Link>
          })}
      </View>
    )
}

const useStyles = ()=>{
   const {height,width} = useWindowDimensions()
   const styles = StyleSheet.create({
     nav:{
        backgroundColor:"black",
        borderWidth:1,
        borderColor:"red",
        width:width,
        borderRadius:4,
        padding:width/20,
        position:"absolute",
        bottom:0
     },
     link:{
      color:"white"
     }
   })
   return styles
}

export default Nav