import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Homescreen = () =>{
    return(
        <View style ={styles.container}>
            <Text style={styles.text}>RejectFinanceBill2024</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',      
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: 'red',
    } 

});

export default Homescreen;