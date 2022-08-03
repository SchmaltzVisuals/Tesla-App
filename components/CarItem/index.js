import { View, Text, ImageBackground } from "react-native"
import styles from "./styles"

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
    </View>
  )
}

export default CarItem
