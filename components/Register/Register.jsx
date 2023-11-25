
import React, { useState } from 'react'
import { View, Text, TextInput, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, } from 'react-native'
import { Svg, Circle, Path, Line } from 'react-native-svg'

//Assents
import imagenAgente from '../../assets/images/inicio-sesion-agente-2.png'
import plusJakartaSans from '../../assets/fonts/PlusJakartaSans-Regular.ttf'

//Componentes
import Nav from './Nav'
import SubirFoto from './SubirFoto'
import Titulo from './Titulo'
import Formulario from './Formulario'
import InputContraseña from './InputContraseña'
import BotonRegistro from './BotonRegistro'




export default function Register() {

    const windowWidth = Dimensions.get('window').width;

    const [mostrarPass, setMostrarPass] = useState(true)
    const [form, setForm] = useState({ nombre: '', telefono: '', email: '', contraseña: '' })
    const [valido, setValido] = useState({ nombre: true, telefono: true, email: true, contraseña: true })


    //validaciones

    const validarInputs = () => {
        let nombre = validarNombre(form.nombre)
        let telefono = validarTelefono(form.telefono)
        let email = validarEmail(form.email)
        let contraseña = validarContraseña(form.contraseña)
        setValido({
            nombre: nombre,
            telefono: telefono,
            email: email,
            contraseña: contraseña,
        });
        console.log(valido)
    }

    const validarForm = () => {
        validarInputs()
        return (
            validarNombre(form.nombre) &&
            validarTelefono(form.telefono) &&
            validarEmail(form.email) &&
            validarContraseña(form.contraseña)
        )
    }

    const validarNombre = (nombre) => {
        const regexSoloLetras = /^[a-zA-Z\s]+$/
        let partes = nombre.trim().split(' ')
        if (partes.length > 1) {
            if (regexSoloLetras.test(nombre)) {
                setForm({
                    ...form,
                    ['nombre']: nombre
                })
                return true
            } else {
                console.log('El nombre solo debe contener letras')
                return false
            }
        } else {
            console.log('Faltan datos en el nombre')
            return false
        }
    }

    const validarTelefono = (telefono) => {
        const regexTelefono = /^\+54[1-9]\d{9}$/
        if (!telefono) {
            console.log('Debe completar el campo telefono')
            return false
        } else {
            if (regexTelefono.test(telefono)) {
                console.log('telefono correcto', telefono)
                return true
            } else {
                console.log('Debe completar el telefono correctamente')
                return false
            }
        }
    }

    const validarEmail = (email) => {
        // Expresión regular para verificar el formato básico de un correo electrónico
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!email) {
            console.log('debe completar el mail')
            return false
        } else {
            if (regexEmail.test(email)) {
                console.log('email correcto', email)
                return true
            } else {
                console.log('complete el email correctamente')
                return false
            }
        }
    }


    const validarContraseña = (contraseña) => {
        const regexContraseña = /^.{8,}$/
        if (!contraseña) {
            console.log('debe completar la contraseña')
            return false
        } else {
            if (regexContraseña.test(contraseña)) {
                console.log('contraseña correcta', contraseña)
                return true
            } else {
                console.log('complete el email correctamente')
                return false
            }
        }
    }
    //handles

    const handleSubmit = () => {
        if (validarForm()) {
            const datosAEnviar = {
                nombre: form.nombre.replace(/\s+/g, ' ').toLowerCase().trim(),
                telefono: form.telefono,
                email: form.email,
                contraseña: form.contraseña
            }
            fetch('https://tu-api.com/tu-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosAEnviar),

            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Error en la respuesta del servidor: ${response.status}`);
                    }
                    return response.json()
                })
                .then((data) => {
                    console.log('Respuesta del servidor:', data)
                })
                .catch((error) => {
                    console.error('Error al enviar la solicitud:', error)
                })

        } else {
            console.log('Faltan completar datos')
        }
    }


    return (
        <View style={styles.registrateSerAgente}>
            <Nav />
            <Titulo />
            <View style={styles.form}>
                <SubirFoto />
                <Formulario
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    placeholder="Nombre y Apellido"
                    valido={valido.nombre}
                    frameValido={styles.frame}
                    frameDanger={styles.frameDanger} />
                <Formulario
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    placeholder='+54 01 0200 000'
                    valido={valido.telefono}
                    frameValido={styles.frame}
                    frameDanger={styles.frameDanger}/>
                <Formulario
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder='hola@tuemail.com'
                    valido={valido.email}
                    frameValido={styles.frame}
                    frameDanger={styles.frameDanger}/>
                <InputContraseña 
                    onChange={(e) => setForm({ ...form, ['contraseña']: e.target.value })}
                    placeholder='Ingresá tu contraseña'
                    valido={valido.contraseña}
                    frameValido={styles.__frame}
                    frameDanger={styles.frameDanger}/> 
            </View>
            <BotonRegistro  handleSubmit={handleSubmit}/> 
            {windowWidth >= 900 ?
                (<ImageBackground style={styles.iniciasesiónagente2} source={imagenAgente} />) :
                null}
        </View>
    )
}








//estilos

const styles = StyleSheet.create({
    //global
    registrateSerAgente: {
        height: 950,
        width: 1643,
        backgroundColor: "#FFFFFF",
        alignItems: "flex-start",
        rowGap: 0
    },



    //formulario

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

    teléfono: {

        height: 48,
        width: 352,
        alignItems: "flex-start",
        rowGap: 8
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
    _frame: {
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
    email: {

        height: 48,
        width: 352,
        alignItems: "flex-start",
        rowGap: 8
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
    holatuemailcom: {

        textAlign: "left",
        color: "rgba(0, 9, 41, 1)",
        fontFamily: plusJakartaSans,
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 24
    },
    contraseña: {

        height: 104,
        alignItems: "flex-start",
        rowGap: 0
    },
    ___frame: {
        alignSelf: "stretch",

        height: 59,
        alignItems: "flex-start",
        rowGap: 0
    },
    ____frame: {
        alignSelf: "stretch",
        height: 48,
        backgroundColor: "rgba(247, 247, 253, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 10,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "rgba(224, 222, 247, 1)",
        borderRadius: 8
    },

    iconEyeOutline: {
        height: 24,
        width: 24,
        alignItems: "flex-start",
        rowGap: 0
    },
    _____frame: {
        width: 352,
        height: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'inline-flex'
    },
    debeteneralmenos8caracteres: {

        textAlign: "left",
        color: "rgba(108, 114, 127, 1)",
        fontFamily: plusJakartaSans,
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 19.59999966621399
    },
    ______frame: {
        position: "absolute",

        top: 695,
        left: 123,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 8
    },
    checkbox: {

        height: 24,
        width: 24,
        alignItems: "flex-start",
        rowGap: 0
    },
    rectangle15: {
        position: "absolute",

        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    group5: {
        position: "absolute",

        top: 2,
        height: 20,
        left: 2,
        width: 20
    },
    rectangle16: {
        position: "absolute",

        width: 20,
        height: 20,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderWidth: 1.5,
        borderColor: "rgba(224, 222, 247, 1)",
        borderRadius: 4
    },
    __icon: {
        position: "absolute",

        top: 4,
        height: 12,
        left: 4,
        width: 12,
        alignItems: "flex-start",
        rowGap: 0
    },
    __vector: {
        position: "absolute",

        top: 4,
        right: 2,
        bottom: 4,
        left: 3,
        overflow: "visible"
    },
    soyadministradordepropiedades: {

        width: 295,
        textAlign: "left",
        color: "rgba(0, 9, 41, 1)",
        fontFamily: plusJakartaSans,
        fontSize: 14,
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 19.59999966621399
    },

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





    iniciasesiónagente2: {
        position: "absolute",

        left: 693,
        width: 950,
        height: 950
    }
})

