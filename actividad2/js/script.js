// Obtén una referencia a los botones del juego
const buttons = document.querySelectorAll('.cuadricula button');
const playButton = document.querySelector('.footer button');
const mensaje = document.querySelector('.mensaje');

// Posición actual del espacio vacío
let emptyPosition = 15; // El último botón está vacío al principio

// Mezcla las fichas en el juego
const shuffle = () => {
  for (let i = 0; i < 1000; i++) {
    const randomIndex = Math.floor(Math.random() * 4);
    const newIndex = emptyPosition + [-1, 1, -4, 4][randomIndex];

    if (newIndex >= 0 && newIndex < 16) {
      buttons[emptyPosition].textContent = buttons[newIndex].textContent;
      buttons[newIndex].textContent = '';
      emptyPosition = newIndex;
    }
  }
};

// Función para verificar si se ha ganado el juego
const checkWin = () => {
  const order = Array.from(buttons).map((button) => button.textContent);
  if (order.join('') === '123456789101112131415') {
    mensaje.textContent = '¡Ganaste!';
  }
};

// Manejar el clic en las fichas del juego
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (Math.abs(emptyPosition - index) === 1 || Math.abs(emptyPosition - index) === 4) {
      buttons[emptyPosition].textContent = button.textContent;
      button.textContent = '';
      emptyPosition = index;
      checkWin();
    }
  });
});

// Manejar clic en el botón "Jugar" para mezclar las fichas
playButton.addEventListener('click', () => {
  mensaje.textContent = '';
  emptyPosition = 15; // Restablecer la posición del espacio vacío
  shuffle();
});

// Mezclar las fichas al cargar la página
shuffle();
