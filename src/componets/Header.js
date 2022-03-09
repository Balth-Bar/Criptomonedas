import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

const Header = () => {
  return(

    <Text style={styles.encabezado}>
        Criptomonesdas</Text>
    )
};

const styles = StyleSheet.create({
    encabezado:{
        paddingTop: Platform.OS === 'ios'? 50:10,
        fontFamily:'Lato-Black',
        backgroundColor:'#5E49E2',
        paddingBottom:10,
        textAlign:'center',
        textTransform:'uppercase',
        fontWeight:'bold',
        fontSize:20,
        marginBottom:10,
        color:'#FFF'
    }
})

export default Header;
