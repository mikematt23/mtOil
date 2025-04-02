import { Tabs } from 'expo-router';
import { useSelector} from 'react-redux';
import { RootState} from "@/store/Store";

export default function TabLayout() {
  const isLoggedin = useSelector((state:RootState)=> state.user.isLoggedIn)


  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'red' }}>
      <Tabs.Screen
        name="index"
        options={{ title:"Login",headerTitle: "MT Oil", headerStyle:{backgroundColor:"rgba(235, 37, 7, 0.84)"},headerTintColor: "white"}}
        redirect={isLoggedin}
      />
      <Tabs.Screen
        name='signup'
        options={{title:"Sign up",headerTitle: "MT Oil", headerStyle:{backgroundColor:"rgba(235, 37, 7, 0.84)"},headerTintColor: "white"}}
        redirect={isLoggedin}
      />
      <Tabs.Screen
        name="profile"
        options={{title:"Profile",headerTitle: "MT Oil", headerStyle:{backgroundColor:"rgba(235, 37, 7, 0.84)"},headerTintColor: "white"}}
        redirect={!isLoggedin}
      />
      <Tabs.Screen
        name="order"
        options={{title:"Order",headerTitle: "MT Oil", headerStyle:{backgroundColor:"rgba(235, 37, 7, 0.84)"},headerTintColor: "white"}}
        redirect={!isLoggedin}
      />
      <Tabs.Screen
        name="history"
        options={{title:"History",headerTitle: "MT Oil", headerStyle:{backgroundColor:"rgba(235, 37, 7, 0.84)"},headerTintColor: "white"}}
        redirect={!isLoggedin}
      />
    </Tabs>
  );
}