import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Circle, Path, Svg } from 'react-native-svg'
import plusJakartaSans from '../../assets/fonts/PlusJakartaSans-Regular.ttf'

export default function SubirFoto() {


    const w = Dimensions.get('window').width;

    return (
        <>
            <View style={styles.subitufoto}>
                <TouchableOpacity onPress={() => console.log('Subi tu foto')}>
                    <View style={styles.icono}>
                        <Svg style={styles.ellipse26} width="47" height="47" viewBox="0 0 47 47" fill="none" >
                            <Circle cx="23.5" cy="23.5" r="23" fill="#F7F7FD" stroke="#E0DEF7" />
                        </Svg>
                        <View style={styles.icon}>
                            <Svg style={styles.gallery} width="21" height="21" viewBox="0 0 21 21" fill="none" >
                                <Path d="M7.875 19.25H13.125C17.5 19.25 19.25 17.5 19.25 13.125V7.875C19.25 3.5 17.5 1.75 13.125 1.75H7.875C3.5 1.75 1.75 3.5 1.75 7.875V13.125C1.75 17.5 3.5 19.25 7.875 19.25Z" stroke="rgba(108, 114, 127, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <Path d="M7.875 8.75C8.8415 8.75 9.625 7.9665 9.625 7C9.625 6.0335 8.8415 5.25 7.875 5.25C6.9085 5.25 6.125 6.0335 6.125 7C6.125 7.9665 6.9085 8.75 7.875 8.75Z" stroke="rgba(108, 114, 127, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <Path d="M2.33624 16.5813L6.64999 13.685C7.34124 13.2213 8.33874 13.2738 8.95999 13.8075L9.24874 14.0613C9.93124 14.6475 11.0337 14.6475 11.7162 14.0613L15.3562 10.9375C16.0387 10.3513 17.1412 10.3513 17.8237 10.9375L19.25 12.1625" stroke="rgba(108, 114, 127, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </Svg>

                        </View>
                        <View style={styles._icon}>
                            <Svg style={styles.vector} width="2" height="10" viewBox="0 0 2 10" fill="none" >
                                <Path d="M1 1.66667V8.33334" stroke="#47BEA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </Svg>

                            <Svg style={styles._vector} width="10" height="2" viewBox="0 0 10 2" fill="none" >
                                <Path d="M1.66669 1H8.33335" stroke="#47BEA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </Svg>
                        </View>
                    </View>
                </TouchableOpacity>

                <Text style={styles.nombre}>
                    {`Subí tu foto de perfil`}
                </Text>
            </View>
        </>
    )
}





const styles = StyleSheet.create({

    subitufoto: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 9
    },
    icono: {
        height: 47,
        width: 47
    },
    ellipse26: {
        position: "absolute",
        width: 47,
        height: 47,
        overflow: "visible"
    },
    icon: {
        position: "absolute",
        top: 13,
        height: 21,
        left: 13,
        width: 21,
        alignItems: "flex-start",
        rowGap: 0
    },
    gallery: {
        position: "absolute",

        height: 21,
        width: 21
    },
    _icon: {
        position: "absolute",
        top: 12,
        height: 10,
        left: 26,
        width: 10,
        alignItems: "flex-start",
        rowGap: 0
    },
    vector: {
        position: "absolute",
        top: 0,

        left: 4,
        overflow: "visible"
    },
    _vector: {
        position: "absolute",
        top: 4,
        left: 0,
        overflow: "visible"
    },
    nombre: {
        textAlign: "left",
        color: "rgba(0, 9, 41, 1)",
        fontFamily: plusJakartaSans,
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 22.399999618530273
    },
})