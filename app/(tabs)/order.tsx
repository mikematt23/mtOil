import { TextInput } from "react-native"
import Theme from "@/theme/Theme"
import themeStyle from "@/theme/themeStyle"

const Order = ()=>{
    const theme = themeStyle()
    return(
      <Theme>
          <TextInput/>
      </Theme>
    )
}

export default Order