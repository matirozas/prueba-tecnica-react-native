import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import plusJakartaSans from '../../assets/fonts/PlusJakartaSans-Regular.ttf'


export default function Titulo() {

    const w = Dimensions.get('window').width;

    return (
        <View style={w > 600 ? styles.titulos : styles.Mtitulos}>
            <View style={w > 600 ? styles.titulo : styles.Mtitulo}>
                <Text style={w > 600 ? styles.bienvenido : styles.Mbienvenido}>
                    {`¡Bienvenido!`}
                </Text>
                <Text style={w > 600 ? styles.convertiteahoraenunagenteFlexy : styles.MconvertiteahoraenunagenteFlexy}>
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
        color: "rgba(0, 9, 41, 0.5)",
        fontFamily: plusJakartaSans,
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 24
    },
    Mtitulos: {
        position:'absolute'
    },





    Mtitulo: {
        width: 327, height: 72, top: 134, left: 24, gap: 8,
    },
    Mbienvenido: {
        width: 327, textAlign: 'center', color: 'rgba(0, 9, 41, 1)', fontSize: 32, fontFamily: plusJakartaSans, fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'
    },
    MconvertiteahoraenunagenteFlexy: {
        width: 327, textAlign: 'center', color: 'rgba(0, 9, 41, 0.5)', fontSize: 16, fontFamily: plusJakartaSans, fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'
    }
})