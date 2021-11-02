import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Image,ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const image = { uri: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80" };
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

      
     


      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Arrive}>
        <View style={styles.arrive}>
        <Text style={styles.arriveText}>New Arrival</Text>
        <TouchableOpacity>
        <AntDesign name="arrowright" size={30} color="black" />
        </TouchableOpacity>
        </View>

      </View>
      

      <View style={styles.images1}>
        <TouchableOpacity>
            <Image source={image}
              style={styles.image1} />
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Image source={image}
        style={styles.image2} />
        </TouchableOpacity>

        
        
      </View>
      <View style={styles.text1}> 
          <Text style={styles.price1}>hello</Text>
           
          <Text style={styles.price2}>hello</Text>
        
        </View>

      <View style={styles.images2}>
      <TouchableOpacity>
      <Image source={image}
        style={styles.image3} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={image}
        style={styles.image4} />
       </TouchableOpacity>
      </View>

      <View style={styles.images3}>
      <TouchableOpacity>
      <Image source={image}
        style={styles.image5} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={image}
        style={styles.image6} />
        </TouchableOpacity>
      </View>

      <View style={styles.images4}>
      <TouchableOpacity>
      <Image source={image}
        style={styles.image7} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={image}
        style={styles.image8} />
        </TouchableOpacity>
      </View>


      <View style={styles.images5}>
      <TouchableOpacity>
      <Image source={image}
        style={styles.image9} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={image}
        style={styles.image10} />
        </TouchableOpacity>
        
      </View>




</ScrollView>





<View style={styles.viewA}>

<TouchableOpacity>
        <View style={styles.home}>
        <Entypo name="home" size={30} color="black" />
              <Text style={styles.homeText}>Home</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <View style={styles.sofa}>
              <MaterialCommunityIcons name="sofa" size={30} color="black" />
              <Text style={styles.sofaText}>SOFA</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.chair}>
        <FontAwesome5 name="chair" size={25} color="black" />
        <Text style={styles.chairText}>CHAIR</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.account}>
        <Ionicons name="person" size={26} color="black" />
        <Text style={styles.accountText}>Account</Text>
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
    marginBottom:10,
    


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
  viewA:{
    flexDirection:'row',
    alignItems:'center',
    padding:15,
    paddingLeft: 1,
    margin:1,
  },
  sofa:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:15,
    marginBottom:20,

  },
  home:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:9,
    marginBottom:20,

  },
  chair:{
   flexDirection:'row',
    paddingLeft: 25,
    alignItems:'center',
    marginBottom:20,
    
  },
  account:{
    flexDirection:'row',
     paddingLeft: 15,
     alignItems:'center',
     marginBottom:20,
     
   },
  sofaText:{
    paddingLeft:10,
   fontSize:20,

  },
  homeText:{
    paddingLeft:10,
   fontSize:20,

  },
  chairText:{
    paddingLeft:10,
    fontSize:17,

 
  },
  accountText:{
    paddingLeft:10,
    fontSize:18,

 
  },
  Arrive:{
      marginTop:20,
  },
  arrive:{
    flexDirection:'row',
    alignItems:'center'
  },
  arriveText:{
    fontSize: 35,
    paddingRight:230,
  },
  image1:{
    width:100,
    height:100,
    padding:95,
    marginLeft:5,
  },
  image2:{
    width:100,
    height:100,
    marginLeft:23,
    padding:95,
  },
  images1:{
    flexDirection:'row',
    marginTop:20,
   
  },
  image3:{
    width:100,
    height:100,
    padding:95,
    marginLeft:5,
  },
  image4:{
    width:100,
    height:100,
    marginLeft:23,
    padding:95,
  },
  images2:{
    flexDirection:'row',
    marginTop:20,
   
  },

  image5:{
    width:100,
    height:100,
    padding:95,
    marginLeft:5,
  },
  image6:{
    width:100,
    height:100,
    marginLeft:23,
    padding:95,
  },
  images3:{
    flexDirection:'row',
    marginTop:20,
   
  },

  image7:{
    width:100,
    height:100,
    padding:95,
    marginLeft:5,
  },
  image8:{
    width:100,
    height:100,
    marginLeft:23,
    padding:95,
  },
  images4:{
    flexDirection:'row',
    marginTop:20,
   
  },
  image9:{
    width:100,
    height:100,
    padding:95,
    marginLeft:5,
  },
  image10:{
    width:100,
    height:100,
    marginLeft:23,
    padding:95,
  },
  images5:{
    flexDirection:'row',
    marginTop:20,
   
  },
  text1:{
      flexDirection:'row',
      marginTop:5,
     
   
  },
  price1:{
    fontSize:20,
    marginLeft:5,
  },
  price2:{
    fontSize:20,
    marginLeft:180,
  },
});
