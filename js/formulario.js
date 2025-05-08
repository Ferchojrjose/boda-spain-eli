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