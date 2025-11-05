import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Opps! Not Found" }} />
      <View style={styles.container}>
        <Text style={styles.text}>Not Found</Text>
        <Link href={"/"} style={styles.button}>
          <Ionicons name="arrow-back" size={20} />
          <Text>Back to Main</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#393E46",
  },
  text: {
    color: "#EEEEEE",
    fontSize: 22,
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: "#00ADB5",
    color: "#EEEEEE",
    borderRadius: 6,
  },
});
