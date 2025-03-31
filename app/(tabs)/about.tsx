import { Text, ScrollView, ImageBackground } from "react-native"
import Card from "@/components/Ui/Card"
import Theme from "@/theme/Theme"

const About = ()=>{
    const theme = Theme()
    return(
        <ScrollView style={theme.holder}>
          <ImageBackground
            source={require('../../assets/images/redLogo.png')}
            style = {theme.img}
            resizeMode="contain"
          >
            <Card>
              <Text>About</Text>
            </Card>
          </ImageBackground>
        </ScrollView>
    )
}


export default About