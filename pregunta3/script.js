function formulario() {
    var table = document.getElementById(" table");
    var compra = document.getElementById("compra").value;
    var precio = document.getElementById("precio").value;
    var cantidad = document.getElementById("cantidad").value;

    var row = table.insertRow(0);
    var cell1 = row.insertRow(1);
    var cell2 = row.insertRow(2);
    var cell3 = row.insertRow(3);

    document.getElementById(" table").innerHTML = compra;
    cell2.innerHTML = precio;
    cell3.innerHTML = cantidad;

    var subtotal = cantidad * precio
    document.getElementById("subtotal").innerHTML = subtotal;
}