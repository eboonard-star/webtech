import { Text, View } from "react-native";

export default function Contact() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "red",
          fontSize: 28,
        }}
      >
        Contact Me
      </Text>

      <Text>Lorem ipsum dolor sit amet adipisicing elit.</Text>
    </View>
  );
}