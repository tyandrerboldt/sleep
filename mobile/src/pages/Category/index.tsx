import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ReturnableHeader from '../../core/components/ReturnableHeader'
import RoundedItem from '../../core/components/RoundedItem'
import Footer from '../../core/components/Footer'

const Category = () => {
  return (
    <View style={styles.container}>
      <ReturnableHeader title="Sleep Music" />
      <ScrollView>
        <View style={styles.content}>
          {
            Array(6).fill(1).map((_, i) => (
              <RoundedItem 
                key={i}
                source={require('../../core/assets/samples/music-night-island.png')} 
                title="Night Island"
                subtitle="45 min - Sleep Music"
                padding={5}            
              /> 
            ))
          }
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
  },
  header: {

  },
  title: {

  },
  button: {

  }
})

export default Category
