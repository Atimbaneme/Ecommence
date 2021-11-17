import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign,MaterialCommunityIcons,FontAwesome5,Entypo,Ionicons,MaterialIcons } from '@expo/vector-icons';

export default function Account({navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.accountt}>
        
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
    <TouchableOpacity style={styles.touch}  onPress={() => {navigation.navigate ('Signin');}}>
        <View style={styles.mainButton}>

            <Text style={styles.button}>Login/Sign in</Text>

        </View>
        </TouchableOpacity>

    </View>   

    <ScrollView>
      <View style={styles.aview}> 
        <Text style={styles.text4}>
          MY ACCOUNT
        </Text>
      </View>
      <View style={styles.order}>
      <AntDesign name="inbox" size={24} color="black" />
        <Text style={styles.text5}>
        
          Orders
        </Text>
      </View>
      <View style={styles.inbox}>
      <AntDesign name="mail" size={22} color="black" />
        <Text style={styles.text6}>
        
          Inbox
        </Text>
      </View>
      <View style={styles.saved}>
      <Ionicons name="heart-outline" size={24} color="black" />
        <Text style={styles.text7}>
        
          Saved Items
        </Text>
      </View>
      <View style={styles.recent}>
      <Ionicons name="ios-eye-outline" size={24} color="black" />
        <Text style={styles.text8}>
        
          Recently View
        </Text>
      </View>
      <View style={styles.recent}>
      <MaterialIcons name="youtube-searched-for" size={24} color="black" />
        <Text style={styles.text8}>
        
          Recently Searched
        </Text>
      </View>
      <View style={styles.rate}>
      <MaterialIcons name="rate-review" size={24} color="black" />
        <Text style={styles.text8}>
        
          Ratings
        </Text>
      </View>

      <View style={styles.aview}> 
        <Text style={styles.text4}>
          MY SETTINGS
        </Text>
      </View>
      <View style={styles.det}>
        <Text style={styles.text5}>
        
         My Details
        </Text>
      </View>

      <View style={styles.address}>
        <Text style={styles.text5}>
        
         Address Book 
        </Text>
      </View>

      <View style={styles.address}>
        <Text style={styles.text5}>
        
         Change Password
        </Text>
      </View>

      <TouchableOpacity style={styles.touch} onPress={() => {navigation.navigate ('Signin');}} >
          <View style={styles.mainButtonn}>

          <Text style={styles.buttonn}>Login</Text>

          </View>
          </TouchableOpacity>

    </ScrollView>
    

        
<View style={styles.buttonBar}>

<TouchableOpacity onPress={() => {navigation.navigate ('Home');}}>
    <View style={styles.home}>
      <Entypo name="home" size={30} color="black" />

    </View>
   
</TouchableOpacity>

<TouchableOpacity>
<View style={styles.sofa}>
      <MaterialCommunityIcons name="sofa" size={30} color="black" />
      
</View>



</TouchableOpacity>

<TouchableOpacity>
<View style={styles.chair}>
<FontAwesome5 name="chair" size={25} color="black" />
</View>



</TouchableOpacity>

<TouchableOpacity  onPress={() => {navigation.navigate ('Account');}}>
<View style={styles.account}>
<Ionicons name="person" size={23} color="black" />
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
  accountt:{
    alignItems:'center',
    backgroundColor:'#343434',
    flexDirection:'row',
    paddingLeft:'40%',
    paddingTop:'15%',
    paddingBottom:'3%',
    
  },
  second:{
    padding:'2%',
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
  text5:{
    paddingLeft:'4%',
    fontSize:22,
  },
  text6:{
    paddingLeft:'4%',
    fontSize:22,
  },
  text7:{
    paddingLeft:'3%',
    fontSize:22,
  },
  text8:{
    paddingLeft:'3%',
    fontSize:22,
  },
  search:{
      paddingLeft:90,
  },
  cart:{
    paddingLeft:25,
},
mainButton:{
    marginLeft:'50%',
    borderWidth:1,
    width:105,
    borderRadius:10,
    backgroundColor:'orange',
    borderColor: 'orange',
    
},
button:{
    color:'white',
    fontSize:16,
    padding:'7%',
    
    
    
},
touch:{
    alignItems:'center',
    marginTop:1,
},

buttonBar:{
  flexDirection:'row',
  justifyContent:'space-around',
  paddingBottom:29,
  paddingTop:10,
 
  
  
  
},
sofa:{
  flexDirection:'row',
  alignItems:'center',
  


},
home:{
  flexDirection:'row',
  alignItems:'center',
  
  

},
chair:{
 flexDirection:'row',
  
  alignItems:'center',

  
},
account:{
  flexDirection:'row',
   
   alignItems:'center',
  
   
 },
 aview:{
   backgroundColor:'#bebaa7',
   padding:'3.6%',
   paddingTop:'5%',
   paddingBottom:'2%',
 },
 order:{
   flexDirection:'row',
   alignItems:'center',
   marginTop:'6%',
   paddingLeft:'2%',
 },
 inbox:{
  flexDirection:'row',
  alignItems:'center',
  marginTop:'2%',
  paddingLeft:'2%',
  marginTop:'7%',
},
saved:{
  flexDirection:'row',
  alignItems:'center',
  marginTop:'2%',
  paddingLeft:'2%',
  marginTop:'7%',
},
recent:{
  flexDirection:'row',
  alignItems:'center',
  marginTop:'2%',
  paddingLeft:'2%',
  marginTop:'7%',
},
rate:{
  flexDirection:'row',
  alignItems:'center',
  marginTop:'2%',
  paddingLeft:'2%',
  marginTop:'7%',
  marginBottom:'6%',
},
det:{
  marginTop:'5%',
},
address:{
  marginTop:'9%',
},
buttonn:{
  fontSize:30,
  padding:'4%',
  color:'white',
  
  
  
},
mainButtonn:{
  marginTop:'10%',
  width:200,
  borderWidth:1,
  borderRadius:20,
  alignItems:'center',
  backgroundColor:'orange',
  borderColor:'orange',
  
  
},

});
