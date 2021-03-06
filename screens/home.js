import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Image,ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Home({navigation}) {
  const image = { uri: "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80" };
  const image1 = { uri: "https://images.unsplash.com/photo-1595560006870-71deded44269?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" };
  const image2 = {url: "https://images.unsplash.com/photo-1616464916566-c09efd4272a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80"};
  const image3 = {url: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGRlc2lnbmVyJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};
  const image4 = {url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"};
  const image5 = {url: "https://images.unsplash.com/photo-1560184897-502a475f7a0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGRlc2lnbmVyJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};
  const image6 = {url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGRlc2lnbmVyJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"};
  const image7 = {url: "https://images.unsplash.com/photo-1609081144289-eacc3108cd03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxkZXNpZ25lciUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};
  const image8 = {url: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRlc2lnbmVyJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};
  const image9 = {url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGRlc2lnbmVyJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"};
  
 
  return (
    <View style={styles.container}>

      <View style={styles.headerOverall}>

        <AntDesign name="search1" size={15} color="black" />

        <TextInput style={styles.search} placeholder="SEARCH PRODUCT" />

         
          <TouchableOpacity style={styles.header3}>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity> 
          <TouchableOpacity style={styles.header4}>
          <AntDesign name="shoppingcart" size={24} color="black" />
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
        <TouchableOpacity onPress={() => {navigation.navigate ('Detail1');}}>
            <Image source={image}
              style={styles.image1} />
              <Text style={styles.price1}>Modern Villa Living Sofa </Text>
              <Text style={styles.price1}>$500</Text> 
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {navigation.navigate ('Detail2');}}>
        <Image source={image1}
        style={styles.image2} />
        <Text style={styles.tprice2}>Modern Pink Chair </Text>
        <Text style={styles.price2}>$250</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.images2}>
      <TouchableOpacity onPress={() => {navigation.navigate ('Detail3');}}>
      <Image source={image2}
        style={styles.image3} />
        <Text style={styles.price1}>Modern Sofa </Text>
        <Text style={styles.price1}>$550</Text>  
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate ('Detail4');}}>
        <Image source={image3}
        style={styles.image4} />
        <Text style={styles.tprice2}>Modern Pool Chair </Text>
        <Text style={styles.price2}>$150</Text>
       </TouchableOpacity>
      </View>

    
      <View style={styles.images3}>
      <TouchableOpacity onPress={() => {navigation.navigate ('Detail5');}}>
      <Image source={image4}
        style={styles.image5} />
        <Text style={styles.price1}>Comfortable Sofa </Text>
        <Text style={styles.price1}>$250</Text> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate ('Detail6');}}>
        <Image source={image5}
        style={styles.image6} />
        <Text style={styles.tprice2}>Modern Double Bed </Text>
        <Text style={styles.price2}>$400</Text>
        </TouchableOpacity>
      </View>

         
        
        
      




      <View style={styles.images4}>
      <TouchableOpacity onPress={() => {navigation.navigate ('Detail7');}}>
      <Image source={image6}
        style={styles.image7} />
        <Text style={styles.price1}>Soft Modern Sofa </Text>
        <Text style={styles.price1}>$300</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate ('Detail8');}}>
        <Image source={image7}
        style={styles.image8} />
        <Text style={styles.tprice2}>White Sofa  </Text>
        <Text style={styles.price2}>$250</Text>
        </TouchableOpacity>
      </View>

  


      <View style={styles.images5}>
      <TouchableOpacity onPress={() => {navigation.navigate ('Detail9');}}>
      <Image source={image8}
        style={styles.image9} />
        <Text style={styles.price1}>Modern Comfy Chair </Text>
        <Text style={styles.price1}>$500</Text> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate ('Detail10');}}>
        <Image source={image9}
        style={styles.image10} />
        <Text style={styles.tprice2}>Modern Lovers Bed </Text>
        <Text style={styles.price2}>$600</Text>
        </TouchableOpacity>
        
      </View>

      






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
    paddingTop:'15%',
    
  },
  headerOverall:{
    marginLeft: '0.5%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    width: 250,
    marginBottom:'2.5%',
    


  },
 
  header3:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:'40%',
    

  },
  header4:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:'9%',
    
    
    

  },
  search:{
    width: 200,
    fontSize: 15,
    padding:'3%',
  },
  buttonBar:{
    flexDirection:'row',
    justifyContent:'space-around',
    paddingBottom:'7%',
    paddingTop:'2%',
   
    
    
    
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
  
  Arrive:{
      marginTop:'2%',
  },
  arrive:{
    flexDirection:'row',
    alignItems:'center'
  },
  arriveText:{
    fontSize: 35,
    paddingRight:'55%',
  },
  image1:{
    width:60,
    height:60,
    padding:'35%',
    marginLeft:'2%',
  },
  image2:{
    width:60,
    height:60,
    padding:'35%',
    marginLeft:'2%',
   
  },
  images1:{
    flexDirection:'row',
    marginTop:'4%',
    justifyContent:'space-evenly' ,
    marginLeft:'16%',
   
  },
  image3:{
    width:60,
    height:60,
    padding:'35%',
    marginLeft:'2%',
  },
  image4:{
    width:60,
    height:60,
    padding:'35%',
    marginLeft:'2%',
  },
  images2:{
    flexDirection:'row',
    marginTop:'4%',
    justifyContent:'space-evenly' ,
    marginLeft:'16%',
   
  },
  image5:{
    width:60,
    height:60,
    padding:'35%',
    marginLeft:'2%',
  },
  image6:{
    width:60,
    height:60,
    padding:'35%',
    marginLeft:'2%',
  },
  images3:{
    flexDirection:'row',
    marginTop:'4%',
    justifyContent:'space-evenly' ,
    marginLeft:'16%',
   
  },

  image7:{
    width:60,
    height:60,
    padding:'35%',
    marginLeft:'2%',
  },
  image8:{
    width:60,
    height:60,
    padding:'35%',
    marginLeft:'2%',
  },
  images4:{
    flexDirection:'row',
    marginTop:'4%',
    justifyContent:'space-evenly' ,
    marginLeft:'16%',
   
  },
  image9:{
    width:60,
    height:60,
    padding:'35%',
    marginLeft:'2%',
  },
  image10:{
    width:60,
    height:60,
    padding:'35%',
    marginLeft:'2%',
  },
  images5:{
    flexDirection:'row',
    marginTop:'4%',
    justifyContent:'space-evenly' ,
    marginLeft:'16%',
   
  },
  
  price1:{
    fontSize:20,
    marginLeft:'2%',
  },
  price2:{
    fontSize:20,
    marginLeft:'2%',
  },
  tprice2:{
    fontSize:20,
    marginLeft:'2%',
  },
});
