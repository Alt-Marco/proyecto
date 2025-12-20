document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('citaForm');
    const modal = document.getElementById('modalExito');
    const modalMensaje = document.getElementById('modalMensaje');
    const cerrarModalBtn = modal.querySelector('.cerrar');
    const cerrarModalBtnInferior = modal.querySelector('.btn-cerrar-modal');

    form.addEventListener('submit', function (event) {
    
        event.preventDefault();


        const nombre = document.getElementById('nombre').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const fechaHora = document.getElementById('fechaHora').value;
        const especialidad = document.getElementById('especialidad').value;

        if (nombre === '' || telefono === '' || especialidad === '' || fechaHora === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }


        modalMensaje.textContent = `Gracias, ${nombre}. Hemos recibido tu solicitud de cita. Nos pondremos en contacto contigo a la brevedad.`;

      
        modal.style.display = 'block';

        
        form.reset();
    });

    
    function cerrarElModal() {
        modal.style.display = 'none';
    }

    
    cerrarModalBtn.addEventListener('click', cerrarElModal);
    cerrarModalBtnInferior.addEventListener('click', cerrarElModal);


    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            cerrarElModal();
        }
    });
});
