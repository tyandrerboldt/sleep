import React from 'react'
import { View } from 'react-native'
import NavItem from './components/NavItem'

const Footer = () => {
  return (
    <View style={{
      flexDirection:"row", 
      justifyContent: "space-between"      
    }}>
      <NavItem 
        name="home"
        text="Home"
        />
      <NavItem 
        name="brightness-3"
        active={true}
        mirrorX={true}
        text="Sleep"
      />
      <NavItem 
        name="accessibility"
        text="Meditate"
      />
      <NavItem 
        name="audiotrack"
        text="Music"
      />
      <NavItem 
        name="person"
        text="Tyandrer"
      />
    </View>
  )
}

export default Footer
