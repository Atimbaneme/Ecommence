import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native';

export default function Welcome() {
    const image = { uri: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80" };
  return (
    
    <View style={styles.container}>

  
      <ImageBackground source={image}
        style={styles.image} >


          <View style={styles.mainText}>

          <Text style={styles.text}>Discover New Furnitures</Text>

          </View>

          <TouchableOpacity style={styles.touch}>
          <View style={styles.mainButton}>

          <Text style={styles.button}>Get Started</Text>

          </View>
          </TouchableOpacity>


      </ImageBackground>
      

        
        
      
      


      
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  
  },
  image:{
    flex:1,
    

  },
  mainText:{
    marginTop: 650,

  },
  text:{
    fontSize:60,
    color:'white',

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
    backgroundColor:'white',
    borderColor:'grey',
    
    
  },
  touch:{
    alignItems:'center',
    marginTop:20,
    

  },
 
});
