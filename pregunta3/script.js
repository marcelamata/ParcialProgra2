function formulario() {

    var compra = document.getElementById("compra").value;
    var cantidad = document.getElementById("cantidad").value;
    var precio = document.getElementById("precio").value;

    var table = document.getElementById(" table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = compra;
    cell2.innerHTML = cantidad;
    cell3.innerHTML = precio;


    var subtotal = cantidad * precio
    document.getElementById("subtotal").innerHTML = subtotal;
}