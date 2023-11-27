
import React, { useState } from 'react'
import { View, ImageBackground, StyleSheet, Dimensions, TouchableOpacity,Text } from 'react-native'

//Assents
import imagenAgente from '../../assets/images/inicio-sesion-agente-2.png'
import plusJakartaSans from '../../assets/fonts/PlusJakartaSans-Regular.ttf'


//Componentes
import Nav from '../Register/Nav'
import Titulo from '../Register/Titulo'
import Formulario from '../Register/Formulario'
import InputContraseña from '../Register/InputContraseña'
import { Link } from 'react-router-native'



export default function Login() {

    const w = Dimensions.get('window').width;

    return (
        <View style={w > 600 ? styles.registrateSerAgente : styles.MregistrateSerAgente}>
            <Nav />
                <Titulo />
                <View style={w > 600 ? styles.form : styles.Mform}>
                    <Formulario
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder='hola@tuemail.com'
                        frameValido={w > 600 ? styles.frame : styles.Mframe}
                        frameDanger={styles.frame} />
                    <InputContraseña
                        onChange={(e) => setForm({ ...form, ['contraseña']: e.target.value })}
                        placeholder='Ingresá tu contraseña'
                        frameValido={w > 600 ? styles.frame : styles.Mframe}
                        frameDanger={styles.frame} />
                </View>
                <View style={w > 600 ? styles.boton : styles.Mbotones}>
            <View style={w > 600 ? styles.botones : styles.buttons}>
                <TouchableOpacity style={w > 600 ? styles.botonregistrate : styles.Mbotonregistrate}>
                    <Text style={w > 600 ? styles.registrate : styles.signup}>
                        {`Iniciar Sesión`}
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.yatenésunacuentaIniciasesión}>
                {`¿No tenés una cuenta?  `}
                <TouchableOpacity >
                    <Link to='/'>
                        <Text style={styles.iniciarSesion}>
                            {`Registrate gratis.`}
                        </Text>
                    </Link>
                </TouchableOpacity>
            </Text>
        </View>
            {w > 600 ? (<ImageBackground style={w > 600 ? styles.iniciasesiónagente2 : styles.Miniciasesiónagente2} source={imagenAgente} />) : null}

        </View>
    )
}

const styles = StyleSheet.create({
    //global
    boton: {
      position: "absolute",
      top: 450,
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
    registrateSerAgente: {
        height: 950,
        width: 1643,
        backgroundColor: "#FFFFFF",
        alignItems: "flex-start",
        rowGap: 0,
    },
    form: {
        position: "absolute",
        top: 275,
        height: 586,
        left: 123,
        paddingTop: 0,
        paddingBottom: 197,
        alignItems: "flex-start",
        rowGap: 24,
        paddingHorizontal: 0
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
    __frame: {
        alignSelf: "stretch",
        backgroundColor: "rgba(247, 247, 253, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 10,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderColor: "rgba(224, 222, 247, 1)",
        borderRadius: 8
    },
    iniciasesiónagente2: {
        position: "absolute",
        left: 693,
        width: 950,
        height: 950
    },
    MregistrateSerAgente: {
        width: 375, height: 812, position: 'relative'   
    },
    Mform: {
        width: 327, height: 388, top: 237, left: 24, gap: 24
    },
    Mframe: {
        backgroundColor: "rgba(247, 247, 253, 1)",
        alignSelf: 'stretch',
        paddingLeft: 16, paddingRight: 16,
        paddingTop: 12, paddingBottom: 12,
        borderRadius: 8,
        border: '1px #E0DEF7 solid',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10,
        display: 'inline-flex'
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
    top: 410,
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

