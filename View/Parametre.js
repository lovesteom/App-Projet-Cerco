import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity,TextInput,Button,Image,Text, View } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>

     <View>

            <View style={styles.toch} >
              <TouchableOpacity  onPress={()=>{navigation.navigate('ScanView')}}> 
                <Text style={styles.text}>Retour</Text>
              </TouchableOpacity>

              <TouchableOpacity  onPress={()=>{navigation.navigate('Parametre')} }> 
                <Text style={styles.text}>Paramètres</Text>
              </TouchableOpacity>
              
            </View>

            <View >
              <TouchableOpacity>
                <image source={require('../assets/image/avatar.png')}/>
              </TouchableOpacity>

              <Text>
                jac@wadunu.bj
              </Text>


            </View>


            <View>


            </View>
      </View>
       
        <View style={styles.appuisRetour}>
            
            

            

            <View>
              <Text>
                Nom
              </Text>

              <Text>
                  GBEGNON
              </Text>
                  
              <Text>
                  Jac
              </Text>

              <Text>
                  Email
              </Text>
                  
              <Text>
                  jac@wadunu.bj
              </Text>

              <Text>
                  Téléphone
              </Text>

              <Text>
                  +229 68 00 00 11
              </Text>

              <Text>
                  Compte par défaut
              </Text>

              <Text>
                  Mobile money
              </Text>

              <Text>
                  Compte bancaire
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

