/*
Se obtienen referencias a los elemneto del Dom Qque necesitaras manipular,
como el campo de entrada de texto, el boton de agregar tarea y la lista de tareas*/

const entradaTarea = document.getElementById("tarea");
const botonTarea = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");
/*
Esta funcion toma el texto del campo de entrada, crea un nuevo
elemento de lista (<li>) y lo agrega a la lista de tareas */

function agregarElemento() {
    const textoTarea = entradaTarea.value;

    if (textoTarea.trim() !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = textoTarea;
        //eliminar tareaas
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eiminar";
        botonEliminar.addEventListener("click", function(){
            //eloiminar al cickc
            listaTareas.removeChild(nuevaTarea);
        });

        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);

        entradaTarea.value = "";
    }
}

/*
Se agrega un listener para el boton */

botonTarea.addEventListener("click", agregarElemento);