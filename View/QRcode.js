
import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import Modal from 'react-native-modal';

import { createStackNavigator } from '@react-navigation/stack';




// function popos() {
//   const [isModalVisible, setModalVisible] = useState(false);
  
//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//     return (
//       <View style={{flex: 1}}>
//         <Button title="Show modal" onPress={toggleModal} />

//         <Modal isVisible={isModalVisible}>
//           <View style={styles.cont}>
//             <Text>Hello!</Text>

//             <Button title="ok" onPress={toggleModal} />
//           </View>
//         </Modal>
//       </View>
//     );
// }


const QRcode = ({route}) =>{
  var visa_txt ='Votre paiement VISA a été éffectué avec succès.';
  var MoMo_txt ='Votre paiement MoMo a été éffectué avec succès.';
  
  var isModalVisible=false;
    return(
      
      <View style={{flex:1, backgroundColor: '#FFFFFF'}}>
        <View style={{flex:5, backgroundColor: '#D5CDCD', borderRadius: 10}}>
          { <WebView
              source={{
                uri: route.params.data}}

                
            />  }
        </View>
        <View style={{flex:0, flexDirection: 'row',backgroundColor: 'rgba(0,0,0,0)'}}>
          
           
            <TouchableOpacity onPress={()=>{alert(`Votre paiement Mtn Money a été éffectué avec succès.`)}}>
              <View style={styles.mtn}>
                <Text style={styles.txtmtn}>MTN Mobile Money</Text>

              </View>
              
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{alert(`Votre paiement Moov Money a été éffectué avec succès.`)}}>
              <View style={styles.moov}>
                <Text style={styles.txtmtn}>Moov Money</Text>

              </View>
              
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{alert(`Votre paiement VISA a été éffectué avec succès.`)}}>
              <View style={styles.visa}>
                
               <Text style={styles.txtmtn}>VISA</Text>

              </View>
              
            </TouchableOpacity>
                   
           

          
        </View>
      </View>
    );
  }


export default QRcode


const styles = StyleSheet.create({
  mtn: {
    //flex: 2, 
    marginLeft: 20,
    marginRight: 10,
    marginTop: 10,
    marginBottom:10,
    backgroundColor: '#FC8C0B',
    borderRadius:10,
    borderColor: '#FFFFFF',
    padding: 7,
   
  },

//   cont:{
//     alignItems: 'center',
//     marginLeft:'15%',
//     justifyContent: 'center',
//     height:'25%',
//     backgroundColor:'red' ,
//     width: '70%',
//     borderRadius:15,
//     borderColor:'#ffff',
// },

  moov:{
    //flex: 2,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom:10,
    backgroundColor: '#FC8C0B',
    borderRadius:10,
    borderColor: '#FFFFFF',
    padding: 7,
  },

  visa:{
  // flex: 2, 
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom:10,
    backgroundColor: '#FC8C0B',
    borderRadius:10,
    borderColor: '#FFFFFF',
    padding: 7,
  },

  txtmtn : {

  },

});




// const styles = StyleSheet.create({

//   cont:{
//       alignItems: 'center',
//       marginLeft:'15%',
//       justifyContent: 'center',
//       height:'25%',
//       backgroundColor:'red' ,
//       width: '70%',
//       borderRadius:15,
//       borderColor:'#ffff',
//   }

// });