import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class LoadsheddingStatus extends React.Component {
    state = {
        stage: ''
    }

    componentDidMount = () => {
        fetch('https://why-eskom.herokuapp.com/api/getStatus')
            .then(res => res.json())
            .then(response => {
                this.setState({ stage: response.status })
            })
    }

    render() {
        let { stage } = this.state
        return (
            <View style={styles.textBG}>
                <Text style={{ fontSize: 25 }}>Current Stage: 
                <Text style={{fontWeight: 'bold'}}> {stage}</Text>
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    textBG: {
        backgroundColor: 'grey',
        padding:5,
        borderRadius:10
    }
});