function enviarWhatsApp(numeroSeleccionado) {
    // 1. Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const localidad = document.getElementById('localidad').value;
    const telefono = document.getElementById('telefono').value; // Este es el teléfono del cliente, no el de destino
    const viaje = document.getElementById('viaje').value;
    const personas = document.getElementById('personas').value;

    // 2. Definir los números de WhatsApp de destino
    const numeroWhatsApp1 = "5491168178012"; // ¡IMPORTANTE! Reemplaza con el número real (ej: +54911XXXXXX)
    const numeroWhatsApp2 = "5491125879031"; // ¡IMPORTANTE! Reemplaza con el otro número real

    // 3. Armar el mensaje
    const mensaje = `¡Hola!%20Quiero%20reservar%20un%20viaje.%0A%0A` +
                    `Nombre%20Completo:%20${nombre.replace(/ /g, '%20')}%0A` + // Reemplaza espacios por %20 para URL
                    `Localidad:%20${localidad.replace(/ /g, '%20')}%0A` +
                    `Teléfono%20de%20Contacto:%20${telefono}%0A` +
                    `Viaje%20Seleccionado:%20${viaje.replace(/ /g, '%20')}%0A` +
                    `Cantidad%20de%20Personas:%20${personas}`;

    // 4. Determinar a qué número enviar el mensaje
    let numeroDestino;
    if (numeroSeleccionado === 1) {
        numeroDestino = numeroWhatsApp1;
    } else {
        numeroDestino = numeroWhatsApp2;
    }

    // 5. Construir la URL de WhatsApp
    const urlWhatsApp1 = `https://wa.me/${5491168178012}?text=${mensaje}`;

    const urlWhatsApp2 = `https://wa.me/${5491125879031}?text=${mensaje}`;


    // 6. Abrir WhatsApp en una nueva pestaña
    window.open(urlWhatsApp1, '_blank');
    window.open(urlWhatsApp2, '_blank');
}
