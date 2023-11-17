
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
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

