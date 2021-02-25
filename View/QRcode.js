
import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity, Button } from 'react-native';
import { WebView } from 'react-native-webview';


const QRcode = ({route}) =>{
  
    
    return(
      
      <View style={{flex:1, backgroundColor: '#FFFFFF'}}>
        <View style={{flex:5, backgroundColor: '#D5CDCD', borderRadius: 10}}>
          <WebView
              source={{
                uri: route.params.data}}
            /> 
        </View>
        <View style={{flex:1, flexDirection: 'row',backgroundColor: '#FFFFFF'}}>
          
           
            <TouchableOpacity onPress={()=>{alert(`Votre paiement MoMo a été éffectué avec succès.`)}}>
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
    marginTop: 30,
    backgroundColor: '#FC8C0B',
    borderRadius:10,
    borderColor: '#FFFFFF',
    padding: 7,
   
  },

  moov:{
    //flex: 2,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#FC8C0B',
    borderRadius:10,
    borderColor: '#FFFFFF',
    padding: 7,
  },

  visa:{
  // flex: 2, 
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#FC8C0B',
    borderRadius:10,
    borderColor: '#FFFFFF',
    padding: 7,
  },

  txtmtn : {

  },

});