import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput,TouchableOpacity,Button,ScrollView,Image,Text, View } from 'react-native';
import ScanView from './ScanView';
import Inscription from './Inscription';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';



const Stack = createStackNavigator();

  const VueAcceuil = ({navigation}) => {
    console.log(navigation)
  
  return (
    <ScrollView>

<View style={styles.container}>

   

    <View style={styles.vueImage}>
        <Image style={styles.image} source={require('../assets/image/couscousroyal.png')}/>
        <Image style={styles.image2} source={require('../assets/image/logo2.png')}/>
        
        <TextInput type='email-address' id="user" placeholder="Nom d'utilisateur"  style={styles.inputnom} />
        <TextInput type='visible-password' id="password" placeholder="Mot de passe"  style={styles.inputnom} />
       
        <TouchableOpacity onPress={()=>{console.log(navigation.navigate('Scan'))}}
        
        >
           <View  style={styles.opacity}  >
          
              <Text style={styles.txtbtn2}>Se connecter</Text>
           
            </View>
          </TouchableOpacity>

        {/* <Text style={styles.text} >Vous n'avez pas de compte ?</Text>

        <TouchableOpacity onPress={()=>{console.log(navigation.navigate('Inscription'))}}>
           <View style={styles.opacity}   >

              <Text style={styles.txtbtn}>Créer un compte</Text>
            
            </View>
          </TouchableOpacity> */}

       
    </View>

    

  <StatusBar style="auto" />


  </View>
    </ScrollView>
    
       
  );
}


function verifie(){
  let name= document.getElementById('user');
  let pass= document.getElementById('password');

  sessionStorage.setItem('User', user);
  sessionStorage.setItem('Password', password);
  console.log(name)
  console.log(pass)
}
export default VueAcceuil;


const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  opacity:{
    marginBottom: 10,
    marginTop:10,
    marginLeft:125,
    marginRight:50,

  width: 140, 
  height: 35,
  borderRadius:15,
  backgroundColor:'#FC8C0B',
  },

  txtbtn:{
    marginTop:7,
    marginLeft:20,
    color:'#ffff',
  },

  txtbtn2:{
    marginTop:7,
    marginLeft:30,
    color:'#ffff',

  },

  text:{
    marginBottom: 10,
    marginTop:10,
    marginLeft:110,
    marginRight:40,
    
  },
  btnconnect:{
    borderRadius: 10,
  },
  vuebtn:{
    
    height: 40, 
    width: 140,
    borderRadius: 20,
    marginBottom: 10,
      marginTop:10,
      marginLeft:120,
      marginRight:50,
      paddingLeft:15,
      paddingRight:9,
  },
  

  vueImage:{
    flex: 1,
    flexDirection: 'column',
  },

  image:{
    paddingLeft:10,
    paddingRight:10,
    marginBottom:20,
    width: 393, 
    height: 236,
  },

  image2:{
      marginBottom: 10,
      marginTop:10,
      marginLeft:160,
      marginRight:50,
    width: 85, 
    height: 84,
  },
  inputnom:{
    height: 40, 
    width: 160,
   marginBottom: 10,
      marginTop:10,
      marginLeft:120,
       paddingLeft:15,
     paddingRight:9,

    borderColor: '#FC8C0B', 
    borderWidth: 1,
    
    borderRadius: 7,
  },

  


});