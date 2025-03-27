import Card from "@/components/Ui/Card";
import Input from "@/components/Ui/Input";
import Nav from "@/components/Ui/Nav";
import Theme from "@/theme/Theme";
import { Text, View, StyleSheet,ImageBackground ,useWindowDimensions } from "react-native";
import { Link } from 'expo-router';




export default function Index() {
  const theme = Theme()
  return (
    <View style={theme.holder}>
      <ImageBackground
       source={require('../assets/images/redLogo.png')}
       style = {theme.img}
       resizeMode="contain"
      >
        <Card>
          <Input title="UserName" placeHolder="Enter User Name"/>
          <Input title="Password" placeHolder="Enter Password"/>
        </Card>
        <Nav items = {["profile"]}/>
      </ImageBackground>
    </View>
  );
}




