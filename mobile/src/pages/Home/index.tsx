import React from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import NavCategories from './components/NavCategories'
import Header from '../../core/components/Header'
import RoudedBox from '../../core/components/RoudedBox'
import RoundedItem from '../../core/components/RoundedItem'
import Footer from '../../core/components/Footer'

const Home = () => {
  return (
    <View style={styles.container}>      
      <ScrollView>
        <Header
          title="Sleep Stories"
          subtitle="Soothing bedtime stories to help you fall into a deep and natural sleep"
        />
        <NavCategories />
        <View style={styles.content}>
          <RoudedBox 
            source={require('../../core/assets/samples/music-the-ocean-moon.png')}
            title="The Ocean Moon"
            subtitle="Non-stop 8- hour mixes of our most popular sleep audio"
            padding={5}
            styles={{
              marginBottom: 5
            }}
          /> 
          <RoundedItem 
            source={require('../../core/assets/samples/music-night-island.png')} 
            title="Night Island"
            subtitle="45 min - Sleep Music"
            padding={5}            
          />                   
          <RoundedItem 
            source={require('../../core/assets/samples/music-sweet-sleep.png')} 
            title="Sweet Sleep"
            subtitle="45 min - Sleep Music"
            padding={5}            
          />                   
          <RoundedItem 
            source={require('../../core/assets/samples/music-good-night.png')} 
            title="Good Night"
            subtitle="45 min - Sleep Music"
            padding={5}            
          />                   
          <RoundedItem 
            source={require('../../core/assets/samples/music-sweet-sleep.png')} 
            title="Sweet Sleep"
            subtitle="45 min - Sleep Music"
            padding={5}            
          />                   
        </View>     
      </ScrollView>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#03174C',
    alignItems: "center",    
  },
  content: {
    width:"100%",
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  }
})

export default Home
