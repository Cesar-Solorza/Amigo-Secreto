// Lista donde se almacenarán los amigos ingresados
let amigos = [];

// Funcion con la cual se agregara un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco antes y después

    // Validación: No permite valores vacíos y solo los strings son válidos
    if (nombre === "" || !isNaN(nombre)) {
        alert("Por favor, ingresa un nombre válido.");
        input.value = "";
        return;
    }

    // Convierte la Primer Letra en Mayúscula
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    // Comprobar si el nombre ya está en la lista (sin importar mayúsculas/minúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("Este nombre ya está en la lista.");
        input.value = "";
        return;
    }

    // Agregar el nombre a la lista amigos
    amigos.push(nombre);

    // Actualizar la lista en la página
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar la lista de amigos en la pantalla
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    
    // Recorre la lista amigos y crea un elemento li para cada uno
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
        
    });
}

// Función para sortear un amigo secreto aleatorio
function sortearAmigo() {
    // valida que haya 2 amigos como minimo en la lista
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos en la lista para sortear.");
        return;
    }
    
    // agrega mayuscula a la primer letra del nombre
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Ocultar la lista de amigos
    document.getElementById("listaAmigos").style.display = "none";

    // Mostrar solo el nombre sorteado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: "<strong>${amigoSorteado}</strong>" </li>`;

    }