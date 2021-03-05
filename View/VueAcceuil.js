import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, TextInput,TouchableOpacity,ScrollView,Image,Text, View, Alert  } from 'react-native';
import ScanView from './ScanView';
import Inscription from './Inscription';

import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
//import { Value } from 'react-native-reanimated';



  const VueAcceuil = ({navigation,route}) => {
    // console.log(navigation)
    // const [value] = React.useState('');
    const Stack = createStackNavigator();
    const [TextInputValue, setTextInputValue] = useState('');
    const [TextInputValue1, setTextInputValue1] = useState('');
   
 const  buttonClickListener = () =>{
    const emaill = TextInputValue;
    const pass1 = TextInputValue1;

    // var em='om@wadunu.com';
    // var mo='12345';
    // route.params.email
    if (emaill== route.params.email && pass1 == route.params.pass)
    {
      console.log(navigation.navigate('ScanView'))
    }
    else{
      alert("Identifiant incorrect");

    }

  // alert(emaill+" "+pass);
  
}



  return (
    
<View style={styles.container}>

<ScrollView>


    <View style={styles.vueImage}>
        <Image style={styles.image} source={require('../assets/image/couscousroyal.png')}/>
        <Image style={styles.image2} source={require('../assets/image/logo2.png')}/>
        
        <TextInput 
            type='email-address'
            id="user" 
            placeholder="Nom d'utilisateur" 
              style={styles.inputnom} 
              onChangeText={emaill => setTextInputValue(emaill)}
               autoCompleteType="email"
           />

        <TextInput 
           // type='visible-password'
            id="password" 
            placeholder="Mot de passe"
            onChangeText={pass => setTextInputValue1(pass)}
              style={styles.inputnom} 
          />
       
        <TouchableOpacity   onPress={buttonClickListener}>
           <View  style={styles.opacity}  >
          
              <Text style={styles.txtbtn2}>Se connecter</Text>
           
            </View>
          </TouchableOpacity>

        <Text style={styles.text} >Vous n'avez pas de compte ?</Text>

        <TouchableOpacity onPress={()=>{console.log(navigation.navigate('Inscription'))}}>
           <View style={styles.opacity}   >

              <Text style={styles.txtbtn}>Créer un compte</Text>
            
            </View>
          </TouchableOpacity>

       
    </View>

    

  <StatusBar style="auto" />
  </ScrollView>

  </View>
   
    
       
  );
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


// SignUp.js
// import React from 'react'
// import {
//   View,
//   Button,
//   TextInput,
//   StyleSheet
// } from 'react-native'

// export default class VueAcceuil extends React.Component {
//   state = {
//     username: '', password: '', email: '', phone_number: ''
//   }
//   onChangeText = (key, val) => {
//     this.setState({ [key]: val })
//   }
//   signUp = async () => {
//     const { username, password, email, phone_number } = this.state
//     try {
//       // here place your signup logic
//       console.log(alert('user successfully signed up!: ',username), success)
//     } catch (err) {
//       console.log('error signing up: ', err)
//     }
//   }
 
//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder='Username'
//           autoCapitalize="none"
//           placeholderTextColor='white'
//           onChangeText={val => this.onChangeText('username', val)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder='Password'
//           secureTextEntry={true}
//           autoCapitalize="none"
//           placeholderTextColor='white'
//           onChangeText={val => this.onChangeText('password', val)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder='Email'
//           autoCapitalize="none"
//           placeholderTextColor='white'
//           onChangeText={val => this.onChangeText('email', val)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder='Phone Number'
//           autoCapitalize="none"
//           placeholderTextColor='white'
//           onChangeText={val => this.onChangeText('phone_number', val)}
//         />
//         <Button
//           title='Sign Up'
//           onPress={this.signUp}
//         />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   input: {
//     width: 350,
//     height: 55,
//     backgroundColor: '#42A5F5',
//     margin: 10,
//     padding: 8,
//     color: 'white',
//     borderRadius: 14,
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })