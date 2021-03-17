function Resultado(){
    let num = document.getElementById("num").value;
    let mult = document.getElementById("num2").value;
    let content = document.getElementById("op");

        content.innerHTML = "";

        let tabla = "<table>";
        let resu = 0;
        for (let i = 0; i <= mult; i++) {
            tabla += "<tr>";
            resu = num*i;
            for (let j = 1; j <= 1; j++) {
                tabla += "<td>" + num + "</td>";
                tabla += "<td>" + " x " + "</td>"; 
                tabla += "<td>" + i + "</td>";
                tabla += "<td>" + " = " + "</td>";
                tabla += "<td>" + resu + "</td>";   

            }
            tabla += "</tr>";
        }
        tabla += "</table>";
        
}