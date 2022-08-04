import { View, Text, FlatList, Dimensions } from "react-native"
import React from "react"
import styles from "./styles"
import CarItem from "../CarItem"
import cars from "./cars"
const CarsList = (props) => {
  return (
    <View styles={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"start"}
        showsVerticalScrollIndicator={false}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  )
}

export default CarsList
