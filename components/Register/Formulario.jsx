// Formulario.js
import React from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions } from 'react-native';
import plusJakartaSans from '../../assets/fonts/PlusJakartaSans-Regular.ttf'    

const Formulario = ({ frameValido, frameDanger, onChange, placeholder, valido,  }) => {

    const w = Dimensions.get('window').width;

  return (
    <View style={w>600?styles.inputBox:styles.MinputBox}>
      <View style={valido ? frameValido : frameDanger}>
        <TextInput
          style={styles.inputForm}
          onChange={onChange}
          placeholder={placeholder}
          placeholderTextColor={'rgba(0, 9, 41, 0.5)'}
        />
      </View>
     
    </View>
  );
};

export default Formulario;


const styles = StyleSheet.create({

inputBox: {
    width: 352, 
    height: 48, 
    paddingBottom: 29, 
    justifyContent: 'flex-start', 
},
inputForm: {
    textAlign: "left",
    color: "rgba(0, 9, 41, 1)",
    fontFamily: plusJakartaSans,
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 24,
    width: 2000,
    outlineWidth: 0,
},  
MinputBox: {
    height: 48,
    width: 327,
    alignItems: "flex-start",
    rowGap: 8
},

})