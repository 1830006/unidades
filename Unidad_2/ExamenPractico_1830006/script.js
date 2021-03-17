function calcula(){

    let num= document.getElementById("tabla").value;
    let res = document.getElementById("resultados").value;
    let error_t = document.getElementById("error_tabla");
    let error_r = document.getElementById("error_resultados");
    let mu = document.getElementById("result")

    error_t.innerText="";
    
    if (num <=1 || num>50){
        error_t.innerText="Ingrese otro Numero de Acuerdo al Rango Establecido";

    }else{
        
        if (res <=1 || res>20){
        error_r.innerText="Ingrese otro Numero de Acuerdo al Rango Establecido";
        }}
        else{
            mu.innerHTML =" ";

            let div="<div>";
            let res2=0;
            for (let i=1; i<=res;i++){
                res2=num*i;
                for(let j=1; j<=1;j++){
                    div+="<p>"+num+"x"+i+"="+res2+"</p>";
                }
            }
            div+="</div>";
            mu.innerHTML=div;
        }
    }
