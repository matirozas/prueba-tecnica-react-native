
import React, { useState } from 'react'
import { View, Text, TextInput, ImageBackground, StyleSheet, TouchableOpacity, Dimensions,  } from 'react-native'
import { Svg, Circle, Path, Line } from 'react-native-svg'
import Nav from './Nav'
import imagenAgente from '../../assets/images/inicio-sesion-agente-2.png'
import plusJakartaSans from '../../assets/fonts/PlusJakartaSans-Regular.ttf'



export default function Register() {

    const windowWidth = Dimensions.get('window').width;

    const [mostrarPass,setMostrarPass]=useState(true)
    const [form,setForm]=useState({nombre:'',telefono:'',email:'',contraseña:''})
    const [valido,setValido]=useState({nombre:null,telefono:null,email:null,contraseña:null})


    //validaciones

    const validarForm = ()=>{
        return (
            validarNombre(form.nombre) &&
            validarTelefono(form.telefono) &&
            validarEmail(form.email) &&
            validarContraseña(form.contraseña)
            )
    }

    const validarNombre =  (nombre) => {
        const regexSoloLetras = /^[a-zA-Z\s]+$/
      
        let partes = nombre.trim().split(' ')
        if (partes.length > 1) {
          if (regexSoloLetras.test(nombre)) {
              let nombreCompleto =  nombre
            .replace(/\s+/g, ' ') // quito los espacios en medio
            .toLowerCase()
            .trim()
            .replace(/(?:^|\s)\S/g, (c) => c.toUpperCase()) // primera letra en mayúscula
            console.log(nombreCompleto)
            setForm({
                ...form,
                ['nombre']: nombreCompleto,
            })
            setForm({
                ...form,
                ['nombre']: nombreCompleto,
            })
            setValido({...valido,nombre:true})
            console.log('nombre correcto')
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

    const validarTelefono=(telefono)=>{
        const regexTelefono = /^\+54[1-9]\d{9}$/
       if(!telefono){
        console.log('Debe completar el campo telefono')
        return false
       }else{
           if(regexTelefono.test(telefono)){
                console.log('telefono correcto',telefono)
               return true
            }else{
                console.log('Debe completar el telefono correctamente')
                return false
            }
       }
    }

    const validarEmail = (email) => {
        // Expresión regular para verificar el formato básico de un correo electrónico
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!email){
            console.log('debe completar el mail')
            return false
        }else{
            if(regexEmail.test(email)){
                console.log('email correcto',email)
                return true
            }else{
                console.log('complete el email correctamente')
                return false
            }
        }
    }
    

    const validarContraseña=(contraseña)=>{
        const regexContraseña = /^.{8,}$/
        if(!contraseña){
            console.log('debe completar la contraseña')
            return false
        }else{
            if(regexContraseña.test(contraseña)){
                console.log('contraseña correcta',contraseña)
                return true
            }else{
                console.log('complete el email correctamente')
                return false
            }
        }
    }


    //handles

    const handleVerPass=()=>{
       setMostrarPass(!mostrarPass)
    }
    const handleSubmit=()=>{

        validarForm() ?

        

        (fetch('https://tu-api.com/tu-endpoint', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
            
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Respuesta del servidor:', data)
            })
            .catch((error) => {
              console.error('Error al enviar la solicitud:', error)
            })
        ) :
        console.log('Faltan completar datos')
    }


    return (
        <View style={styles.registrateSerAgente}>
           <Nav />
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
           
            <View style={styles.form}>

                <View style={styles.subitufoto}>
                    
                    {/* icono */}
                    <View style={styles.icono}>
                        <Svg style={styles.ellipse26} width="47" height="47" viewBox="0 0 47 47" fill="none" >
                            <Circle cx="23.5" cy="23.5" r="23" fill="#F7F7FD" stroke="#E0DEF7" />
                        </Svg>
                        <View style={styles.icon}>
                            <Svg style={styles.gallery} width="21" height="21" viewBox="0 0 21 21" fill="none" >
                                <Path d="M7.875 19.25H13.125C17.5 19.25 19.25 17.5 19.25 13.125V7.875C19.25 3.5 17.5 1.75 13.125 1.75H7.875C3.5 1.75 1.75 3.5 1.75 7.875V13.125C1.75 17.5 3.5 19.25 7.875 19.25Z" stroke="#000929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <Path d="M7.875 8.75C8.8415 8.75 9.625 7.9665 9.625 7C9.625 6.0335 8.8415 5.25 7.875 5.25C6.9085 5.25 6.125 6.0335 6.125 7C6.125 7.9665 6.9085 8.75 7.875 8.75Z" stroke="#000929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <Path d="M2.33624 16.5813L6.64999 13.685C7.34124 13.2213 8.33874 13.2738 8.95999 13.8075L9.24874 14.0613C9.93124 14.6475 11.0337 14.6475 11.7162 14.0613L15.3562 10.9375C16.0387 10.3513 17.1412 10.3513 17.8237 10.9375L19.25 12.1625" stroke="#000929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

                    <Text style={styles.nombre}>
                        {`Subí tu foto de perfil`}
                    </Text>
                </View>
                

                {/* formulario */}
                
                <View  style={{width: 352, height: 48, paddingBottom: 29, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',}}>
                    <View style={styles.frame}>
                        <TextInput 
                            style={styles.inputForm}
                            onChange={(e)=>{
                                setForm({...form,['nombre']:e.target.value})
                            }}
                            placeholder='Nombre y Apellido'
                            >
                        </TextInput>
                    </View>
                    </View>
                    <View  style={{width: 352, height: 48, paddingBottom: 29, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',}}>

                    <View style={styles.frame}>
                        <TextInput 
                            onChange={(e)=>{
                                setForm({...form,['telefono']:e.target.value})
                            }}
                            style={styles.inputForm}
                            placeholder='+54 01 0200 000'/>
                    </View>
                    </View>
                    <View  style={{width: 352, height: 48, paddingBottom: 29, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',}}>

                    <View style={styles.__frame}>
                        < TextInput
                            onChange={(e)=>{
                                setForm({...form,['email']:e.target.value})
                            }}
                            style={styles.inputForm}
                            placeholder='hola@tuemail.com'/>
                    </View>
                    </View>

                    <View  style={{width: 352, height: 48, paddingBottom: 29, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',}}>


                    <View style={styles.___frame}>
                        
                        <View style={styles.____frame}>
                            <TextInput 
                                onChange={(e)=>{
                                    setForm({...form,['contraseña']:e.target.value})
                                }}
                                style={styles.inputForm}
                                secureTextEntry={mostrarPass} 
                                placeholder='Ingresá tu contraseña'/>
                            <TouchableOpacity  onPress={handleVerPass} style={styles.iconEyeOutline}>
                                <Svg  style={styles.eye} width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                    <Path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42001 13.98 8.42001 12C8.42001 10.02 10.02 8.42 12 8.42C13.98 8.42 15.58 10.02 15.58 12Z" stroke="#9EA3AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <Path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.4C18.82 5.8 15.53 3.72 12 3.72C8.47 3.72 5.18 5.8 2.89 9.4C1.99 10.81 1.99 13.18 2.89 14.59C5.18 18.19 8.47 20.27 12 20.27Z" stroke="#9EA3AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </Svg>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles._____frame}>
                        <Text style={styles.debeteneralmenos8caracteres}>
                            {`Debe tener al menos 8 caracteres.`}
                        </Text>
                    </View>
                </View>

            </View>
       

       

            <View style={styles.boton}>
                <View style={styles.botones}>
                    <TouchableOpacity onPress={handleSubmit} style={styles.botonregistrate}>
                        <Text style={styles.registrate}>
                            {`Registrate`}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.yatenésunacuentaIniciasesión}>
                    {`¿Ya tenés una cuenta?  `}<Text style={{ fontFamily: plusJakartaSans , fontSize: 14, "fontWeight": "700", "textAlign": "center", "letterSpacing": 0, "lineHeight": 19.59999966621399, "color": "rgba(0, 9, 41, 1)" }}>{`Iniciá sesión`}</Text>
                </Text>
            </View>

            {windowWidth >= 600 ? (
       <ImageBackground style={styles.iniciasesiónagente2} source={imagenAgente} />
      ) : null}
            
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

    //titulo

    titulos: {
        top: 179,
        left: 123,
        position:'absolute'
    },
    titulo: {
        alignItems: "flex-start",
        rowGap: 8,
    },
    bienvenido: {
        width: 352,
        color: "rgba(0, 9, 41, 1)",
        fontFamily: plusJakartaSans ,
        fontSize: 32,
        fontWeight: "700",
        lineHeight: 40
    },
    convertiteahoraenunagenteFlexy: {
        width: 352,
        textAlign: "left",
        color: "rgba(0, 9, 41, 1)",
        fontFamily: plusJakartaSans ,
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 24
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
        
        left:4,
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
        fontFamily: plusJakartaSans ,
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 22.399999618530273
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
    inputForm: {
        textAlign: "left",
        color: "rgba(0, 9, 41, 1)",
        fontFamily: plusJakartaSans,
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 24,
        width:2000,
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
        fontFamily: plusJakartaSans ,
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
    ingresátucontraseña: {
        
        textAlign: "left",
        color: "rgba(0, 9, 41, 1)",
        fontFamily: plusJakartaSans ,
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 19.200000762939453
    },
    iconEyeOutline: {
        
        height: 24,
        width: 24,
        alignItems: "flex-start",
        rowGap: 0
    },
    eye: {
        position: "absolute",
        height: 24,
        width: 24,
    },
    _____frame: {
        
        width: 352,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 38
    },
    debeteneralmenos8caracteres: {
        
        textAlign: "left",
        color: "rgba(108, 114, 127, 1)",
        fontFamily: plusJakartaSans ,
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
        fontFamily: plusJakartaSans ,
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
        fontFamily: plusJakartaSans ,
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 24
    },
    yatenésunacuentaIniciasesión: {
        
        textAlign: "center",
        color: "rgba(108, 114, 127, 1)",
        fontFamily: plusJakartaSans ,
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

