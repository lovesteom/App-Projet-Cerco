import React from 'react'
import { StyleSheet, View, Button, TextInput, Image, Text } from 'react-native'

class Nom extends React.Component{
    render() {
        return(
        <View style={{ marginLeft: 20, marginRight: 20 }}>
            <View>
                <Text style={{ paddingLeft: 5, marginTop: 1, fontSize: 20, color: 'orange' }}>Nom</Text>

                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>

                    <TextInput style={{ flex: 5, height: 40, borderColor: '#000000', borderWidth: 1, borderRadius: 7 }} placeholder="Noms"/>
                    
                    <Image source= {require("../assets/edit.jpg")} style={{flex: 1,  height: 35, marginTop: 15 }}/>

                </View>


                
            </View>

            <View>
                <Text style={{ paddingLeft: 5, marginTop: 5, fontSize: 20, color: 'orange' }}>Prénoms</Text>

                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>

                    <TextInput style={{ flex: 5, height: 40, borderColor: '#000000', borderWidth: 1, borderRadius: 7 }} placeholder="Prénoms"/>
                    
                    <Image source= {require("../assets/edit.jpg")} style={{ flex: 1, width: 50, height: 35, marginTop: 15 }}/>

                </View>


                
            </View>

            <View>
                <Text style={{ paddingLeft: 5, marginTop: 5, fontSize: 20, color: 'orange' }}>Email</Text>

                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>

                    <TextInput style={{ flex: 5, height: 40, borderColor: '#000000', borderWidth: 1, borderRadius: 7 }} placeholder="example@gmail.com"/>
                    
                    <Image source= {require("../assets/edit.jpg")} style={{ flex: 1, width: 50, height: 35, marginTop: 15 }}/>

                </View>


                
            </View>

            <View>
                <Text style={{ paddingLeft: 5, marginTop: 5, fontSize: 20, color: 'orange' }}>Télephone</Text>

                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>

                    <TextInput style={{ flex: 5, height: 40, borderColor: '#000000', borderWidth: 1, borderRadius: 7 }} placeholder="00 00 00 00"/>
                    
                    <Image source= {require("../assets/edit.jpg")} style={{ flex: 1, width: 50, height: 35, marginTop: 15 }}/>

                </View>

                <View style={{ flex: 6, borderBottomColor: 'orange', borderBottomWidth: 1, paddingTop: 20 }}>

                </View>

                <View style={{ flexDirection: "column", paddingTop: 10 }}>

                    <Text style={{ fontSize: 25, color: 'orange' }}>Compte par défaut</Text>

                    <View style={{ flexDirection: 'row'}} >
                        <Text style={{ flex: 8, fontSize: 20, color: 'orange' }}>Mobile Money</Text>
                        <Image source= {require("../assets/valider.png")} style={{ flex: 1, width: 15, height: 20}}/> 
                    </View>

                    <Text style={{ fontSize: 20, color: 'orange' }}>Compte Bancaire</Text>

                </View>


                
            </View>

        </View>
           
        );
    } 
}

 export default Nom