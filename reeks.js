function tafels(){
    let getal1 = document.getElementById("tafel1").value;
    let getal2 = document.getElementById("tafel2").value;
    let i = 1;
    document.getElementById("antwoord").innerHTML = " ";
    while(i <=getal2){
     document.getElementById("antwoord").innerHTML += getal1*i + "<br>", i++;
    }
}document.getElementById('bereken1').addEventListener('click', tafels);

function exponenet(){
    let getal1 = document.getElementById("expo1").value;
    let getal2 = document.getElementById("expo2").value;
    let i = 1;
    document.getElementById("antwoord2").innerHTML = " ";
    while(i <=getal2){
     document.getElementById("antwoord2").innerHTML += "1" + getal1*i + "<br>", i++;
    }
}document.getElementById('bereken2').addEventListener('click', exponenet);


function breuken(){
    let getal1 = document.getElementById("breuk1").value;
    let aantal = 1;
    let x = 1;
    document.getElementById("antwoord3").innerHTML = " ";
    while(aantal <= getal1){
        document.getElementById("antwoord3").innerHTML +=  "1 / " + aantal + " = " +  1 / x + "<br>" ,aantal++,x++;
    }
    
}document.getElementById('bereken3').addEventListener('click', breuken);

function Kwadraten(){
    let getal1 = document.getElementById("kwa1").value;
    let aantal = 1;
    let x = 1;
    document.getElementById("antwoord4").innerHTML = " ";
    while(aantal <= getal1){
        document.getElementById("antwoord4").innerHTML +=  aantal + "^2 " + " = " +  x ** 2 + "<br>" ,aantal++,x++;
    }
    
}document.getElementById('bereken4').addEventListener('click', Kwadraten);

function Fibonacci(){
    let getal2 = document.getElementById("fibo1").value;
    let n1 = 0;
    let n2 = 1;
    let n3 = +n1 + +n2;
    
    while(getal2 == getal2){
        document.getElementById("antwoord5").innerHTML = "bhjsaskdfh";
    }
}document.getElementById('bereken5').addEventListener('click', Fibonacci);
