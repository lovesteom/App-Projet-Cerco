import React from 'react'
import { StyleSheet, View, Button, TextInput, Image, Text } from 'react-native'

class Avatar extends React.Component{
    render() {
        return(
            <View>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Image source= {require("../assets/image/avatar.png")} style={{ width: 110, height: 110, marginTop: 10, paddingLeft: 50, marginLeft: 10, flexDirection: 'row' }}/>
                    <Text style={{ marginTop: 100, fontSize: 20, paddingLeft: 10, color: 'orange' }}>g.judiric@cercoia</Text>
                </View>

                <View style={{ flex: 6, borderBottomColor: 'orange', borderBottomWidth: 1, paddingTop: 20 }}>

                </View>
             </View>
           
        );
    } 
}

 export default Avatar