import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput,Button,Image,Text, View } from 'react-native';
import Parametre from './Parametre';
import ScanView from './ScanView';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator, createAppContainer, StackActions } from 'react-navigation';



export default function App() {
  return (

      <ScanView />
        // <Parametre/>
    /*<View style={styles.container}>
        <View style={styles.vueImage}>
            <Image style={styles.image} source={require('../assets/image/couscousroyal.png')}/>
            <Image style={styles.image2} source={require('../assets/image/logo2.png')}/>
            
            <TextInput placeholder="Nom d'utilisateur"  style={styles.inputnom} onChangeText={text => onChangeText(text)}/>
            <TextInput placeholder="Mot de passe"  style={styles.inputnom} onChangeText={text => onChangeText(text)}/>
            <View style={styles.vuebtn}>
                <Button  color="#FC8C0B" borderRadius="10"  style={styles.btnconnect} title= "Se connecter"/>
            </View>

            <Text style={styles.text} >Vous n'avez pas de compte ?</Text>

            <Button  color="#FC8C0B" borderRadius="10"  style={styles.btnconnect} title= "Créer un compte"/>





        </View>

        

      <StatusBar style="auto" />
    </View>*/

        
    
    
  );
}


/*const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    marginBottom: 10,
    marginTop:10,
    marginLeft:135,
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
      marginRight:50,
       paddingLeft:15,
     paddingRight:9,

    borderColor: '#FC8C0B', 
    borderWidth: 1,
    
    borderRadius: 7,
  },

  


});*/
