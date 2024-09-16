import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { HelloWave } from "../../components/HelloWave";

export default function GameScreen() {
  const { goBack } = useNavigation();
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <Ionicons size={310} name="code-slash" style={styles.headerImage} />
        }
      >
        <TouchableOpacity onPress={goBack}>
          <ThemedText type="link">Back</ThemedText>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Math Id {id}</ThemedText>
          <HelloWave />
        </ThemedView>
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
