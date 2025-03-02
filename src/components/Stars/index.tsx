import { View } from "react-native";

import { styles } from "./styles";

import TrophySVG from "../../assets/trophy.svg";

export function Stars() {
  return (
    <View style={styles.container}>
      <TrophySVG />
    </View>
  );
}
