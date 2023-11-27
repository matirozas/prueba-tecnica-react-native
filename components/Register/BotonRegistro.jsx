import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import plusJakartaSans from '../../assets/fonts/PlusJakartaSans-Regular.ttf'
import { Link } from 'react-router-native'


export default function BotonRegistro({ handleSubmit }) {

    const handleLogin = () => {
        console.log('ir a inicio de sesion')
    }
    const w = Dimensions.get('window').width
    return (
        <View style={w > 600 ? styles.boton : styles.Mbotones}>
            <View style={w > 600 ? styles.botones : styles.buttons}>
                <TouchableOpacity onPress={handleSubmit} style={w > 600 ? styles.botonregistrate : styles.Mbotonregistrate}>
                    <Text style={w > 600 ? styles.registrate : styles.signup}>
                        {`Registrate`}
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.yatenésunacuentaIniciasesión}>
                {`¿Ya tenés una cuenta?  `}
                <TouchableOpacity onPress={() => {
                    console.log('ir a inicio de sesion')
                }} >
                    <Link to='/login'>
                        <Text style={styles.iniciarSesion}>
                            {`Iniciá sesión`}
                        </Text>
                    </Link>
                </TouchableOpacity>
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
    iniciarSesion: {
        fontFamily: plusJakartaSans,
        fontSize: 14,
        fontWeight: "700",
        textAlign: "center",
        letterSpacing: 0,
        lineHeight: 19.59999966621399,
        color: "rgba(0, 9, 41, 1)",
    },
    Mbotones: {
        alignItems: "center",
        rowGap: 20,
        top: 633,
        left: 24,
        position: 'absolute'
    },
    buttons: {
        alignItems: "flex-start",
        rowGap: 16
    },
    Mbotonregistrate: {
        width: 327,
        backgroundColor: "rgba(112, 101, 240, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8
    },
    signup: {
        textAlign: "center",
        color: "rgba(255, 255, 255, 1)",
        fontFamily: plusJakartaSans,
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 24
    },


})