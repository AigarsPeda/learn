import { Image, Pressable, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { Animated } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const scaleValue = useState(new Animated.Value(1))[0];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Home</ThemedText>
        <HelloWave />
      </ThemedView>
      <Link href="/game_menu" asChild>
        <Pressable>
          <ThemedText type="link">Go to game</ThemedText>
        </Pressable>
      </Link>
      <Link
        href={{
          pathname: "/math/[id]",
          params: { id: "bacon" },
        }}
      >
        <ThemedText type="link">Go to game id: "bacon"</ThemedText>
      </Link>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
