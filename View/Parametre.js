import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity,TextInput,Button,Image,Text, View } from 'react-native';
import Avatar from './Avatar';
import Nom from './Nom';







export default function App() {
  return (
    <View>
        <Avatar/>
        <Nom/>
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
  

});

