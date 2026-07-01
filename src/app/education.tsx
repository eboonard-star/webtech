import { Text, View } from "react-native";

export default function Education() {
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
          color: "green",
          fontSize: 28,
        }}
      >
        Education
      </Text>

      <Text>Lorem ipsum dolor sit amet adipisicing elit.</Text>
    </View>
  );
}