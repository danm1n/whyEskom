import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class LoadsheddingStatus extends React.Component {
    static navigationOptions = {
        title: 'Current Loadshedding Status',
    };
    state = {
        stage: '',
        loading: true
    }

    componentDidMount = () => {
        fetch('https://why-eskom.herokuapp.com/api/getStatus')
            .then(res => res.json())
            .then(response => {
                this.setState({ loading:false, stage: response.status })
            })
    }

    render() {
        let { stage, loading } = this.state
        if (!loading) {
            return (
                <View style={styles.textBG}>
                    <Text style={{ fontWeight: 'bold', fontSize: 35, color: 'black' }}> {stage}</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.textBG}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25}}>Loading...</Text>
                </View>
            )
        }
    }

}

const styles = StyleSheet.create({

    textBG: {
        paddingTop: 250,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 10
    }
});