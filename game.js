let player ={
    damage: 2,
    magic: 2,
    maxhp: 30,
    hp: 30,
    lvl:1,
    maxxp: 5,
    xp: 0
}
document.getElementById("playerhp").innerHTML = "hp: "+ player.hp+ " ";
document.getElementById("playerxp").innerHTML = "xp: "+ player.xp+ "/" +player.maxxp;
let enemy ={
    damage: 2,
    magic: 2,
    maxhp: 20,
    hp: 20,
    lvl:1
}
document.getElementById("enemyhp").innerHTML = "hp: "+ enemy.hp+ " ";


function attack(){
    let won = false
    let rng = Math.ceil(Math.random() * 8);

    //dealing damage
    if (enemy.hp > 0){
        if(rng != 8){
        document.getElementById("enemyhp").innerHTML = enemy.hp = enemy.hp - player.damage;
        document.getElementById("info").innerHTML = "hit!"
    }else{document.getElementById("enemyhp").innerHTML = enemy.hp = enemy.hp - (player.damage*2)
document.getElementById("info").innerHTML = "CRIT!"}
        if (enemy.hp <= 0){
            document.getElementById("info").innerHTML = "win!";
            document.getElementById("playerxp").innerHTML = "xp: "+(player.xp = player.xp + 1)+ "/"+ player.maxxp;
            
            won = true

            //player lvl up
            if(player.xp == player.maxxp){
                player.xp = 0;
                
                document.getElementById("info").innerHTML = "lvl up!";
                player.damage = player.damage + (Math.ceil(player.damage/2));
                player.lvl = player.lvl++;
                document.getElementById("playerxp").innerHTML = "xp: "+player.xp+ "/"+ (player.maxxp = player.maxxp + 5);
            }
        }
    }
    
    //reset battle
    if(won == true){
        enemy.hp = enemy.maxhp
    }

}document.getElementById('attack'),addEventListener('click', attack);