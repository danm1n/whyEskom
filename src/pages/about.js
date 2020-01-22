import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default class About extends React.Component {
    static navigationOptions = {
        title: 'About',
    };

    render() {
            return (
                <View style={styles.container}>
                    <Image source={require('../assets/ic_launcher_round.png')} style={{marginBottom:10, width: 60, height: 60}}/>
                    <Text style={{fontSize: 15, color: 'black' }}>I'm a basic app that gets you the current loadshedding stage. 
                    All data is coming from my server that is pulling info from eskom. Want to use my api?
                    <Text style={{fontSize:15, color: 'grey'}}> why-eskom.herokuapp.com</Text>
                    </Text>
                </View>
            )
        }
        

}

const styles = StyleSheet.create({
    container: {
        padding:30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:160
    }
})