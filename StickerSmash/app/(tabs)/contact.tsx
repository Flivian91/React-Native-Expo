import {
  ActivityIndicator,
  Button,
  StyleSheet,
  View,
} from "react-native";

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator hidesWhenStopped />
      <Button
        onPress={() => alert("Hello i was pressed")}
        title="Hello"
        accessibilityLabel="Basice button of hello world"
        color={"#841584"}
      />
    </View>
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
  },
});
