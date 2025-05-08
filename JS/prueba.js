let consecutivos = 0;
let resultado = 0;

function ver() {
    const fila = parseFloat(document.getElementById("fila").value);
    const columna = parseFloat(document.getElementById("columna").value);
    const suma = fila + columna;
    const resultado = suma % 2 === 0 ? "0" : "X";

    const index = (fila - 1) * 3 + columna;
    const label = document.getElementById(index);

    if (label) {
        label.outerHTML = `<button>${resultado}</button>`;
    }

    if (resultado === ultimoResultado) {
        consecutivos++;
    } else {
        consecutivos = 1;
    }
    ultimoResultado = resultado;

    if (consecutivos === 3) {
        document.getElementById('mensaje').innerHTML='<label>Ganaste</label>'
    } else {
        mensaje.innerHTML = "";
    }
}