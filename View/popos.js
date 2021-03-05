import React, {useState} from 'react';
import {Button, Text, StyleSheet,View} from 'react-native';
import Modal from 'react-native-modal';

function popos() {
  const [isModalVisible, setModalVisible] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

    return (
      <View style={{flex: 1}}>
        <Button title="Show modal" onPress={toggleModal} />

        <Modal isVisible={isModalVisible}>
          <View style={styles.cont}>
            <Text>Hello!</Text>

            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    );
}

export default popos;


const styles = StyleSheet.create({

    cont:{
        alignItems: 'center',
        marginLeft:'15%',
        justifyContent: 'center',
        height:'25%',
        backgroundColor:'red' ,
        width: '70%',
        borderRadius:15,
        borderColor:'#ffff',
    }

});



