function mostrarFechaHora() {
    const fecha = new Date();

    const opcionesFecha = { 
        year: 'numeric', month: 'long', day: 'numeric'
    };
    const opcionesHora = { 
        hour: '2-digit', minute: '2-digit', second: '2-digit' 
    };

    const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
    const horaFormateada = fecha.toLocaleTimeString('es-ES', opcionesHora);

    document.getElementById("fechaHora").innerHTML = `${fechaFormateada}  ${horaFormateada}`;
}

// Actualizamos la fecha y hora cada segundo
setInterval(mostrarFechaHora, 1000);
;

// Llamada inicial para mostrar la fecha y hora al cargar la página
mostrarFechaHora();
