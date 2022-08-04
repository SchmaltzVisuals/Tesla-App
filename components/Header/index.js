import { View, Image } from "react-native"
import React from "react"
import styles from "./styles"
import logo from "../../assets/logo.png"
import icon from "../../assets/menu.png"
const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Image style={styles.menu} source={icon} />
    </View>
  )
}

export default Header
