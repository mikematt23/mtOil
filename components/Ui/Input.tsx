import { useRef, forwardRef, useState } from "react"
import { TextInput, View, Text, TextInputProps } from "react-native"

interface props extends TextInputProps{
    title:string,
    placeHolder:string,
}

const Input = forwardRef<TextInput, props>(({title,placeHolder, ...rest}:props,ref)=>{
    return(
        <View>
          <Text>{title}</Text> 
          <TextInput ref={ref} placeholder={placeHolder}{...rest}/>
        </View>
    )
})


export default Input