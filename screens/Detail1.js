import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Detail1() {
    const image = { uri: "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80" };
  return (
    <View style={styles.container}>

        
        <View style={styles.header}> 
        <TouchableOpacity> 
        <AntDesign name="arrowleft" size={28} color="white" style={styles.icon1} />
        </TouchableOpacity>
            <Text style={styles.text1}>Details</Text>
            <TouchableOpacity>
            <AntDesign name="search1" size={24} color="white" style={styles.icon2} />
            </TouchableOpacity>
            <TouchableOpacity>
            <AntDesign name="shoppingcart" size={24} color="white" style={styles.icon3} />
            </TouchableOpacity>
        </View>

        
        <View style={styles.imageView}>
        <Image source={image} style={styles.image1} />
        </View>

        <Text style={styles.text2}>Hello</Text>
            
        


       
        







      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  header:{
      
      backgroundColor:'#28282B',
      paddingTop:60,
      paddingBottom:10,
      flexDirection:'row',
      alignItems:'center',
      
  },
  text1:{
      fontSize:25,
      color:'white',
      marginLeft:130,
  },
  text2:{
    fontSize:25,
    
    
},


  icon1:{
      marginLeft:10,
  },
  icon2:{
      marginLeft:95,
  },
  icon3:{
      marginLeft:25,
  },
  image1:{
      height:'58%',
      width:'58%',
      
  },
  imageView:{
      marginTop:10,
      alignItems:'center',
  },
 
});
