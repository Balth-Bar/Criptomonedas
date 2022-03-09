import { Picker } from '@react-native-picker/picker';
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Pressable, Alert } from 'react-native';
import axios from 'axios'
const Formulario = ({
    moneda,
    setMoneda,
    criptomoneda,
    setCriptomoneda,
    setSearchApi
}) => {
    
    const [criptomonedas, setCriptomonedas] = useState([]);
    

    const cotizar =()=>{
        if(moneda.trim() === '' || criptomoneda.trim()=== ''){
            alert()
            return
        }
        setSearchApi(true)

    }
    const alert =()=>{
        Alert.alert(
            'Error',
            'Ambos campos son obligatorios',
            [
                {text:'Ok'}
            ]
        )
    }

    useEffect(() => {
        const consultarApi = async()=>{
            const url =  'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado =  await axios.get(url)
            setCriptomonedas(resultado.data.Data)
        }
        consultarApi()
    }, [])
    
    return (
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
                selectedValue={moneda}
                onValueChange={(itemValue, itemIndex) =>
                    setMoneda(itemValue)
                }
                
            >
                <Picker.Item style={styles.pikerlabe} label="Seleccione" value="Valor"/>
                <Picker.Item style={styles.pikerlabe} label="Dolar Usa" value="USD"/>
                <Picker.Item style={styles.pikerlabe} label="Peso Colombiano" value="COP"/>
                <Picker.Item style={styles.pikerlabe} label="Euro" value="EUR"/>
                <Picker.Item style={styles.pikerlabe} label="Libra" value="GBP"/>
            </Picker>
            <Text style={styles.label}>Criptomoneda</Text>

            <Picker
                selectedValue={criptomoneda}
                onValueChange={(itemValue, itemIndex) =>
                    setCriptomoneda(itemValue)
                }
            >
                <Picker.Item style={styles.pikerlabe} label="Seleccione" value="Valor"/>
                
                {criptomonedas.map( cripto =>(
                    <Picker.Item style={styles.pikerlabe} key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name}/>

                ))}
            </Picker>
            
            <TouchableHighlight 
                style={styles.btnCotizar}
                onPress={()=>{
                    cotizar()
                }}
            >
                <Text style={styles.textBtn}>
                    Cotizar
                </Text>
            </TouchableHighlight>
        </View>
    );
};
const styles = StyleSheet.create({
    label:{
        fontFamily:'Lato-Black',
        fontSize:22,
        marginVertical:20,
        textTransform:'uppercase'
    },
    pikerlabe:{
        fontSize:20,
        textAlign:'center'
    },
    btnCotizar:{
        backgroundColor:'#5E49E2',
        padding:10,
        marginTop:20
    },
    textBtn:{
        color:'#FFF',
        fontSize:20,
        fontFamily:'Lato-Black',
        textTransform:'uppercase', 
        textAlign:'center'
    }
})

export default Formulario;
