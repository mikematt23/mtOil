import { useWindowDimensions, StyleSheet } from 'react-native';


const Theme = ()=>{
    const {height, width, scale, fontScale} = useWindowDimensions();

    const styles = StyleSheet.create({
      holder:{
        height:height,
        width:width,
        flex:1,
        justifyContent:"flex-end",
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