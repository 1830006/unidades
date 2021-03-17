function agregar(){
   
   	let numero = document.getElementById("productos").value;
   	let nombre = document.getElementById("productos");
	let selec = nombre.options[nombre.selectedIndex].text;
    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;
    let iva =document.getElementById('iva');
    let subtotal =document.getElementById('sub');
    let total =document.getElementById('total');
    let fila="<tr><td>"+numero+"<tr><td>"+selec+"</td><td>"+cantidad+"</td><td>"+precio+"</td></tr>";
    let btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tabla").appendChild(btn);
}