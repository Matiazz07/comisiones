const VENTAS_BASE =5;

function calcularComision(numeroVentas,precioProducto){
    let comision=0;
    if(numeroVentas > VENTAS_BASE){
        let ventasExtra=numeroVentas-VENTAS_BASE;
        comision = ventasExtra*(precioProducto*0.10);
    }
    return comision
}

function validarInput(idInput, idMensaje) {
    let input = document.getElementById(idInput);
    let spanMensaje = document.getElementById(idMensaje);
    
    let valor = input.value.trim();
    spanMensaje.textContent = "";
    spanMensaje.style.color = "#ef4444";
    spanMensaje.style.fontSize = "13px";
    spanMensaje.style.display = "block";
    if (valor === "") {
        spanMensaje.textContent = "Este campo no puede estar vacío.";
        return;
    }
    let soloNumeros = /^[0-9]+$/; 
    if (!soloNumeros.test(valor)) {
        spanMensaje.textContent = "Error: Por favor, ingresa solo números.";
        return; 
    }
    if (valor.length > 5) {
        spanMensaje.textContent = "Alerta: Has sobrepasado el número máximo de 5 caracteres.";
        return; 
    }
}

function calcular(){
    let sueldoBase=recuperarTxtAFloat("txtSueldoBase");
    let ventas=recuperarTxtAFloat("txtVentas");
    let precio=recuperarTxtAFloat("txtPrecio");
    let comision=calcularComision(ventas,precio);
    let total=sueldoBase+comision;
    mostrarEnSpan("spSueldoBase",sueldoBase);
    mostrarEnSpan("spComision",comision);
    mostrarEnSpan("spTotal",total);
}