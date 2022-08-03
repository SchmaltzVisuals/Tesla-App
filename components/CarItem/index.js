import { View, Text, ImageBackground } from "react-native"
import styles from "./styles"
import StyledButton from "../StyledButton"

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $67,045</Text>
      </View>

      <StyledButton
        type="primary"
        content={"Customer Order"}
        onPress={() => {
          console.warn("custom order pressed")
        }}
      />
      <StyledButton
        type="secondary"
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Existing Inventory Pressed")
        }}
      />
    </View>
  )
}

export default CarItem
