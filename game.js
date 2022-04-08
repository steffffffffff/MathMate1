let player ={
    damage: 4,
    lvl:1,
    maxxp: 5,
    xp: 0,
    sp: 50,
}
let enemy ={
    maxhp: 40,
    hp: 40,
    lvl:1,
};

let ex = 0
let cc = 0
let xc = 0

document.getElementById("amount1").innerHTML = "amount: "+ex;
document.getElementById("amount2").innerHTML = "amount: "+cc;
document.getElementById("amount3").innerHTML = "amount: "+xc;

let excost = 5
let cccost = 3
let xccost = 1
document.getElementById("cost1").innerHTML = "cost: "+ excost;
document.getElementById("cost2").innerHTML = "cost: "+ cccost;
document.getElementById("cost3").innerHTML = "cost: "+ xccost;








document.getElementById("skillpoints").innerHTML = "skillpoints: "+ player.sp
document.getElementById("playerxp").innerHTML = "xp: "+ player.xp+ "/" +player.maxxp;
document.getElementById("lvl").innerHTML = "lvl: "+ player.lvl



document.getElementById("enemyhp").innerHTML = "hp: "+ enemy.hp+ " ";
document.getElementById("enemylvl").innerHTML = "lvl: "+ enemy.lvl+ " ";

function attack(){
    let luck = 0
    let xcrng = Math.ceil(Math.random()*10)
    let won = false
    let rng = Math.ceil(Math.random() * 8);
    if(cc == 1){
        rng = Math.ceil(Math.random() * 6);
        xcrng = Math.ceil(Math.random() * 7);
    }
    if(cc == 2){
        rng = Math.ceil(Math.random() * 4);
        xcrng = Math.ceil(Math.random() * 5);
    }
    if(cc == 3){
        rng = Math.ceil(Math.random() * 2);
        xcrng = Math.ceil(Math.random() * 3);
    }




    //dealing damage
    if (enemy.hp >= 0){
        if(rng == 1){
            document.getElementById("enemyhp").innerHTML = "hp: " + (enemy.hp = enemy.hp - (player.damage*2))
            document.getElementById("info").innerHTML = "CRIT!"
    }else{
        document.getElementById("enemyhp").innerHTML = "hp: " + (enemy.hp = (enemy.hp - player.damage));
        document.getElementById("info").innerHTML = "hit!"
    }

    if(xcrng == 1){
        document.getElementById("playerxp").innerHTML = "xp: "+(player.xp = player.xp + xc)+ "/"+ player.maxxp;
    }
    


    //enemy dies
        if(rng == 1){
         if(ex == 2){
            if(enemy.hp < (enemy.maxhp/2)){
                won = true
            }
        }
        if(ex == 1){
            if(enemy.hp < (enemy.maxhp/4)){
                won = true
            }   
        }
        
        }
        if (enemy.hp <= 0){
            
            won = true

            
            
            
        }
    }

    // player out levels the enemy
    if((enemy.lvl*1.7) < player.lvl){
        enemy.maxhp = (Math.ceil(enemy.maxhp*2)+ 20);
        document.getElementById("enemylvl").innerHTML = "lvl: "+ (enemy.lvl = enemy.lvl + 1) + " ";
    }
    //lvl up
    if(player.xp >= player.maxxp){
            player.xp = 0;
            document.getElementById("info").innerHTML = "lvl up!";
            player.damage = player.damage + (Math.floor(player.damage*0.3) + 2);
            document.getElementById("lvl").innerHTML = "lvl: "+ (player.lvl = player.lvl + 1);
            document.getElementById("playerxp").innerHTML = "xp: "+player.xp+ "/"+ (player.maxxp = player.maxxp + Math.floor(player.maxxp*0.5)+3);
            document.getElementById("skillpoints").innerHTML = "skillpoints: "+(player.sp = player.sp + 1)
        }

    //reset battle
    if(won == true){

        document.getElementById("info").innerHTML = "win!";
            
            document.getElementById("playerxp").innerHTML = "xp: "+(player.xp = player.xp + enemy.lvl)+ "/"+ player.maxxp;


        

        document.getElementById("enemy1").style.display = "none";
        document.getElementById("enemy2").style.display = "contents";
        enemy.hp = enemy.maxhp
    }else{
        document.getElementById("enemy1").style.display = "contents";
        document.getElementById("enemy2").style.display = "none";
    }
}document.getElementById("attack1").addEventListener('click', attack);


function exbuy(){
    if(player.sp >= excost && ex < 2){
       document.getElementById("skillpoints").innerHTML = player.sp = player.sp - excost;
       document.getElementById("amount1").innerHTML = "amount: "+(ex = ex + 1);
        if(ex == 2){
            document.getElementById("amount1").innerHTML = "max"
        }
    }
}document.getElementById("upgrade1").addEventListener("click",exbuy);

function luckbuy(){
    if(player.sp >= cccost && cc < 3){
       document.getElementById("skillpoints").innerHTML = player.sp = player.sp - cccost;
       document.getElementById("amount2").innerHTML = "amount: "+(cc = cc + 1);
       document.getElementById("cost2").innerHTML = "cost: "+ (cccost = cccost + 3);
        if(cc == 3){
            document.getElementById("amount2").innerHTML = "max";
        }
    }
}document.getElementById("upgrade2").addEventListener("click",luckbuy);

function xcbuy(){
    if(player.sp >= xccost){
       document.getElementById("skillpoints").innerHTML = player.sp = player.sp - xccost;
       document.getElementById("amount3").innerHTML = "amount: "+(xc = xc + 1);
       document.getElementById("cost3").innerHTML = "cost: "+(xccost = xccost + 1)
        
    }
}document.getElementById("upgrade3").addEventListener("click",xcbuy);






