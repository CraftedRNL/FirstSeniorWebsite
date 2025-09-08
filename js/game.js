let village = false;
let demonKingCastle = false;
let loot = false;
let help = false;
let fightKing = false;
let runAway = false;


document.getElementById("option-1").addEventListener("click", function() {
    
    if(!village){
        village = true;
        toVillage();
    }else if(!loot){
        loot = true;
        lootVillage();
    }else if(!fightKing){
        fightKing = true;
    }
});
document.getElementById("option-2").addEventListener("click", function() {
    if(!demonKingCastle){
        village = true;
        demonKingCastle = true;
        toDemonKingCastle();
    }else if(!help){
        help = true;
    }else if(!runAway){
        runAway = true;
    }
});
function theEND(){
    document.body.style.backgroundColor = "red";
}
function toVillage() {
    const para = document.createElement("h2");
    para.innerText = "You make your way to the beginner village.";
    document.getElementById('text-box').appendChild(para);
    document.getElementById("option-1").innerHTML = "[Loot the houses]"
    document.getElementById("option-2").innerHTML = "[Help the villagers]"
}
function toDemonKingCastle() {
    const para = document.createElement("h2");
    para.innerText = "You make your way to the Demon King's Castle.";
    document.getElementById('text-box').appendChild(para);
    document.getElementById("option-1").innerHTML = "[Fight the Demon King]"
    document.getElementById("option-2").innerHTML = "[Run Away]"
}
function lootVillage() {
    const para = document.createElement("h2");
    para.innerText = "You barge into the houses of the local villagers and proceed to loot them. Before you can make it any further, a guard cuts you from side to side, your body sliding off of you towards the ground. THE END";
    document.getElementById('text-box').appendChild(para);
    // theEND();
}
function helpVillagers() {
    const para = document.createElement("h2");
    para.innerText = "You help the villagers with common chores and are rewarded with a chestplate!";
    document.getElementById('text-box').appendChild(para);
    document.getElementById('chestplate').style.opacity = '1';
    // theEND();

}