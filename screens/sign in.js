import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Signin({navigation}) {
  return (
    <View style={styles.container}>
        
             <View style={styles.align}>
                <View style={styles.signin}>
                    <Text style={styles.text1}>Sign In</Text>
                </View> 
                    <TouchableOpacity style={styles.close} onPress={() => {navigation.navigate ('Account');}}>
                    <AntDesign name="close" size={24} color="black"  />
                    </TouchableOpacity>
                
            </View>


            <View style={styles.page}>
                <TouchableOpacity>
                <Text style={styles.text2}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate ('Create');}}>
                <Text style={styles.text3}>Create Account</Text>
                </TouchableOpacity>
                
            </View>

            <View>
                <TextInput placeholder='E-mail*'  style={styles.email} />
            </View>

            <View>
                <TextInput placeholder='Password*' secureTextEntry='true'  style={styles.email} />
            </View>

            <TouchableOpacity>
            <View style={styles.password}>
                <Text>
                    Forgot Your Password?
                </Text>
            </View>
            </TouchableOpacity>

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
      marginTop:'17%', 
      marginLeft:'45%',
      
  },
  align:{
   
    flexDirection:'row',
    
    
  },
  text1:{
      fontSize:21,
  },
  text2:{
    fontSize:23,
    marginLeft:'40%',
},
text3:{
    fontSize:23,
    marginLeft:'12%',
},
text4:{
    marginLeft:'35%',
    fontSize:20,
    color:'white',
},
text5:{
    marginLeft:'15%',
    fontSize:20,
    color:'white',
},
text6:{
    marginLeft:'24%',
    fontSize:20,
    color:'white',
},
  close:{
    marginTop:'17%', 
    marginLeft:'32%',
  },
  page:{
      flexDirection:'row',
      marginTop: '5%',
  },
  email:{
      marginTop:'10%',
      marginLeft:'4%',
      borderWidth:1,
      width:360,
      padding:'4%',
      borderRadius:20,
      fontSize: 25,
  },
  password:{
      marginTop:'10%',
      marginLeft:'63%',
  },
  login:{
      flexDirection:'row',
      alignItems:'center',
      borderWidth:1,
      width:350,
      marginTop:'5%',
      padding:'2.5%',
      marginLeft:'5%',
      borderRadius:10,
      backgroundColor:'#00A36C',
      borderColor:'#00A36C',
    
  },

  facebook:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    width:350,
    marginTop:'5%',
    padding:'2.5%',
    marginLeft:'5%',
    borderRadius:10,
    backgroundColor:'#6F8FAF',
    borderColor:'#6F8FAF',
  
},
apple:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    width:350,
    marginTop:'5%',
    padding:'2.5%',
    marginLeft:'5%',
    borderRadius:10,
    backgroundColor:'black',
  
},
  
  
  
});
