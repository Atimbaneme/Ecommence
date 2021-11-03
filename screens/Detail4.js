import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Account() {
  return (
    <View style={styles.container}>
    <View style={styles.account}>
        
        <View style={styles.account1}>
            <Text style={styles.text1}>Account</Text>
       </View>
       <View style={styles.search}>
       <AntDesign name="search1" size={20} color="white" />
       </View>
       <View style={styles.cart}>
       <AntDesign name="shoppingcart" size={20} color="white" />
       </View>
      

    </View>
    <View style={styles.second}>
    <View >
        <Text style={styles.text2}>
            Welcome
        </Text>
        <Text style={styles.text3}>
            Enter your account
        </Text>
    </View>
    <TouchableOpacity style={styles.touch}>
        <View style={styles.mainButton}>

            <Text style={styles.button}>Login/Sign in</Text>

        </View>
        </TouchableOpacity>

    </View>   
        
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  account:{
    padding:37,
    alignItems:'center',
    backgroundColor:'#343434',
    flexDirection:'row',
    paddingLeft:160,
    paddingTop:40,
    
  },
  second:{
    padding:10,
    backgroundColor:'#353935',
    flexDirection:'row',
   
    
  },
  text1:{
    fontSize:25,
    color:'white',
  },
  text2:{
    fontSize:18,
    color:'white',
    
    
  },
  text3:{
    color:'white',
    paddingTop:5,
    
  },
  search:{
      paddingLeft:90,
  },
  cart:{
    paddingLeft:25,
},
mainButton:{
    marginLeft:180,
    borderWidth:1,
    width:105,
    borderRadius:10,
    backgroundColor:'orange',
    borderColor: 'orange',
    
},
button:{
    color:'white',
    fontSize:16,
    padding:8,
    
    
    
},
touch:{
    alignItems:'center',
    marginTop:1,
},

});
