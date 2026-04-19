const VENTAS_BASE =5;

function calcularComision(numeroVentas,precioProducto){
    let comision=0;
    if(numeroVentas > VENTAS_BASE){
        let ventasExtra=numeroVentas-VENTAS_BASE;
        comision = ventasExtra*(precioProducto*0.10);
    }
    return comision
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