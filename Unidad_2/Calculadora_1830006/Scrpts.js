let ar1 = 0;
let ar2 = 0;
let operacion;

function calcular(){
    let bt1 =document.getElementById("1");
    let bt2 =document.getElementById("2");
    let bt3 =document.getElementById("3");
    let bt4 =document.getElementById("4");
    let bt5 =document.getElementById("5");
    let bt6 =document.getElementById("6");
    let bt7 =document.getElementById("7");
    let bt8 =document.getElementById("8");
    let bt9 =document.getElementById("9");
    let bt0 =document.getElementById("0");
    let btc =document.getElementById("c");
    let btm =document.getElementById("+");
    let btr =document.getElementById("-");
    let btx =document.getElementById("x");
    let bte =document.getElementById("/");
    let bti =document.getElementById("=");
    let res = document.getElementById("resultado");

    bt1.onclick = function(a){
        res.textContent = res.textContent + "1";
    }

    bt2.onclick = function(a){
        res.textContent = res.textContent + "2";
    }

    bt3.onclick = function(a){
        res.textContent = res.textContent + "3";
    }

    bt4.onclick = function(a){
        res.textContent = res.textContent + "4";
    }

    bt5.onclick = function(a){
        res.textContent = res.textContent + "5";
    }

    bt6.onclick = function(a){
        res.textContent = res.textContent + "6";
    }

    bt7.onclick = function(a){
        res.textContent = res.textContent + "7";
    }

    bt8.onclick = function(a){
        res.textContent = res.textContent + "8";
    }

    bt9.onclick = function(a){
        res.textContent = res.textContent + "9";
    }

    bt0.onclick = function(a){
        res.textContent = res.textContent + "0";
    }

    btc.onclick = function(a){
        reset();
    }

    btm.onclick = function(a){
        ar1 = res.textContent;
        operacion = "+";
        ocultar();
    }

    btr.onclick = function(a){
        ar1 = res.textContent;
        operacion = "-";
        ocultar();
    }

    bte.onclick = function(a){
       ar1 = res.textContent;
        operacion = "/";
        ocultar();
    }

    btx.onclick = function(a){
        ar1 = res.textContent;
        operacion = "*";
        ocultar();
    }

    bti.onclick = function(a){
        ar2 = res.textContent; 
        operar();
    }

        function ocultar(){
        res.textContent = "";
    }

    function reset(){
        res.textContent = "";
        ar1 = 0;
        ar2 = 0;
        operacion = "";
    }


    function operar(){
        let ress= 0;
        switch (operacion) {
            case "+":
                res.textContent = ress;
                ress = parseInt(ar1) + parseInt(ar2);
                break;

            case "-":
                ress = parseInt(ar1) - parseInt(ar2);
                break;

            case "/":
                ress = parseInt(ar1) / parseInt(ar2);
                break;

            case "*":
                ress = parseInt(ar1) * parseInt(ar2);
                break;
            }
            reset();
            res.textContent = ress;
    }
}