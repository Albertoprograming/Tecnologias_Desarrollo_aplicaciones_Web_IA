$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Porfavor rellene los campos marcados con *</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
// Función para mostrar las notificaciones
function mostrarNotificaciones() {
    document.getElementById('notificacionesPopUp').style.display = 'block';
}

// Función para cerrar las notificaciones
function cerrarNotificaciones() {
    document.getElementById('notificacionesPopUp').style.display = 'none';
}

// Agrega un evento de clic al documento para cerrar las notificaciones al hacer clic en cualquier parte de la pantalla
document.addEventListener('click', function (event) {
    var notificacionesPopUp = document.getElementById('notificacionesPopUp');
    var notificacionesLink = document.getElementById('notificacionesLink');

    // Verifica si se hizo clic fuera del cuadro de notificaciones y del enlace de notificaciones
    if (event.target !== notificacionesPopUp && event.target !== notificacionesLink && !notificacionesPopUp.contains(event.target)) {
        notificacionesPopUp.style.display = 'none';
    }
});