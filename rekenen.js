
function optellen(){

    let getal1 = document.getElementById("optellen1").value;
    let getal2 = document.getElementById("optellen2").value;


    document.getElementById("antwoord").innerHTML = +getal1 + +getal2;

    
    
}

document.getElementById('bereken').addEventListener('click', optellen);