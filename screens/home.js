import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.headerOverall}>

        <AntDesign name="search1" size={15} color="black" />

        <TextInput style={styles.search} placeholder="SEARCH PRODUCT" />

         
          <TouchableOpacity>
          <View style={styles.header3}>

            <AntDesign name="hearto" size={24} color="black" />

          </View>
          </TouchableOpacity>
          
          <TouchableOpacity>
          <View style={styles.header4}>

          <AntDesign name="shoppingcart" size={24} color="black" />

          </View>
          </TouchableOpacity>

      </View>

      <View>
        
      </View>

      

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
  },
  headerOverall:{
    marginLeft: 2,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    width: 250,


  },
 
  header3:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:100,
    

  },
  header4:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:13,
    

  },
  search:{
    width: 200,
    fontSize: 15,
    padding:8,
  },
});
