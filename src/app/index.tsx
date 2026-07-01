import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
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
          fontSize: 28,
          marginBottom: 20,
        }}
      >
        Mobile App
      </Text>

      <Link href="/education" style={{ color: "blue", marginBottom: 10 }}>
        Education
      </Link>

      <Link href="/contact" style={{ color: "blue" }}>
        Contact
      </Link>
    </View>
  );
}