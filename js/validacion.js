let regexNombre=/^[A-Z][a-z]+$/
let regexCorreo=/^\w+@(hotmail|gmail|outlook|yahoo)\.com$/

const errorNombre=document.getElementById('error-nombre')
const errorCorreo=document.getElementById('error-correo')

const enviar=document.getElementById('enviar')

enviar.addEventListener('click',(e)=>{
    const cajaNombre=document.getElementById('nombre').value
    const cajaCorreo=document.getElementById('correo').value
    
    if(!regexNombre.test(cajaNombre))errorNombre.textContent='Nombre incorrecto'
    if(!regexCorreo.test(cajaCorreo))errorCorreo.textContent='Correo incorrecto'

    if(regexNombre.test(cajaNombre))errorNombre.textContent=''
    if(regexCorreo.test(cajaCorreo))errorCorreo.textContent=''

    if(regexNombre.test(cajaNombre) && regexCorreo.test(cajaCorreo)){
        errorNombre.textContent=''
        errorCorreo.textContent=''
        alert('Datos bien ingresados')
        cajaNombre=''
        cajaCorreo=''
    }
    e.preventDefault()
})

