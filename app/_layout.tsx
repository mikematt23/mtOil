import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{headerTitle: "Mt Oil"}}
      />
         <Stack.Screen
        name="profile"
        options={{headerTitle: "Mt Oil",headerBackVisible: false}}
      />
    </Stack>
  );
}
