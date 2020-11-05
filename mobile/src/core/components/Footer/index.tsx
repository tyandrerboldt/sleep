import React from 'react'
import { View } from 'react-native'
import NavItem from './components/NavItem'
import { useNavigation } from '@react-navigation/native'

const Footer = () => {
  const navigation = useNavigation()

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
        onPress={() => navigation.navigate("Category")}
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
