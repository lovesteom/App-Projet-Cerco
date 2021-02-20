import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VueAcceuil from './View/VueAcceuil';
import Parametre from './View/Parametre';
import ScanView from './View/ScanView';
import Inscription from './View/Inscription';


const Stack = createStackNavigator();



export default function App() {
  return (
    
  <NavigationContainer>
  
    <Stack.Navigator >
      <Stack.Screen name="Accueil"  component={VueAcceuil} />
      <Stack.Screen name="Scan"  component={ScanView} />
      <Stack.Screen name="Parametre"  component={Parametre} />
      <Stack.Screen name="Inscription"  component={Inscription} />
      
      
    </Stack.Navigator>
   
 </NavigationContainer>
  );
}



