import { Text,View, useWindowDimensions, StyleSheet } from "react-native"
import Card from "@/components/Ui/Card"

const Profile = ()=>{
    const styles = useStyle()
    return(
        <View style = {styles.container}>
          <Card>
            <Text>Profile</Text>
          </Card>
       </View>
    )
}

const useStyle = ()=>{
    const {height,width} = useWindowDimensions()
    const styles = StyleSheet.create({
        container:{
            paddingTop: height/25,
            display:"flex",
            alignItems:"center"
        }
    })
    return styles
}


export default Profile