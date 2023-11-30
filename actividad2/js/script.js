document.addEventListener('DOMContentLoaded', function() {
  const botones = document.querySelectorAll('.cuadricula button');
  const boton_jugar = document.querySelector('.footer button');
  const contMovimientos = document.querySelector('.footer span:nth-child(2)');
  const contime = document.querySelector('.footer span:nth-child(3)');

  let miPuzzle; // Variable para guardar la instancia del juego

  boton_jugar.addEventListener('click', function() {
    // Crear una nueva instancia del juego cuando se presione el botón Jugar
    const sizeTablero = 4; // Define el tamaño del tablero (cambia esto según tus necesidades)
    const miTiempo = new tiempo(); // Instancia de tiempo
    const miTablero = new tablero(sizeTablero); // Instancia de tablero

    miPuzzle = new Puzzle(miTablero, miTiempo, contMovimientos);

    // Inicializar el juego
    miPuzzle.inicio();
  });

  class tiempo {
    constructor() {
      this.segundos = 0;
      this.intervalo = null;
    }

    iniciartime() {
      this.intervalo = setInterval(() => {
        this.segundos++;
        contime.textContent = `Tiempo: ${this.segundos}`;
      }, 1000); // Actualizar cada segundo
    }
  }

  class pieza {
    constructor() {
      // Propiedades de las piezas, si son necesarias
    }
  }

  class tablero {
    constructor(size) {
      this.size = size;
      this.piezas = []; // Almacenar las piezas del rompecabezas
    }
  
    crearpiezas() {
      for (let i = 0; i < this.size * this.size - 1; i++) {
        const unaPieza = new pieza(); // Crear una instancia de pieza
        this.piezas.push(unaPieza);
      }
      this.piezas.push(null); // La última pieza será la pieza vacía
    }
  
    mezclar() {
      for (let i = this.piezas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.piezas[i], this.piezas[j]] = [this.piezas[j], this.piezas[i]];
      }
    }

    moverPieza(direccion) {
      // Encuentra la posición de la pieza vacía (null)
      const posicionVacia = this.piezas.findIndex(pieza => pieza === null);

      // Encuentra las coordenadas x e y de la pieza vacía
      const filaVacia = Math.floor(posicionVacia / this.size);
      const columnaVacia = posicionVacia % this.size;

      let nuevaFila = filaVacia;
      let nuevaColumna = columnaVacia;

      // Actualiza las coordenadas según la dirección
      switch (direccion) {
        case 'arriba':
          nuevaFila--;
          break;
        case 'abajo':
          nuevaFila++;
          break;
        case 'izquierda':
          nuevaColumna--;
          break;
        case 'derecha':
          nuevaColumna++;
          break;
      }

      // Verifica si la nueva posición está dentro del tablero
      if (nuevaFila >= 0 && nuevaFila < this.size && nuevaColumna >= 0 && nuevaColumna < this.size) {
        // Calcula la nueva posición en el array de piezas
        const nuevaPosicion = nuevaFila * this.size + nuevaColumna;

        // Intercambia la pieza vacía con la pieza adyacente en la dirección indicada
        [this.piezas[posicionVacia], this.piezas[nuevaPosicion]] = [this.piezas[nuevaPosicion], this.piezas[posicionVacia]];

        // El movimiento fue válido
        return true;
      }

      // El movimiento no fue válido
      return false;
    }
  }

  class Puzzle {
    constructor(tablero, tiempo, contmov) {
      this.tablero = tablero;
      this.tiempo = tiempo;
      this.contmov = contmov;
    }

    inicio() {
      this.tablero.crearpiezas();
      this.tablero.mezclar();
      this.tiempo.iniciartime();
    }

    actualizarInterfaz() {
      botones.forEach((boton, indice) => {
        if (this.tablero.piezas[indice] !== null) {
          boton.textContent = this.tablero.piezas[indice].valor; // Asigna el valor de la pieza al botón
        } else {
          boton.textContent = ''; // La pieza vacía no tiene texto
        }
      });
    }
  }

  document.addEventListener('keydown', function(event) {
    if (miPuzzle && miPuzzle.tablero) {
      let movimientoValido = false;

      switch(event.key) {
        case 'ArrowUp':
          movimientoValido = miPuzzle.tablero.moverPieza('arriba');
          break;
        case 'ArrowDown':
          movimientoValido = miPuzzle.tablero.moverPieza('abajo');
          break;
        case 'ArrowLeft':
          movimientoValido = miPuzzle.tablero.moverPieza('izquierda');
          break;
        case 'ArrowRight':
          movimientoValido = miPuzzle.tablero.moverPieza('derecha');
          break;
      }

      if (movimientoValido) {
        // Actualizar la interfaz si el movimiento es válido
        miPuzzle.actualizarInterfaz();
      }
    }
  });
});
