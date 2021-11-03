import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Create({navigation}) {
  return (
    <View style={styles.container}>
       
             <View style={styles.align}>
                <View style={styles.signin}>
                    <Text style={styles.text1}>Create a New Account</Text>
                </View> 
                    <TouchableOpacity onPress={() => {navigation.navigate ('Signin');}}>
                    <AntDesign name="close" size={24} color="black" style={styles.close} />
                    </TouchableOpacity>
                
            </View>


            <View style={styles.page}>
                <TouchableOpacity onPress={() => {navigation.navigate ('Signin');}}>
                <Text style={styles.text2}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                <Text style={styles.text3}>Create Account</Text>
                </TouchableOpacity>
                
            </View>
<ScrollView showsVerticalScrollIndicator={false} >

            <View>
                <TextInput placeholder='First Name *'  style={styles.email} />
            </View>
            <View>
                <TextInput placeholder='Last Name *'  style={styles.email} />
            </View>
            <View>
                <TextInput placeholder='E-mail *'  style={styles.email} />
            </View>

            <View>
                <TextInput placeholder='Password *' secureTextEntry='true'  style={styles.email} />
            </View>
            <View>
                <TextInput placeholder='Mobile phone Number'  style={styles.email} />
            </View>

            

            <TouchableOpacity>
            <View style={styles.login}>
            <AntDesign name="mail" size={24} color="white" />
                <Text style={styles.text4}>Login</Text>  
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.facebook}>
            <AntDesign name="facebook-square" size={24} color="white" />
                <Text style={styles.text5}>Connect with Facebook</Text>  
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.apple}>
            <AntDesign name="apple1" size={24} color="white" />
                <Text style={styles.text6}>Sign in with Apple</Text>  
            </View>
            </TouchableOpacity>

            <View style={styles.down}>
                <Text style={styles.text7}>
                    Already have an account?
                </Text>
                <TouchableOpacity>
                <Text style={styles.text8}>
                    Login
                </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>

            </View>
 </ScrollView>           
            <StatusBar style="auto" />
            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  signin:{
      marginTop:70, 
      marginLeft:125,
      
  },
  align:{
   
    flexDirection:'row',
    
    
  },
  text1:{
      fontSize:21,
  },
  text2:{
    fontSize:23,
    marginLeft:80,
},
text3:{
    fontSize:23,
    marginLeft:100,
},
text4:{
    marginLeft:120,
    fontSize:20,
    color:'white',
},
text5:{
    marginLeft:60,
    fontSize:20,
    color:'white',
},
text6:{
    marginLeft:70,
    fontSize:20,
    color:'white',
},
text7:{
    fontSize:20,
},
text8:{
    fontSize:20,
    marginTop:20,
},
  close:{
    marginTop:70,
    marginLeft:85,
  },
  page:{
      flexDirection:'row',
      marginTop: 25,
  },
  email:{
      marginTop:30,
      marginLeft:20,
      borderWidth:1,
      width:360,
      padding:20,
      borderRadius:20,
  },
  
  login:{
      flexDirection:'row',
      alignItems:'center',
      borderWidth:1,
      width:350,
      marginTop:30,
      padding:10,
      marginLeft:30,
      borderRadius:10,
      backgroundColor:'#00A36C',
    
  },

  facebook:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    width:350,
    marginTop:30,
    padding:10,
    marginLeft:30,
    borderRadius:10,
    backgroundColor:'#6F8FAF',
  
},
apple:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    width:350,
    marginTop:30,
    padding:10,
    marginLeft:30,
    borderRadius:10,
    backgroundColor:'black',
  
},
down:{
    marginTop:50,
    alignItems:'center',
},
footer:{
    margin:20,
},
  
  
  
});
