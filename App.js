import axios, { Axios } from 'axios';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import Cotizacion from './src/componets/Cotizacion';
import Formulario from './src/componets/Formulario';
import Header from './src/componets/Header';

const App = () => {

  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("");
  const [searchApi, setSearchApi] = useState(false);
  const [response, setResponse] = useState({});
  const [load, setLoad] = useState(false);

  const compenente = load ? <ActivityIndicator size={"large"}/> : <Cotizacion response={response}/>

  useEffect(() => {
    
      const cotizarCrip = async()=>{
        if(searchApi){
          const uri = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
          const resultado = await axios.get(uri)
          setLoad(true)

          setTimeout(()=>{
            setResponse(resultado.data.DISPLAY[criptomoneda][moneda])
            setSearchApi(false)
            setLoad(false)
          },3000)
        }
      }
     cotizarCrip() 
  }, [searchApi])
  return (
    <SafeAreaView >
      <ScrollView>
        <Header/>
        <Image
          style={styles.imagen}
          source={require('./assets/img/cryptomonedas.png')}
        />
        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            setMoneda={setMoneda}
            criptomoneda={criptomoneda}
            setCriptomoneda={setCriptomoneda}
            setSearchApi={setSearchApi}
            

          />
        </View>
        <View>
          {compenente}
        </View>
      </ScrollView>
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imagen:{
    width:'100%',
    height:150,
    marginHorizontal:'2.5%'
  },
  contenido:{
    marginHorizontal:'2.5%',
    
  }
});

export default App;
