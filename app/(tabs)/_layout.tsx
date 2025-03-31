import { Tabs } from 'expo-router';
import { useSelector} from 'react-redux';
import { RootState} from "@/store/Store";

export default function TabLayout() {
  const isLoggedin = useSelector((state:RootState)=> state.user.isLoggedIn)


  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'red' }}>
      <Tabs.Screen
        name="index"
        options={{headerTitle: "MT Oil", headerStyle:{backgroundColor:"rgba(235, 37, 7, 0.84)"},headerTintColor: "white"}}
        redirect={isLoggedin}
      />
      <Tabs.Screen
        name='about'
        options={{headerTitle: "MT Oil", headerStyle:{backgroundColor:"rgba(235, 37, 7, 0.84)"},headerTintColor: "white"}}
        redirect={isLoggedin}
      />
      <Tabs.Screen
        name="profile"
        options={{headerTitle: "MT Oil", headerStyle:{backgroundColor:"rgba(235, 37, 7, 0.84)"},headerTintColor: "white"}}
        redirect={!isLoggedin}
      />
    </Tabs>
  );
}