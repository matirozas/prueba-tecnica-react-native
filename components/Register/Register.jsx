
import React, { useState } from 'react'
import { View, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native'

//Assents
import imagenAgente from '../../assets/images/inicio-sesion-agente-2.png'

//Componentes
import Nav from './Nav'
import SubirFoto from './SubirFoto'
import Titulo from './Titulo'
import Formulario from './Formulario'
import InputContraseña from './InputContraseña'
import BotonRegistro from './BotonRegistro'

import { validarContraseña, validarEmail, validarNombre, validarTelefono,  } from './validaciones'


export default function Register() {

    const w = Dimensions.get('window').width;


    const [form, setForm] = useState({ nombre: '', telefono: '', email: '', contraseña: '' })
    const [valido, setValido] = useState({ nombre: true, telefono: true, email: true, contraseña: true })

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
        <View style={w > 600 ? styles.registrateSerAgente : styles.MregistrateSerAgente}>
            <Nav />
                <Titulo />
                <View style={w > 600 ? styles.form : styles.Mform}>
                    <SubirFoto />
                    <Formulario
                        onChange={(e) =>setForm({ ...form, nombre: e.target.value })}
                        placeholder="Nombre y Apellido"
                        valido={valido.nombre}
                        frameValido={w > 600 ? styles.frame : styles.Mframe}
                        frameDanger={styles.frameDanger} 
                        />
                    <Formulario
                        onChange={(e) => {setForm({ ...form, telefono: e.target.value })}}
                        placeholder='+54 01 0200 000'
                        valido={valido.telefono}
                        frameValido={w > 600 ? styles.frame : styles.Mframe}
                        frameDanger={styles.frameDanger} />
                    <Formulario
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder='hola@tuemail.com'
                        valido={valido.email}
                        frameValido={w > 600 ? styles.__frame : styles.Mframe}
                        frameDanger={styles.frameDanger} />
                    <InputContraseña
                        onChange={(e) => setForm({ ...form, ['contraseña']: e.target.value })}
                        placeholder='Ingresá tu contraseña'
                        valido={valido.contraseña}
                        frameValido={w > 600 ? styles.frame : styles.frame}
                        frameDanger={styles.frameDanger} />
                </View>
            <BotonRegistro handleSubmit={handleSubmit} />
            {w > 600 ? (<ImageBackground style={w > 600 ? styles.iniciasesiónagente2 : styles.Miniciasesiónagente2} source={imagenAgente} />) : null}

        </View>
    )
}

const styles = StyleSheet.create({
    //global
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
    MframeDanger: {

    },

    M__frame: {

    },
    Miniciasesiónagente2: {

    },
})

