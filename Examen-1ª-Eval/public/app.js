console.log("Hola mundo...");

document.getElementById('nuevaEntrada').addEventListener('click', function() {
    document.getElementById('formulario').style.display = 'block';
});

document.getElementById('formNuevaEntrada').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('formulario').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
    const confirmacionBorrar = document.getElementById('confirmacionBorrar');
    const btnBorrarConfirmar = document.getElementById('btnBorrarConfirmar');
    const btnBorrarCancelar = document.getElementById('btnBorrarCancelar');
    const botonesBorrar = document.querySelectorAll('.borrar');

    botonesBorrar.forEach(function (boton) {
        boton.addEventListener('click', function () {
            confirmacionBorrar.style.display = 'block';
        });
    });

    btnBorrarCancelar.addEventListener('click', function () {
        confirmacionBorrar.style.display = 'none';
    });

    btnBorrarConfirmar.addEventListener('click', function () {
        confirmacionBorrar.style.display = 'none';
    });
});
