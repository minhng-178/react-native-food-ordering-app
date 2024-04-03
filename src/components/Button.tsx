import { useRoute } from "@react-navigation/native";
import { forwardRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "@/constants/Colors";
import { useSegments } from "expo-router";

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    const segments = useSegments();

    const backgroundColor =
      segments[0] === "(admin)" ? Colors.light.tint : Colors.light.defaultColor;

    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        style={[styles.container, { backgroundColor }]}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default Button;
