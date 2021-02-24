import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements';
import ScanView from './ScanView';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const Inscription  = ({navigation}) =>{
  
    return (
      <View style={{backgroundColor: '#FC8C0B', flex: 1,}}>
          <View style={{
              position: 'relative', right: '04%', textAlign: 'center', color: '#FC8C0B', width: '30%', padding: 2, borderRadius: 3, marginTop: 30}}>
            
          </View>
          <Text style={{ marginTop: 10, color: '#FC8C0B', textAlign: 'center', marginLeft: 20,  marginRight: 20, backgroundColor: '#FFFFFF', borderRadius: 3}}> Informations Personnelles </Text>
            <View style= {{flexDirection: 'row', marginTop: 10}} >
              <Text style={{ marginTop: 3, color: '#FFFFFF', flex: 2, marginLeft: 20}}> Nom </Text><TextInput style={{borderColor: '#FFFFFF', borderWidth: 2, borderRadius: 3, marginRight: 20, flex: 4}}/>
            </View>
            <View style= {{flexDirection: 'row', marginTop: 10}} >
              <Text style={{ marginTop: 3, color: '#FFFFFF', flex: 2, marginLeft: 20}}>Prénom</Text><TextInput style={{borderColor: '#FFFFFF', marginLeft: 20, marginRight: 20, borderWidth: 2, borderRadius: 3, flex: 5}}/>
            </View>
            <View style= {{flexDirection: 'row', marginTop: 10}}>
              <Text style={{color: '#FFFFFF', flex: 2, marginLeft: 20}}>E-mail</Text><TextInput style={{borderColor: '#FFFFFF', marginLeft: 20, marginRight: 20, borderWidth: 2, borderRadius: 3, flex: 5}}/>
            </View>
            <View style= {{flexDirection: 'row', marginTop: 10}} >
              <Text style={{ marginTop: 3, color: '#FFFFFF', flex: 2, marginLeft: 20}}>Téléphone</Text><TextInput style={{borderColor: '#FFFFFF', marginLeft: 20, marginRight: 20, borderWidth: 2, borderRadius: 3, flex: 5}}/>
            </View>
            <View style= {{flexDirection: 'row', marginTop: 10}} >
              <Text style={{ marginTop: 3, color: '#FFFFFF', flex: 2, marginLeft: 20}}>Pays</Text><TextInput style={{borderColor: '#FFFFFF', marginLeft: 20, marginRight: 20, borderWidth: 2, borderRadius: 3, flex: 5}}/>
            </View>
            <View style= {{flexDirection: 'row', marginTop: 10}} >
              <Text style={{ marginTop: 3, color: '#FFFFFF',flex: 2, marginLeft: 20}}>Ville</Text><TextInput style={{borderColor: '#FFFFFF', marginLeft: 20, marginRight: 20, borderWidth: 2, borderRadius: 3, flex: 5}}/>
            </View>
            <View>
              <Text style={{color: '#FC8C0B', textAlign: 'center', backgroundColor: '#FFFFFF', marginTop: 10, marginLeft: 20, marginRight: 20, borderRadius: 3}}> Informations de paiement </Text>
            </View>
            <View style= {{flexDirection: 'row', marginTop: 10}} >
              <Text style={{color: '#FFFFFF', flex: 2, marginLeft: 20 }}> N° MobileMoney </Text><TextInput style={{borderColor: '#FFFFFF', marginLeft: 20, marginRight: 20, borderWidth: 2, borderRadius: 3, flex: 3}}/>
            </View>
            <View style= {{flexDirection: 'row', marginTop: 10}}>
              <Text style={{color: '#FFFFFF', flex: 2, marginLeft: 20 }}> N° Carte bancaire </Text><TextInput style={{borderColor: '#FFFFFF', marginLeft: 20, marginRight: 20, borderWidth: 2, borderRadius: 3, flex: 3}}/>
            </View>
            <View style= {{  flexDirection: 'row', marginTop: 10}}>
              <Text style={{color: '#FFFFFF', flex: 2, marginLeft: 20 }}> N° CVV </Text><TextInput style={{borderColor: '#FFFFFF', marginLeft: 20, marginRight: 20, borderWidth: 2, borderRadius: 3, flex: 3}}/>
            </View>
            <View style= {{ flexDirection: 'row'}} > 
              <CheckBox checked={false}> </CheckBox>
              <Text style={{color: '#FFFFFF', marginTop: 15}}>J'ai lu et accepté les Termes et conditions et la Politique de confidentialité</Text>
            </View>
            <View style= {{ flexDirection: 'row' }}>
              <CheckBox style={{ color: '#FFFFFF'}} checked={false}> </CheckBox> 
              <Text style={{ color: '#FFFFFF', marginTop: 15 }}>Oui, je souhaite recevoir la newsletter.</Text>
            </View>
            <View style={styles.container}>
              <TouchableOpacity
                onPress={()=>{navigation.navigate('Scan')}}>
                 <Text style={{color:'#FC8C0B'}}>Créer le Compte</Text>
              </TouchableOpacity>
            </View>
      </View>
    );
  }

export default Inscription;

const styles= StyleSheet.create({
  container: {
    position: 'relative',
    right: '-33%',
    textAlign: 'center',
    color: '#FC8C0B',
    backgroundColor: '#FFFFFF',
    paddingLeft:9,
    width: '36%',
    padding: 2,
    borderRadius: 7,
    marginTop: 50
  }
})

