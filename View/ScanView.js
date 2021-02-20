import React, { useState, useEffect} from 'react'
import { Image, StyleSheet, Text, View, Button, Linking } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
export default function ScanView() {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
         
        })();
      }, []);

     
      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        //alert(`Code scanné avec succès. Information: receuillie: ${data}`);
        Linking.openURL(data)
      };
      
    
      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }  

    return (
        <View style={styles.header}> 
            <Image style={styles.headerImg}
            source={require('../assets/image/salmon.jpg')} 
            />

            <View style={styles.scanner}>
                <Text>Scan</Text>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                   
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      
    },
    headerImg: {
        height: '100%',
        width: '100%',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    header: {
        marginRight: '1%',
        height: 200,
        width: '100%'
    },
    scanner: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        borderWidth: 2,
        padding: 150,
        marginTop: 10,
       
       
    }
})
