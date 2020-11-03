import React from 'react'
import NavItem from '../NavItem'
import { View } from 'react-native'

const NavCategories = () => {
  return (
    <View style={{
      flexDirection:"row", 
      justifyContent: "space-between",
      marginTop: 15
    }}>
      <NavItem 
        active={true}
        name="toys"
        text="All"
      />
      <NavItem 
        name="favorite"
        text="My"
      />
      <NavItem 
        name="sentiment-very-dissatisfied"
        text="Anxious"
      />
      <NavItem 
        name="brightness-3"
        mirrorX={true}
        text="Sleep"
      />
      <NavItem 
        name="child-care"
        text="Kids"
      />
    </View>
  )
}

export default NavCategories
