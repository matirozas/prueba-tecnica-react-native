// Formulario.js
import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import plusJakartaSans from '../../assets/fonts/PlusJakartaSans-Regular.ttf'    

const Formulario = ({ frameValido, frameDanger, onChange, placeholder, valido }) => {
  return (
    <View style={styles.inputBox}>
      <View style={valido ? frameValido : frameDanger}>
        <TextInput
          style={styles.inputForm}
          onChange={onChange}
          placeholder={placeholder}
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
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
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
frame: {
    alignSelf: "stretch",
    height: 48,
    backgroundColor: "rgba(247, 247, 253, 1)",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "rgba(224, 222, 247, 1)",
    borderRadius: 8
},
frameDanger: {
    alignSelf: "stretch",
    height: 48,
    backgroundColor: "rgba(247, 247, 253, 1)",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 8
},
})