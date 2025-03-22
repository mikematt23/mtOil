import Card from "@/components/Ui/Card";
import { Text, View, StyleSheet } from "react-native";


export default function Index() {
  return (
    <View style={styles.holder}>
      <Card>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  holder:{
    paddingTop: "10%",
    height: "80%"
  }
})


