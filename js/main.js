
        document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('citaForm');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const especialidad = document.getElementById('especialidad').value;
        const fechaHora = document.getElementById('fechaHora').value;

        mensaje.textContent = ''; // Limpia el mensaje previo

        if (nombre === "" || telefono === "" || especialidad === "") {
            mensaje.textContent = "Error: Por favor, complete todos los campos requeridos (Nombre, Teléfono y Especialidad).";
            mensaje.style.color = 'red';
            setTimeout(() => { mensaje.textContent = ''; }, 5000); 
            return;
        }

        if (telefono.length < 8) {
            mensaje.textContent = "Error: El número de teléfono parece incompleto o inválido (mínimo 8 dígitos).";
            mensaje.style.color = 'red';
            setTimeout(() => { mensaje.textContent = ''; }, 5000);
            return;
        }
        
        mensaje.textContent = `¡Solicitud enviada! Estimado(a) ${nombre}, confirmaremos su cita de ${especialidad} para el ${fechaHora} al ${telefono}.`;
        mensaje.style.color = 'green';
        
        setTimeout(() => {
            mensaje.textContent = '';
        }, 7000);
        
        form.reset();
    });
});
