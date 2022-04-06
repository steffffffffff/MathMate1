let player ={
    damage: 4,
    lvl:1,
    maxxp: 5,
    xp: 0,
}

document.getElementById("playerxp").innerHTML = "xp: "+ player.xp+ "/" +player.maxxp;
document.getElementById("lvl").innerHTML = "lvl: "+ player.lvl
let enemy ={
    maxhp: 40,
    hp: 40,
    lvl:1,
}


document.getElementById("enemyhp").innerHTML = "hp: "+ enemy.hp+ " ";
document.getElementById("enemylvl").innerHTML = "lvl: "+ enemy.lvl+ " ";

function attack(){
    
    let won = false
    let rng = Math.ceil(Math.random() * 8);
    

    //dealing damage
    if (enemy.hp >= 0){
        if(rng != 8){
        document.getElementById("enemyhp").innerHTML = "hp: " + (enemy.hp = (enemy.hp - player.damage));
        document.getElementById("info").innerHTML = "hit!"
    }else{document.getElementById("enemyhp").innerHTML = "hp: " + (enemy.hp = enemy.hp - (player.damage*2))
document.getElementById("info").innerHTML = "CRIT!"}
    

    //enemy dies
        if (enemy.hp <= 0){
            document.getElementById("info").innerHTML = "win!";
            
            document.getElementById("playerxp").innerHTML = "xp: "+(player.xp = player.xp + enemy.lvl)+ "/"+ player.maxxp;
            won = true

            //player lvl up
            
            if(player.xp >= player.maxxp){
                player.xp = 0;
                document.getElementById("info").innerHTML = "lvl up!";
                player.damage = player.damage + (Math.floor(player.damage*0.3) + 2);
                document.getElementById("lvl").innerHTML = "lvl: "+ (player.lvl = player.lvl + 1);
                document.getElementById("playerxp").innerHTML = "xp: "+player.xp+ "/"+ (player.maxxp = player.maxxp + Math.floor(player.maxxp*0.5)+3);
                
            }
        }
    }

    // player out levels the enemy
    if((enemy.lvl*1.7) < player.lvl){
        enemy.maxhp = (Math.ceil(enemy.maxhp*2)+ 20);
        document.getElementById("enemylvl").innerHTML = "lvl: "+ (enemy.lvl = enemy.lvl + 1) + " ";
    }
    

    //reset battle
    if(won == true){

        document.getElementById("enemy1").style.display = "none";
        document.getElementById("enemy2").style.display = "contents";
        enemy.hp = enemy.maxhp
    }else{
        document.getElementById("enemy1").style.display = "contents";
        document.getElementById("enemy2").style.display = "none";
    }
}document.getElementById("attack1").addEventListener('click', attack);






