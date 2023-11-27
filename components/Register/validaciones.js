

const validarNombre = (nombre) => {
    const regexSoloLetras = /^[a-zA-Z\s]+$/
    let partes = nombre.trim().split(' ')
    if (partes.length > 1) {
        if (regexSoloLetras.test(nombre)) {
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

export {validarContraseña, validarEmail,validarNombre,validarTelefono}