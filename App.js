import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.mainText}>

      <Text style={styles.text}>Discover New Furnitures</Text>

      </View>


      <TouchableOpacity style={styles.touch}>
      <View style={styles.mainButton}>

        <Text style={styles.button}>Get Started</Text>

      </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  
  },
  mainText:{
    marginTop: 620,

  },
  text:{
    fontSize:60,

  },
  button:{
    fontSize:30,
    padding:10,
    
    
  },
  mainButton:{
    
    width:200,
    borderWidth:1,
    borderRadius:20,
    alignItems:'center',
    backgroundColor:'grey',
    borderColor:'grey',
    
    
  },
  touch:{
    alignItems:'center',
    marginTop:30,

  },
 
});
