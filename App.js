import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,Image, View, Button } from 'react-native';
import VueAcceuil from './View/VueAcceuil';
//import 'react-native-gesture-handler';
//import { NavigationContainer } from '@react-navigation/native';

//import { createStackNavigator, createAppContainer, StackActions } from 'react-navigation';


export default function App() {
  return (
    <VueAcceuil/>
    
   /* <NavigationContainer style= {styles.container}>
    <Stack.Navigator >
      <Stack.Screen name="VueAcceuil"  component={VueAcceuil} />
        int temp
       
      <View style={styles.container}>

      <Image style={styles.imgaceuil} source={require('./assets/image/logo.png') }  />
      <Button
        onPress={VueAcceuil}
          title=">"
          color="#ffff"
          />

      <StatusBar style="auto" />
    </View>
      
    </Stack.Navigator>
    </NavigationContainer>*/


    /*<View style={styles.container}>

      <Image style={styles.imgaceuil} source={require('./assets/image/logo.png') }  />
      <Button
        onPress={VueAcceuil}
          title=">"
          color="#0000"
          />

          
      </View>*/
      
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FC8C0B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgaceuil:{
    width: 150, 
    height: 150,
    //margin:19,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

});
