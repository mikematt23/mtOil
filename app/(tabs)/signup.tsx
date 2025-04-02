import { useState } from "react"
import { TextInput, Text} from "react-native"
import Theme from "@/theme/Theme"
import UserInfoForm from "@/components/signUp/UserInfoForm"
import AddressInfoForm from "@/components/signUp/AddressInfoForm"
import CarInfoForm from "@/components/signUp/CarInfoForm"
import themeStyle from "@/theme/themeStyle"
import {user,address,car} from "../../assets/interfaces/signUpInterFace"
import { useRouter } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "@/store/Store";
import { setLogIn } from "@/store/reducers/USerReducer";


const SignUp = ()=>{
   const dispatch = useDispatch<AppDispatch>()
   const router = useRouter()
   //UI state
    const [eneteredUserInfo, setEnteredUserInfo] = useState(false)
    const [enteredAddress,setEnteredAddress] = useState(false)
    // data state
    const [user, setUser] = useState<user>({
      email:"",
      password:"",
      confirmPassword:'',
      phoneNumber:""
    })

    const [addressInfo,setAddressInfo] = useState<address>({
      address:"",
      state:"",
      zipCode:"",
    })

    const [car,setCar] = useState<car>({
      make:[""],
      model:[""]
    })
    // handles UI
    function handleAddressform(){
      setEnteredUserInfo(true)
    }

    function handleCarForm(){
      setEnteredAddress(true)
    }
    // handles data
    function handleUserInfo (userInfo:user){
       setUser(userInfo)
    }
    function handleAddressInfo(addressInfo:address){
      setAddressInfo(addressInfo)
    }
    async function handleCarInfo(carInfo:car){
      setCar(carInfo)
      try{
        const response = await fetch("http://192.168.1.246:3000/login",{
          headers:{
            "Content-type":"application/json"
          },
          method:"POST",
          body: JSON.stringify({
            email:user.email,
            password:user.password,
            address: addressInfo.address,
            state:addressInfo.state,
            zipCode: addressInfo.zipCode,
            phoneNumber: user.phoneNumber
          })
        })
        const data = await response.json()
        if(data.message === "Signed Up"){
           dispatch(setLogIn())
           router.replace("/profile")
        }
      }catch(error){

      }
    }

    return(
      <Theme>
        <Text>Please Fill Out the Form To Continue</Text>
        {!eneteredUserInfo && <UserInfoForm handleAddressForm={handleAddressform} handleUserInfo={handleUserInfo}/>}
        {eneteredUserInfo&& !enteredAddress && <AddressInfoForm handleCarForm={handleCarForm} handleAddressInfo={handleAddressInfo}/>}
        {enteredAddress && <CarInfoForm handleCarInfo={handleCarInfo}/>}
      </Theme>
    )
}

export default SignUp