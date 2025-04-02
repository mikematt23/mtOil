//hooks
import { useState } from "react"
//components
import { TextInput} from "react-native"
import Button from "../Ui/Button"
//interface
import {address} from "../../assets/interfaces/signUpInterFace"
//style
import themeStyle from "@/theme/themeStyle"


interface props{
   handleCarForm: ()=> void,
   handleAddressInfo: (addressInfo:address)=> void
}

const AddressInfoForm = ({handleCarForm, handleAddressInfo}:props)=>{
    const theme = themeStyle()
    const [formData,setFormData] = useState<address>({
      address:"",
      state:"",
      zipCode:""
    })

    function handleChange(key: keyof address, value:string){
        setFormData((prev)=>({
            ...prev,
            [key]:value
        }))
    }

    function handleNext(){
      handleCarForm()
    }
    return (
        <>
          <TextInput 
            style={theme.input} 
            placeholder="Please Enter Your Address"
            value={formData.address}
            onChangeText={(text)=> handleChange("address",text)}
          />
          <TextInput 
            style={theme.input} 
            placeholder="Please Enter Your State"
            value={formData.state}
            onChangeText={(text)=> handleChange("state",text)}
          />
          <TextInput 
            style={theme.input} 
            placeholder="Please Enter Your Zip code"
            value={formData.zipCode}
            onChangeText={(text)=> handleChange("zipCode",text) }
          />
          <Button title="Next" onPress={handleNext}/>
        </>
    )
}


export default AddressInfoForm