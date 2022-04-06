let player ={
    damage: 4,
    magic: 1,
    maxhp: 40,
    hp: 40,
    lvl:1,
    maxxp: 5,
    xp: 0,
    defence: 0
}

document.getElementById("playerxp").innerHTML = "xp: "+ player.xp+ "/" +player.maxxp;
document.getElementById("lvl").innerHTML = "lvl: "+ player.lvl
let enemy ={
    damage: 2,
    magic: 1,
    maxhp: 20,
    hp: 20,
    lvl:1,
}
let boss={
    damage: 10,
    magic: 1,
    maxhp: 50,
    hp: 50,
    lvl:1
}

document.getElementById("enemyhp").innerHTML = "hp: "+ enemy.hp+ " ";


function attack(){
    let lost = false
    let won = false
    let rng = Math.ceil(Math.random() * 8);
    let bchance = Math.ceil(Math.random() * 8);
    let boss = false
    let enemyrng = Math.ceil(Math.random() * 10);
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
            if(boss == true){
                document.getElementById("enemy3").style
                document.getElementById("playerxp").innerHTML = "xp: "+(player.xp = player.xp + 9)+ "/"+ player.maxxp;
                boss = false;
            }
            document.getElementById("playerxp").innerHTML = "xp: "+(player.xp = player.xp + 1)+ "/"+ player.maxxp;
            
            won = true

            //player lvl up
            
            if(player.xp >= player.maxxp){
                player.xp = 0;
                document.getElementById("info").innerHTML = "lvl up!";
                player.damage = player.damage + (Math.floor(player.damage*1.5) + 2);
                player.maxhp = player.maxhp + (Math.floor(player.maxhp/10)+ 5)
                document.getElementById("lvl").innerHTML = "lvl: "+ (player.lvl = player.lvl + 1);
                document.getElementById("playerxp").innerHTML = "xp: "+player.xp+ "/"+ (player.maxxp = player.maxxp + Math.floor(player.maxxp*0.5)+3);
                
            }
        }
    }

    // player out levels the enemy
    if((player.lvl*2) > enemy.lvl){
        enemy.maxhp = enemy.maxhp + 5;
        enemy.lvl = enemy.lvl + 1;
    }
    //player dies
    if(player.hp <= 0){
        lost = true;
        if(lost == true){
            player.xp = 0;
            player.hp = player.maxhp
        }
    }

    //reset battle
    if(won == true){

        document.getElementById("enemy1").style.display = "none";
        document.getElementById("enemy2").style.display = "contents";
        enemy.hp = enemy.maxhp

        if(player.lvl >= 3){
        if(bchance = 1){
            enemy.hp = enemy.hp * 2;
            enemy.damage = enemy.damage * 2;
            boss = true;
            
            player.hp = player.maxhp;
            
        }
    }
    }else{
       
        document.getElementById("enemy1").style.display = "contents";
        document.getElementById("enemy2").style.display = "none";
    }
}document.getElementById("attack1").addEventListener('click', attack);






