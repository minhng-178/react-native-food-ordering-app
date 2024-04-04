import Button from "@/components/Button";

import { supabase } from "@/libs/supabase";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        text="Sign out"
        onPress={async () => await supabase.auth.signOut()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
