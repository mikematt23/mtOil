import { useWindowDimensions, StyleSheet } from 'react-native';


const Theme = ()=>{
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
      }
    })
    return styles
}

export default Theme