import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Heading extends React.Component {
  

    render() {
        return (
            <View style={styles.heading}>
                <Text style={styles.headingText}>
                    WhyEskom
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    heading: {
        
    },
    headingText: {
        fontSize: 60,
        fontWeight: 'bold',
        marginBottom:50
    }
});