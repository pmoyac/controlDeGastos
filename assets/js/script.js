let listaNombresGastos = [];
let listaDescripcion = [];
let listaValoresGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let descGasto = document.getElementById('descripcion').value;
    let valorGasto = document.getElementById('valorGasto').value;

    if (valorGasto > 150) {
        alert("Cuidado con los gastos.")
    }

    listaNombresGastos.push(nombreGasto);
    listaDescripcion.push(descGasto);
    listaValoresGastos.push(valorGasto);


    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');

    let listaGastosHtml = '';
    let totalGasto = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const descGasto = listaDescripcion[posicion];
        const valorGasto = Number(listaValoresGastos[posicion]);
        listaGastosHtml += `<li> ${elemento} - (${descGasto} )  - $ ${valorGasto.toFixed(2)}  
        <button onclick="eliminarGasto(${posicion});">Eliminaar</button>
        <button onclick="botonEditar(${posicion});">Editar</button>
        </li> `;
        totalGasto += Number(valorGasto);
    });

    listaElementos.innerHTML = listaGastosHtml;
    totalElementos.innerHTML = totalGasto.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaDescripcion.splice(posicion, 1)
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos(); ``
}

function botonEditar(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('descripcion').value = listaDescripcion[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];

    let boton = document.getElementById('botonFormulario');
    boton.innerText = 'Actualizar';
    boton.onclick = function () {
        editarGasto(posicion);

    };
}

function editarGasto(posicion) {
    console.log("metodo  ejecutado");
    listaNombresGastos[posicion] = document.getElementById('nombreGasto').value;
    listaDescripcion[posicion] = document.getElementById('descripcion').value;
    listaValoresGastos[posicion] = document.getElementById('valorGasto').value;
    actualizarListaGastos();
    let boton = document.getElementById('botonFormulario');
    boton.innerText = 'Agregar Gasto';
    boton.onclick = function () {
        clickBoton();

    };
}