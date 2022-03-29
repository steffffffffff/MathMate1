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
    let getal = document.getElementById("fibo1").value;
    let n1 = 0;
    let n2 = 1;
    let n3;
    document.getElementById("antwoord5").innerHTML = "0<br>1<br>";
    for(let i = 1; i<=getal;i++){
        document.getElementById("antwoord5").innerHTML += (n3 = n1 + n2) + "<br>",n1=n2,n2=n3;
        
        
    }
}document.getElementById('bereken5').addEventListener('click', Fibonacci);


function isPrime() {
    document.getElementById("antwoord6").innerHTML = " ";
    let getal = document.getElementById("prime1").value
    for (var counter = 2; counter <= getal; counter++) {

        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter%i===0 && i!==counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
                    document.getElementById("antwoord6").innerHTML += counter + "<br>";
        }
    }
    
    }document.getElementById('bereken6').addEventListener('click', isPrime);
    



    function collatz() {
        document.getElementById("antwoord7").innerHTML = " ";
        let number = document.getElementById("col1").value;

        let counter = 0;
        if (number > 0) {
            while (number !== 1) {
                if (number % 2 === 0) {
                    
                   document.getElementById("antwoord7").innerHTML += number = number / 2; 
                   document.getElementById("antwoord7").innerHTML += "<br>";
                    counter++;
                    
                } else if (number % 2 !== 0) {
                    
                    document.getElementById("antwoord7").innerHTML += number  = (number * 3) + 1;
                    document.getElementById("antwoord7").innerHTML += "<br>";
                    counter++;
                }
            }
            
        }
        
    }document.getElementById("bereken7").addEventListener('click',collatz)
    



    function is_perfect(){
        let number = document.getElementById("cell1").value;
        document.getElementById("antwoord8").innerHTML = " "
        let counter = 1;
        let counter2 = 1
       while(counter <= number){
        counter * counter2
        if((counter * counter2)== number)
        return counter;
        counter++;
       }
       counter2++

         
     } document.getElementById("bereken8").addEventListener('click', is_perfect)