import Card from "@/components/Ui/Card";
import Input from "@/components/Ui/Input";
import Nav from "@/components/Ui/Nav";
import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import { Link } from 'expo-router';




export default function Index() {
  return (
    <View style={styles.holder}>
      <Card>
        <Input title="UserName" placeHolder="Enter User Name"/>
        <Input title="Password" placeHolder="Enter Password"/>
      </Card>
      <Nav item = {["profile"]}/>
      <Link href="/profile">About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  holder:{
    paddingTop: "10%",
    display:"flex",
    alignItems:"center"
  }
})


