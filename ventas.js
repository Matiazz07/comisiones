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
    let cmpSueldoBase=document.getElementById("txtSUeldoBase");
    let cmpVentas=document.getElementById("txtVentas");
    let cmpPrecio=document.getElementById("txtPrecio");
    let sueldoBaseStr=cmpSueldoBase.value;
    let ventasStr=cmpVentas.value;
    let precioStr=cmpPrecio.value;
    let sueldoBase=parseFloat(sueldoBaseStr);
    let ventas=parseFloat(ventasStr);
    let precioProducto=parseFloat(precioStr);
    
}