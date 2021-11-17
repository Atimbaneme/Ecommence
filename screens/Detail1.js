import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView, Alert } from 'react-native';
import { AntDesign,Feather,MaterialCommunityIcons } from '@expo/vector-icons';


export default function Detail1({navigation}) {
    const image = { uri: "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80" };
  return (
    <View style={styles.container}>

        
        <View style={styles.header}> 
        <TouchableOpacity style={styles.icon1} onPress={() => {navigation.navigate ('Home');}}> 
        <AntDesign name="arrowleft" size={28} color="white" />
        </TouchableOpacity>
            <Text style={styles.text1}>Details</Text>
            <TouchableOpacity style={styles.icon2}>
            <AntDesign name="search1" size={24} color="white"  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon3}>
            <AntDesign name="shoppingcart" size={24} color="white"  />
            </TouchableOpacity>
        </View>

        <ScrollView>

        
        <View style={styles.imageView}>
        <Image source={image} style={styles.image1} />
        </View>

        <View style={styles.thirdView}>
        <Text style={styles.text2}>Official Store</Text>
        <Text style={styles.text3}>Basic Information</Text>
        <Text style={styles.text4}>Model No.             : S1901-1 {"\n"}
                                   Material                 : Fabric {"\n"}
                                   Condition              : New {"\n"}
                                   Cushion Filler       : Feather Down{"\n"}
                                   Color                     : Optional{"\n"}
                                   Legs                      : Wodden{"\n"}
                                   Depth                    : Adjustable{"\n"}
                                   Origin                    : China
                                   </Text>
      
        </View>
            
       </ScrollView>

       <View style={styles.buttomBar}>
      
        <View style={styles.callB}>  
         <TouchableOpacity onPress={() => {Alert.alert ("Call","0541235120")}}>
         <Feather name="phone" size={30} color="white" style={styles.call} />
          </TouchableOpacity>
       </View> 
       
       <View style={styles.add}>
           
       <MaterialCommunityIcons name="cart-plus" size={30} color="white" style={styles.cart} />
       <Text style={styles.text5}>
           Add  to Cart
       </Text>
       
       </View>
       


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
  header:{
      
      backgroundColor:'#28282B',
      paddingTop:'14%',
      paddingBottom:'2%',
      flexDirection:'row',
      alignItems:'center',
      
  },
  text1:{
      fontSize:25,
      color:'white',
      marginLeft:'34%',
  },
  text2:{
    borderWidth:1,
    borderColor:'#8B0000',
    width:80,
    marginLeft:'1.5%',
    color:'white',
    backgroundColor:'#8B0000',
},
  
text3:{
    fontSize:25,
    marginLeft:5,
    marginTop:5,
    fontWeight:'bold',
},
text4:{
    marginLeft:5,
    fontSize:17,
    padding:6,
},
text5:{
    fontSize:30,
    color:'white',
    marginHorizontal:40,
    
},


  icon1:{
      marginLeft:'2.5%',
  },
  icon2:{
      marginLeft:'20%',
  },
  icon3:{
    marginLeft:'5%',
  },
  image1:{
      height:300,
      width:300,
      
  },
  imageView:{
      marginTop:10,
      alignItems:'center',
  },
  thirdView:{
      marginTop:5,
  },
  buttomBar:{
      paddingBottom:'10%',
      backgroundColor:'#FAF9F6',
      flexDirection:'row',
      paddingTop:'2%',
      alignItems:'center',
  },
  add:{
      flexDirection:'row',
      borderWidth:1,
      borderColor:'#A47449',
      width:300,
      marginLeft:'9%',
      padding:'1.5%',
      borderRadius:15,
      backgroundColor:'#A47449',
      
      
  },
  
  cart:{
    marginLeft:'1%',
},
callB:{
    backgroundColor:'#A47449',
    marginLeft:'2%',
    borderWidth:1,
    padding:'1.5%',
    borderColor:'#A47449',
    borderRadius:15,
},
  
  
 
});
