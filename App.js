import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VueAcceuil from './View/VueAcceuil';
import Parametre from './View/Parametre';
import ScanView from './View/ScanView';
import Inscription from './View/Inscription';
import auth from './View/auth'
import popos from './View/popos';



import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import QRcode from './View/QRcode';

const Stack = createStackNavigator();



export default function App() {
  return (
    //<QR_code />
  <NavigationContainer>
  
    <Stack.Navigator  >
    


      {/* <Stack.Screen name="auth"  component={auth} options={{
          title: 'auth',
          headerStyle: {
            backgroundColor: '#FC8C0B',
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign:'center',
          },
        }}/> */}


    <Stack.Screen name="VueAcceuil"  component={VueAcceuil} options={{
              title: 'Accueil',
              headerStyle: {
                backgroundColor: '#FC8C0B',
                
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: "bold",
                textAlign:'center',
              },
            }}/>

{/* <Stack.Screen name="popos"  component={popos} options={{
              title: 'popos',
              headerStyle: {
                backgroundColor: '#FC8C0B',
                
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: "bold",
                textAlign:'center',
              },
            }}/> */}

            

          

     <Stack.Screen name="QRcode"  component={QRcode} options={{
              title: 'QRcode',
          headerStyle: {
            backgroundColor: '#FC8C0B',
           
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: "bold",
            
          },
        }}/>


      <Stack.Screen name="ScanView"  component={ScanView} 
          initialParams={{ icon: 'user' }} 
          options={{
          title: 'Scan',
          
          headerStyle: {
            backgroundColor: '#FC8C0B',
            
          },
          
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}/>
      <Stack.Screen name="Parametre"  component={Parametre}options={{
          title: 'Paramètre', 
         
          headerStyle: {
            backgroundColor: '#FC8C0B',
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: "bold",
            
            
          },
        }}/>

        <Stack.Screen name="Inscription"  component={Inscription} options={{
          title: 'Inscription',
          headerStyle: {
            backgroundColor: '#FC8C0B',
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}/>
     
    
      
    </Stack.Navigator>
   
 </NavigationContainer>
  );
}





/**/