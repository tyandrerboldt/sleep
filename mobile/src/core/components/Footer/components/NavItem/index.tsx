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
  onPress?: () => {} | void;
}

const NavItem = ({ onPress, name, text, color = "#98A1BD", active = false, mirrorX = false }:Props) => {
  
  return (
    <View style={styles.container}>
      <RectButton onPress={onPress} style={[styles.button, (active) && {backgroundColor: '#8E97FD'}]}>
        <MaterialIcons 
          name={name} 
          size={25} 
          color={(active) ? '#E6E7F2' : color} 
          style={(mirrorX) && { transform: [{rotateY: '180deg'}] }}
        />
      </RectButton>
      <Text style={[styles.text, (active) && {color: '#E6E7F2'}]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {    
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 15,
    justifyContent: "center",
    width: 60,
    margin: 5
  },
  button: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 5,
    color: "#98A1BD"
  }
})

export default NavItem
