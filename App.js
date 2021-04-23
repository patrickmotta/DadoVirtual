import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

  // const [NumDado, setNumDado] = useState(null) 


export default function App() {

  const [numDado, setNumDado] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{

    setTimeout(() =>{setLoading(false)}, 4000);

  }, []);

  function girarDado(){

    const resultado = Math.floor(Math.random() * 6 + 1);



      setNumDado(resultado)


  }


  return (
    <View style={styles.container}>
      {loading ? (
        <LottieView source={require("./assets/load.json")}
          autoPlay
          style={styles.lottie}
        />
      ):(
        
        <TouchableOpacity
          activeOpacity={0}  
          style={styles.button}
          onPress={girarDado}
          >
          
          <Text style={styles.text}>{numDado}</Text>

        </TouchableOpacity>


      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    justifyContent: 'center',
    alignItems: "center",
    // backgroundColor: "#262626",
    height: "100%",
    width: "100%"
  },
  text:{

    fontSize: 200,
    // marginTop: Platform.select({ ios: "90%", android: "50%" })
    
  },
  lottie:{
    backgroundColor: "black"
  }
});
