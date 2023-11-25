import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import plusJakartaSans from '../../assets/fonts/PlusJakartaSans-Regular.ttf'    


export default function BotonRegistro( {handleSubmit} ) {

    return (
        <View style={styles.boton}>
            <View style={styles.botones}>
                <TouchableOpacity onPress={handleSubmit} style={styles.botonregistrate}>
                    <Text style={styles.registrate}>
                        {`Registrate`}
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.yatenésunacuentaIniciasesión}>
                {`¿Ya tenés una cuenta?  `}<Text style={{ fontFamily: plusJakartaSans, fontSize: 14, "fontWeight": "700", "textAlign": "center", "letterSpacing": 0, "lineHeight": 19.59999966621399, "color": "rgba(0, 9, 41, 1)" }}>{`Iniciá sesión`}</Text>
            </Text>
        </View>

    )
}



const styles = StyleSheet.create({


boton: {
    position: "absolute",

    top: 666,
    left: 123,
    alignItems: "center",
    rowGap: 32
},
botones: {

    alignItems: "flex-start",
    rowGap: 16
},
botonregistrate: {

    width: 352,
    backgroundColor: "rgba(112, 101, 240, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8
},
registrate: {

    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: plusJakartaSans,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24
},
yatenésunacuentaIniciasesión: {

    textAlign: "center",
    color: "rgba(108, 114, 127, 1)",
    fontFamily: plusJakartaSans,
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 19.59999966621399
},
})