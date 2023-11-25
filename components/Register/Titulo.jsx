import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import plusJakartaSans from '../../assets/fonts/PlusJakartaSans-Regular.ttf'    

export default function Titulo() {
  return (
    <View style={styles.titulos}>
    <View style={styles.titulo}>
        <Text style={styles.bienvenido}>
            {`¡Bienvenido!`}
        </Text>
        <Text style={styles.convertiteahoraenunagenteFlexy}>
            {`Convertite ahora en un agente Flexy.`}
        </Text>
    </View>
</View>
  )
}

const styles = StyleSheet.create({
 
  titulos: {
    top: 179,
    left: 123,
    position: 'absolute'
},
titulo: {
    alignItems: "flex-start",
    rowGap: 8,
},
bienvenido: {
    width: 352,
    color: "rgba(0, 9, 41, 1)",
    fontFamily: plusJakartaSans,
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40
},
convertiteahoraenunagenteFlexy: {
    width: 352,
    textAlign: "left",
    color: "rgba(0, 9, 41, 1)",
    fontFamily: plusJakartaSans,
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 24
}
})