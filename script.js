// Función para navegar entre páginas
function irPagina(pagina) {
    window.location.href = pagina;
}

// PÁGINA 1 - Index
function saludarUsuario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    
    if (nombre && apellido) {
        const mensajeBienvenida = document.getElementById('mensajeBienvenida');
        const nombreUsuario = document.getElementById('nombreUsuario');
        
        mensajeBienvenida.textContent = `¡Bienvenido ${nombre} ${apellido}!`;
        nombreUsuario.innerHTML = `
            <h3>Usuario actual:</h3>
            <p>${nombre} ${apellido}</p>
        `;
        
        // Limpiar campos
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
    } else {
        alert('Por favor ingresa tu nombre y apellido');
    }
}

// PÁGINA 2 - Galería
function verificarEdad() {
    const edad = parseInt(document.getElementById('edad').value);
    const mensajeEdad = document.getElementById('mensajeEdad');
    
    if (edad) {
        if (edad > 20) {
            mensajeEdad.textContent = `Tienes ${edad} años - Eres mayor de 20 años`;
            mensajeEdad.style.color = '#28B463';
        } else {
            mensajeEdad.textContent = `Tienes ${edad} años - Eres menor o igual a 20 años`;
            mensajeEdad.style.color = '#E74C3C';
        }
    } else {
        alert('Por favor ingresa tu edad');
    }
}

// Cambiar imagen al pasar el mouse
function cambiarImagen(elemento, nuevaImagen) {
    elemento.src = nuevaImagen;
}

// Restaurar imagen original
function restaurarImagen(elemento, imagenOriginal) {
    elemento.src = imagenOriginal;
}

// PÁGINA 3 - Calculadora
function realizarOperacion(operacion) {
    let num1 = prompt(`Ingresa el primer número para ${operacion.toUpperCase()}:`);
    let num2 = prompt(`Ingresa el segundo número para ${operacion.toUpperCase()}:`);
    
    // Validar que sean números
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor ingresa números válidos');
        return;
    }
    
    let resultado;
    let operacionTexto;
    
    switch(operacion) {
        case 'suma':
            resultado = num1 + num2;
            operacionTexto = 'Suma';
            break;
        case 'division':
            if (num2 === 0) {
                alert('Error: No se puede dividir por cero');
                return;
            }
            resultado = num1 / num2;
            operacionTexto = 'División';
            break;
        case 'promedio':
            resultado = (num1 + num2) / 2;
            operacionTexto = 'Promedio';
            break;
        default:
            alert('Operación no válida');
            return;
    }
    
    // Mostrar resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h3>Resultado de ${operacionTexto}:</h3>
        <p>Números: ${num1} y ${num2}</p>
        <p>Resultado: ${resultado}</p>
    `;
}

// Mensaje de bienvenida automático
document.addEventListener('DOMContentLoaded', function() {
    const mensajeBienvenida = document.getElementById('mensajeBienvenida');
    if (mensajeBienvenida && mensajeBienvenida.textContent === '¡Bienvenido!') {
        setTimeout(() => {
            mensajeBienvenida.textContent = '¡Bienvenido a nuestro sitio web!';
        }, 1000);
    }
});