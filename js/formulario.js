document.addEventListener('DOMContentLoaded', function () {
    const selectPeques = document.getElementById('peques');
    const detallePeques = document.getElementById('detalle-peques');

    // Estado inicial: deshabilitado
    detallePeques.disabled = true;

    selectPeques.addEventListener('change', function () {
        if (selectPeques.value === 'Sí') {
            detallePeques.disabled = false;
        } else {
            detallePeques.disabled = true;
            detallePeques.value = ''; // Limpia el campo si está deshabilitado
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const asistenciaSelect = document.getElementById('asistencia');
    const invitadosSelect = document.getElementById('invitados');

    // Escuchar cuando cambie la opción de asistencia
    asistenciaSelect.addEventListener('change', function () {
        if (asistenciaSelect.value === 'Sí') {
            invitadosSelect.required = true;
        } else {
            invitadosSelect.required = false;
            invitadosSelect.value = 'Selecciona una opción'; // Limpiar si eligen "No"
        }
    });
});
