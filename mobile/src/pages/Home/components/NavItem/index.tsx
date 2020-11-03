import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  name: string;
  text: string;
  active?: boolean;
  color?: string;
  mirrorX?: boolean;
}

const NavItem = ({ name, text, color = "#E6E7F2", active = false, mirrorX = false }:Props) => {
  return (
    <View style={styles.container}>
      <RectButton style={[styles.button, (active) && {backgroundColor: '#8E97FD'}]}>
        <MaterialIcons 
          name={name} 
          size={30} 
          color={color} 
          style={(mirrorX) && { transform: [{rotateY: '180deg'}] }}
        />
      </RectButton>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    margin: 5
  },
  button: {
    backgroundColor: "#586894",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  text: {
    marginTop: 8,
    fontSize: 15,
    textAlign: "center",
    color: "#98A1BD"
  }
})

export default NavItem
