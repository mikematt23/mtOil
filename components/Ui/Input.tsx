import { TextInput, View, Text } from "react-native"

interface props{
    title:string,
    placeHolder:string,
}

const Input = ({title,placeHolder}:props)=>{
    return(
        <View>
          <Text>{title}</Text> 
          <TextInput placeholder={placeHolder}/>
        </View>
    )
}


export default Input