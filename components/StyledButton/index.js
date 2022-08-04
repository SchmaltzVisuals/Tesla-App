import { View, Text, Pressable } from "react-native"
import React from "react"
import styles from "./styles.js"

const StyledButton = (props) => {
  const { type, content, onPress } = props
  const backgroundColor =
    type === "primary" ? "#171A20CC" : "#FFFFFFA6"
  const textColor = type === "primary" ? "#FFFFFF" : "#171a20"
  console.warn(type)
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>
          {content}
        </Text>
      </Pressable>
    </View>
  )
}

export default StyledButton
