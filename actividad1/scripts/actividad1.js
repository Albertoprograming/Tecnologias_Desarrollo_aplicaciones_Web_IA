const estudiantes = [];

document.getElementById("agregar").addEventListener("click", async () => {
    const nuevoEstudiante = new Map();

    nuevoEstudiante.set('nombre', prompt("Ingrese el nombre del estudiante:"));
    nuevoEstudiante.set('edad', parseInt(prompt("Ingrese la edad del estudiante:")));
    nuevoEstudiante.set('grado', prompt("Ingrese el grado del estudiante:"));

    const calificacionesInput = prompt("Ingrese las calificaciones del estudiante (separadas por comas):");
    const calificaciones = calificacionesInput.split(',').map(Number);

    nuevoEstudiante.set('calificaciones', calificaciones);
    estudiantes.push(nuevoEstudiante);

    document.getElementById("output").innerHTML = 'Estudiante agregado con éxito.';
});

document.getElementById("mostrarEstudiantes").addEventListener("click", () => {
    let mostrasEstudiantes = 'Información de Estudiantes:<br>';

    estudiantes.forEach(estudiante => {
        mostrasEstudiantes += 'Nombre: ' + estudiante.get('nombre') + '<br>';
        mostrasEstudiantes += 'Edad: ' + estudiante.get('edad') + '<br>';
        mostrasEstudiantes += 'Grado: ' + estudiante.get('grado') + '<br>';
        mostrasEstudiantes += 'Calificaciones: ' + estudiante.get('calificaciones') + '<br>';
        mostrasEstudiantes += '-----------------------<br>';
    });

    document.getElementById("output").innerHTML = mostrasEstudiantes;
});

document.getElementById("calcular").addEventListener("click", async () => {
    const nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
    const estudiante = estudiantes.find(est => est.get('nombre') === nombreEstudiante);

    if (estudiante) {
        const calificaciones = estudiante.get('calificaciones');
        const promedio = calificaciones.reduce((sum, calificacion) => sum + calificacion, 0) / calificaciones.length;
        document.getElementById("output").innerHTML = 'Promedio de Calificaciones de ' + nombreEstudiante + ': ' + promedio;
    } else {
        document.getElementById("output").innerHTML = 'Estudiante no encontrado.';
    }
});

document.getElementById("salir").addEventListener("click", () => {
    document.getElementById("output").innerHTML = 'Saliendo del programa.';
});
