import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cotizacion = ({
    response
}) => {

    if(Object.keys(response)===0) return null

    return (
        <View style={styles.resultado}>
            <Text style={[styles.text,styles.precio]}>
                <Text style={styles.span}> {response.PRICE}</Text>
            </Text>
            <Text style={styles.text}>
                Precio más alto del día: 
                <Text style={styles.span}> {response.HIGHDAY}</Text>
            </Text>
            <Text style={styles.text}>
                Variaci+on ultimas 24 horas:
                <Text style={styles.span}> {response.CHANGEPCT24HOUR}%</Text>
            </Text>
            <Text style={styles.text}>
                ultima actualización:
                <Text style={styles.span}> {response.LASTUPDATE}</Text>
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    resultado:{
        backgroundColor:'#5E49E2',
        padding:20,
        marginTop:10
    },
    text:{
        color:'#FFF',
        fontFamily:'Lato_Regular',
        fontSize:20,
        marginBottom:10
    },
    precio:{
        fontSize:38
    },
    span:{
        fontFamily:'Lato-Black'
    }
})

export default Cotizacion;
