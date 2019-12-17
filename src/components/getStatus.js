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
                <Text style={{ fontSize: 25,color:'white' }}>Current Stage:
                </Text>
                <Text style={{fontWeight: 'bold',fontSize:25,color:'white'}}> {stage}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    textBG: {
          justifyContent: 'center',
            alignItems: 'center',
        backgroundColor: 'black',
        padding:5,
        borderRadius:10
    }
});