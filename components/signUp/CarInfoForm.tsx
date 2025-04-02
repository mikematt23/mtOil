import { useState } from "react"
import { TextInput} from "react-native"
import themeStyle from "@/theme/themeStyle"
import {car} from "../../assets/interfaces/signUpInterFace"
import Button from "../Ui/Button"


interface props{
  handleCarInfo:(carInfo:car)=>void
}


const CarInfoForm =({handleCarInfo}:props)=>{ 
   const theme = themeStyle()
   const [formData,seteFormData] = useState<car>({
    make:[],
    model:[]
   })
   const [make,setMake] = useState("")
   const [model,setModel] = useState("")

   function handleSubmit(){
    const update = {
    ...formData,
    make:[...formData.make,make],
    model:[...formData.model,model]
    }
    seteFormData(update)
    handleCarInfo(update)
   }

   async function addAnotherCar(){
    seteFormData((prev)=>({
      ...prev,
      make:[...prev.make,make],
      model:[...prev.model,model]
    }))
    setMake('')
    setModel('')
   }

   return(
    <>
      <TextInput
        style={theme.input}
        placeholder="Please Enter Make" 
        value={make}
        onChangeText={setMake}
      />
      <TextInput
        style={theme.input}
        placeholder="Please Enter Make" 
        value={model}
        onChangeText={setModel}
      />
      <Button title="Submit" onPress={handleSubmit}/>
      <Button title="Add Another Car" onPress={addAnotherCar}/>
    </>
   )
}

export default CarInfoForm