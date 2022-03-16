
function optellen(){
    let getal1 = document.getElementById("optellen1").value;
    let getal2 = document.getElementById("optellen2").value;
    document.getElementById("antwoord").innerHTML = +getal1 + +getal2;   
}document.getElementById('bereken').addEventListener('click', optellen);

function aftrekken(){
    let getal1 = document.getElementById("aftrekken1").value;
    let getal2 = document.getElementById("aftrekken2").value;
    document.getElementById("antwoord1").innerHTML = +getal1 - +getal2;  
}document.getElementById('bereken1').addEventListener('click', aftrekken);

function vermenigvuldigen(){
    let getal1 = document.getElementById("vermenigvuldigen1").value;
    let getal2 = document.getElementById("vermenigvuldigen2").value;
    document.getElementById("antwoord2").innerHTML = +getal1 * +getal2;  
}document.getElementById('bereken2').addEventListener('click', vermenigvuldigen);

function delen(){
    let getal1 = document.getElementById("delen1").value;
    let getal2 = document.getElementById("delen2").value;
    document.getElementById("antwoord3").innerHTML = +getal1 / +getal2;  
}document.getElementById('bereken3').addEventListener('click', delen);

function machtsverheffen(){
    let getal1 = document.getElementById("machtsverheffen1").value;
    let getal2 = document.getElementById("machtsverheffen2").value;
    document.getElementById("antwoord4").innerHTML = getal1 ** getal2;  
}document.getElementById('bereken4').addEventListener('click', machtsverheffen);

function percentage(){
    let getal1 = document.getElementById("percentage1").value;
    let getal2 = document.getElementById("percentage2").value;
    document.getElementById("antwoord5").innerHTML = +getal1 / 100 * +getal2+"%";  
}document.getElementById('bereken5').addEventListener('click', percentage);

function restwaarde(){
    let getal1 = document.getElementById("restwaarde1").value;
    let getal2 = document.getElementById("restwaarde2").value;
    document.getElementById("antwoord6").innerHTML = +getal1 % +getal2;  
}document.getElementById('bereken6').addEventListener('click', restwaarde);

function even(){
    let getal1 = document.getElementById("even1").value;
    if(getal1 % 2 == 0){
        document.getElementById("antwoord7").innerHTML = "true"; 
    }else{document.getElementById("antwoord7").innerHTML = "flase";}
}document.getElementById('bereken7').addEventListener('click', even);