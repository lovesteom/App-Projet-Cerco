import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity,TextInput,Button,Image,Text, View } from 'react-native';

//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator, createAppContainer, StackActions } from 'react-navigation';



export default function App() {
  return (
    <View style={styles.container}>
       
        <View style={styles.appuisRetour}>
            
            <View style={styles.toch} >
              <TouchableOpacity  > 
                <Text style={styles.text}>Retour</Text>
              </TouchableOpacity>

              <TouchableOpacity  > 
                <Text style={styles.text}>Paramètres</Text>
              </TouchableOpacity>

            </View>
                    
                     
            
        </View>       

        

      <StatusBar style="auto" />
    </View>

        
    
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toch:{
    flexDirection: 'row',
  },

  text:{
    marginLeft: 25,
    marginRight:115,
    marginTop: 15,
    fontSize:25,
    color: '#ffff',
  },

  appuisRetour:{
    width:400,
    height: 70,
    backgroundColor: '#605F5F',
    marginBottom:700,
  },
  

});
