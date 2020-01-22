import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';


export default class Homescreen extends React.Component {
    static navigationOptions = {
        title: 'WhyEskom',
    };

    _showStatus = () => {
        this.props.navigation.navigate('viewStatus');
      };
      _showAbout = () => {
        this.props.navigation.navigate('about');
      };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.heading}>

                </View>
                <Image source={require('../assets/ic_launcher_round.png')} style={{ marginBottom:10, width: 100, height: 100}}/>

                <View style={styles.button}>
                    <Button title="View Status" onPress={this._showStatus}/>
                </View>
                <View style={styles.button}>
                    <Button title="About" onPress={this._showAbout} />
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        paddingTop:120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginBottom:10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});