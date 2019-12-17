import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Footer extends React.Component {
  

    render() {
        return (
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    created by incrediblejagur
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    footer: {

    },
    footerText: {
        fontSize: 10,
        fontFamily:'monospace',
        color:'grey'
    }
});