// Función para mostrar mensaje de bienvenida
function mostrarBienvenida() {
    alert("¡Bienvenido/a a nuestro sitio web!");
}

// Función para solicitar nombre y apellido (solo en página principal)
function solicitarNombre() {
    if (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/")) {
        let nombre = prompt("Por favor, ingresa tu nombre:");
        let apellido = prompt("Por favor, ingresa tu apellido:");
        
        if (nombre && apellido) {
            document.getElementById("user-name").textContent = `Hola, ${nombre} ${apellido}`;
            // Guardar en localStorage para usar en otras páginas
            localStorage.setItem("userName", `${nombre} ${apellido}`);
        }
    } else {
        // Recuperar nombre de localStorage si está disponible
        const userName = localStorage.getItem("userName");
        if (userName) {
            document.getElementById("welcome-message").textContent += `, ${userName}`;
        }
    }
}

// Función para verificar edad (solo en página de galería)
function verificarEdad() {
    if (window.location.pathname.includes("pagina2.html")) {
        let edad = prompt("Por favor, ingresa tu edad:");
        
        if (edad) {
            const ageMessage = document.getElementById("age-message");
            if (parseInt(edad) > 20) {
                ageMessage.textContent = `Tienes ${edad} años, eres mayor de 20 años.`;
                ageMessage.style.color = "green";
            } else {
                ageMessage.textContent = `Tienes ${edad} años, eres menor o igual a 20 años.`;
                ageMessage.style.color = "blue";
            }
        }
    }
}

// Función para cambiar imagen al pasar el mouse (solo en página de galería)
function configurarEfectosImagenes() {
    if (window.location.pathname.includes("pagina2.html")) {
        const images = document.querySelectorAll('.gallery-image');
        
        images.forEach(img => {
            const originalSrc = img.src;
            
            img.addEventListener('mouseenter', function() {
                // Cambiar la imagen por una diferente al pasar el mouse
                const randomNum = Math.floor(Math.random() * 100) + 1;
                this.src = `https://picsum.photos/300/200?random=${randomNum}`;
            });
            
            img.addEventListener('mouseleave', function() {
                // Restaurar la imagen original al quitar el mouse
                this.src = originalSrc;
            });
        });
    }
}

// Función para calcular operaciones (solo en página de operaciones)
function calcular(operacion) {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }
    
    let resultado;
    let mensaje;
    
    switch(operacion) {
        case 'suma':
            resultado = num1 + num2;
            mensaje = `La suma de ${num1} y ${num2} es: ${resultado}`;
            break;
        case 'division':
            if (num2 === 0) {
                mensaje = "Error: No se puede dividir por cero.";
            } else {
                resultado = num1 / num2;
                mensaje = `La división de ${num1} entre ${num2} es: ${resultado}`;
            }
            break;
        case 'promedio':
            resultado = (num1 + num2) / 2;
            mensaje = `El promedio de ${num1} y ${num2} es: ${resultado}`;
            break;
        default:
            mensaje = "Operación no válida.";
    }
    
    alert(mensaje);
}

// Ejecutar funciones cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    mostrarBienvenida();
    solicitarNombre();
    verificarEdad();
    configurarEfectosImagenes();
});