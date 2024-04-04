import { Link, useSegments } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

import Colors from "@/constants/Colors";
import RemoteImage from "./RemoteImage";

import { Tables } from "@/types";
import { defaultPizzaImage } from "@/constants/Images";

type ProductListItem = {
  product: Tables<"products">;
};

const ProductListItem = ({ product }: ProductListItem) => {
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <RemoteImage
          path={product.image}
          fallback={defaultPizzaImage}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    borderRadius: 20,
    maxWidth: "50%",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
