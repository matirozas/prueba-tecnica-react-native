import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Path, Svg } from 'react-native-svg'
import plusJakartaSans from '../../assets/fonts/PlusJakartaSans-Regular.ttf'


export default function InputContraseña({ frameValido, frameDanger, onChange, placeholder, valido }) {

    const w = Dimensions.get('window').width;


    const handleVerPass = () => {
        setMostrarPass(!mostrarPass)
    }
    const [mostrarPass, setMostrarPass] = useState(true)
    return (

        <View style={w > 600 ? styles.inputBox : styles.MinputBox}>
            <View style={w > 600 ? styles.___frame : styles.M___frame}>
                <View style={valido ? frameValido : frameDanger}>
                    <TextInput
                        onChange={onChange}
                        placeholder={placeholder}
                        placeholderTextColor={"rgba(0, 9, 41, 0.5)"}
                        style={styles.inputForm}
                        secureTextEntry={mostrarPass} />
                    <TouchableOpacity onPress={handleVerPass} style={styles.iconEyeOutline}>
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                            <Path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42001 13.98 8.42001 12C8.42001 10.02 10.02 8.42 12 8.42C13.98 8.42 15.58 10.02 15.58 12Z" stroke="#9EA3AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <Path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.4C18.82 5.8 15.53 3.72 12 3.72C8.47 3.72 5.18 5.8 2.89 9.4C1.99 10.81 1.99 13.18 2.89 14.59C5.18 18.19 8.47 20.27 12 20.27Z" stroke="#9EA3AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </Svg>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={w > 600 ? styles._____frame : styles._____frame}>
                <Text style={w > 600 ? styles.debeteneralmenos8caracteres : styles.Mdebeteneralmenos8caracteres}>
                    {w > 600 ? 'Debe tener al menos 8 caracteres.' : (
                        <TouchableOpacity onPress={() => console.log('Olvidaste tu contraseña')}>
                            <Text>
                                {'¿Olvidaste tu contraseña?'}
                            </Text>
                        </TouchableOpacity>)}
                </Text>
            </View>
        </View>
    )
}

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
    ___frame: {
        alignSelf: "stretch",
        height: 59,
        alignItems: "flex-start",
        rowGap: 0
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
    MinputBox: {
        height: 48,
        width: 327,
        alignItems: "flex-start",
        rowGap: 8
    },
    M___frame: {
        alignSelf: "stretch",
        height: 48,
        alignItems: "center",
        rowGap: 8
    },
    M_____frame: {
        alignSelf: "stretch",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 38
    },
    Mdebeteneralmenos8caracteres: {
        textAlign: "right",
        color: "rgba(112, 101, 240, 1)",
        fontFamily: plusJakartaSans,
        fontSize: 14,
        fontWeight: "500",
        letterSpacing: 0,
    }

})