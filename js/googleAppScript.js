document.addEventListener('DOMContentLoaded', function () {

    // URL del Google Apps Script
    const url = "https://script.google.com/macros/s/AKfycbxgtE4K1OQuU4yBVHsB_IIK7RqDFVVoCVROGWXwBGCO8N0lt2xsSNxqIBiyXS3QKSKk/exec";

    
    // Elementos del formulario
    const form = document.getElementById('rsvp-form');
    const success = document.getElementById('success');
    const error = document.getElementById('error');
    const loader = document.getElementById('loader');

    // Ocultar mensajes de éxito y error al cargar la página
    success.style.display = 'none';
    error.style.display = 'none';
    loader.style.display = 'none';


    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validar campos requeridos
        success.style.display = 'none';
        error.style.display = 'none';
        loader.style.display = 'inline-block';

        // Datos del formulario
        const data = {
            fullname: document.getElementById('fullname').value.trim(),
            asistencia: document.getElementById('asistencia').value == "Selecciona una opción" ? "" : document.getElementById('asistencia').value,
            invitados: document.getElementById('invitados').value == "Selecciona una opción" ? "" : document.getElementById('invitados').value,
            alergias: document.getElementById('alergias').value.trim(),
            peques: document.getElementById('peques').value == "Selecciona una opción" ? "" : document.getElementById('peques').value,
            detalle_peques: document.getElementById('detalle-peques').value.trim(),
            mensaje: document.getElementById('mensaje').value.trim()
        };  
        
        // console.log(data);
        

        // Validar campos requeridos
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            console.log("Registro exitoso:", response);
            loader.style.display = 'none';
            success.style.display = 'block';
            form.reset();
        })
        .catch(error => {
            console.error("Error:", error);
            loader.style.display = 'none';
            error.style.display = 'block';
        });
    });
});
