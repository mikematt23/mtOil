import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{headerTitle: "MT Oil",headerBackVisible: false, headerStyle:{backgroundColor:"rgba(235, 37, 7, 0.84)"},headerTintColor: "white"}}
      />
         <Stack.Screen
        name="profile"
        options={{headerTitle: "MT Oil",headerBackVisible: false, headerStyle:{backgroundColor:"rgba(235, 37, 7, 0.84)"},headerTintColor: "white"}}
      />
    </Stack>
  );
}
