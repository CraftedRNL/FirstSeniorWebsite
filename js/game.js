let state = "start"

let str = 1;
let dex = 1;
let con = 1;
let int = 1;

let stats = [str, dex, con, int];

document.getElementById("option-1").addEventListener("click", function () {
    if (state === "start") {
        state = "village";
        toVillage();
    } else if (state === "village") {
        state = "loot";
        lootVillage();
    } else if (state === "help") {
        state = "pressDeeper";
        pressDeeper();
    } else if (state === "pressDeeper") {
        state = "scaleCliff";
        scaleCliff();
    } else if (state === "hiddenPath"){
        state = "answer16";
        answer16();
    }

    if (state === "demonKingCastle") {
        state = "fightDemonKing";
        fightDemonKing();
    }
});
document.getElementById("option-2").addEventListener("click", function () {
    if (state === "start") {
        state = "demonKingCastle";
        toDemonKingCastle();
    } else if (state === "demonKingCastle") {
        state = "runAway";
        runAway();
    }
    if (state === "village") {
        state = "help";
        helpVillagers();
    } else if (state === "help") {
        state = "camp";
        camp();
    } else if (state === "pressDeeper") {
        state = "hiddenPath";
        hiddenPath();
    } else if (state === "hiddenPath") {
        state = "answer15";
        answer15();
    }
});

function makeMessage(message) {
    const para = document.createElement("h4");
    para.innerText = message;
    document.getElementById('text-box').appendChild(para);
}

function theEND() {
    makeMessage("THE END, YOU HAVE FAILED, REFRESH TO TRY AGAIN");
    document.getElementById('image').style.backgroundImage = `url("../img/death.webp")`;
}
function toVillage() {
    makeMessage("You make your way to the beginner village.");
    makeMessage("What do you do?");
    document.getElementById("option-1").innerHTML = "[Loot the houses]"
    document.getElementById("option-2").innerHTML = "[Help the villagers]"
}
function toDemonKingCastle() {
    makeMessage("You arrive at the Demon King's Castle. The Demon King appears before you, towering over you with a menacing glare.");
    makeMessage("What do you do?");
    document.getElementById("option-1").innerHTML = "[Fight the Demon King]"
    document.getElementById("option-2").innerHTML = "[Run Away]";
    document.getElementById('image').style.backgroundImage = `url("../img/demon_king.jpg")`;
}
function fightDemonKing() {
    totalStats = 0;
    for (let i = 0; i < stats.length; i++) {
        totalStats += stats[i];
    }
    for (let i = 0; i < stats.length; i++) {
        if (stats[i] >= 10 && totalStats >= 20) {
            makeMessage("The demon king has fallen, his reign of terror ended, and his darkness scattered like smoke before the light. The courage and strength that carried you through this battle will be remembered as the turning point when despair gave way to hope. The land breathes again, and the people can finally lift their heads without fear. Today is not just a victory over an enemy, but proof that even the greatest shadows cannot withstand the will to fight for a brighter future.");
            document.getElementById("option-1").innerHTML = "THE";
    document.getElementById("option-2").innerHTML = "END";
    document.getElementById('image').style.backgroundImage = `url("../img/victory.jfif")`;
            break;
        }else if(stats[i] < 10 || totalStats < 20){
            makeMessage("You fought bravely, but your strength was not enough to overcome the might before you. The battle is lost, the light falters, and the shadows close in around you. Though your spirit burned fiercely, it could not withstand the storm, and now silence claims what courage could not save. This defeat is heavy, but even in failure, the memory of your struggle endures.");
            theEND();
            break;
        }
    }

}
function runAway(){
    if(dex >=20){
        makeMessage("You successfully escaped the Demon King's Castle, your agility and quick thinking allowing you to evade capture. As you flee, the shadows of the castle loom behind you, but your heart is light with the knowledge that you have lived to fight another day. The path ahead is uncertain, but your spirit remains unbroken, ready to face whatever challenges may come.");
    }else{
        makeMessage("As you turn to flee, the Demon King's dark magic ensnares you, and despite your desperate efforts, you find yourself unable to escape his grasp. The shadows close in, and your vision fades as the weight of defeat settles upon you. In this moment of despair, you realize that sometimes, courage alone is not enough to overcome the darkness. The battle is lost, and with it, the hope for a brighter future dims.");
        theEND();
    }
}
function lootVillage() { // no continue
    makeMessage("You barge into the houses of the local villagers and proceed to loot them. Before you can make it any further, a guard cuts you from side to side, your body sliding off of you towards the ground. THE END");
    theEND();
}
function helpVillagers() {
    makeMessage("You help the villagers with common chores and are rewarded with a chestplate!");
    makeMessage("Wearing the chestplate, you follow rumors into the Whispering Forest, a place where shadows speak and the air is heavy with dread.");
    makeMessage("What do you do?");
    con +=5;
    stats[2] = con;
    document.getElementById('con').innerText = "Consitution (CON): " + con;
    document.getElementById('chestplate').style.opacity = '1';
    document.getElementById("option-1").innerHTML = "[Press Deeper]"
    document.getElementById("option-2").innerHTML = "[Camp at its Edge]";
    document.getElementById('image').style.backgroundImage = `url("../img/forest.jpg")`;
}
function pressDeeper() {
    makeMessage("You clash with monstrous wolves, their fangs deflecting harmlessly from your new chestplate. After a harrowing battle, you discover the skeletal remains of a forgotten ranger, his enchanted boots intact. When you pull them on, you feel lighter, faster, ready to outrun the shadows themselves.")
    makeMessage("Beyond the forest lies the jagged Stormcrag Mountains, their peaks like teeth tearing at the sky. Lightning flickers as you approach a sheer cliff, with a faint trail curling to the side. You may attempt to scale the cliff, or take the hidden path.");
    makeMessage("What do you do?");
    document.getElementById('shoes').style.opacity = '1';
    document.getElementById("option-1").innerHTML = "[Scale the Cliff]"
    document.getElementById("option-2").innerHTML = "[Take the Hidden Path]"
    dex +=10;
    stats[1] = dex;
    document.getElementById('dex').innerText = "Dexterity (DEX): " + dex;
    document.getElementById('image').style.backgroundImage = `url("../img/mountain.jfif")`;
}
function camp() {
    makeMessage("The night stretches into terror, as glowing eyes surround you and claws rip through your armor—your screams swallowed by the endless dark.");
    theEND();
    
}
function scaleCliff() {
    makeMessage("As you near the cliff's top, suddendly, a stone crumbles beneath your grip, and try as you may, you fail to hold on steady. You fall from a great height, bones shattering on the rocks below.");
    theEND();
}
function hiddenPath() {
    makeMessage("The mountain itself seems to test you, winds screaming against your chestplate and boots. At the path’s end you discover a shrine, glowing faintly with power. Resting across the altar are chaos swords, its blades etched with runes that hum as you grasp the hilt. Its warmth drives away the storm, and you know it was meant for your hand.");
    makeMessage("At the mountain’s base lies a ruined sanctuary, where a wandering priestess appears, her staff glowing with runes. She blocks your path, declaring that to face the Demon King you must prove not only strength but wisdom. Runes form numbers in the air, and she intones: 'Solve this, or fall to the curse of ignorance. If x = 2, what is the value of 3x² + 4x – 5?' ")
    makeMessage("What is the answer?");
    document.getElementById('swords').style.opacity = '1';
    str +=10;
    stats[0] = str;
    document.getElementById('str').innerText = "Strength (STR): " + str;
    document.getElementById("option-1").innerHTML = "[16]"
    document.getElementById("option-2").innerHTML = "[15]";
    document.getElementById('image').style.backgroundImage = `url("../img/priestess.jpg")`;
}
function answer16() {
    makeMessage("You have answered incorrectly. The priestess's eyes flash with disappointment as she raises her staff, and a wave of dark energy engulfs you. Your vision fades as you succumb to the curse of ignorance, your journey ending in the shadows of your own folly.");
    theEND();
}
function answer15() {
    makeMessage("The priestess nods solemnly, stepping aside to reveal a path leading to the Demon King's Castle. 'You have proven your wisdom,' she says. 'May your strength and courage see you through the trials ahead.' With her blessing, you proceed towards the looming fortress, ready to confront the darkness within.");

    document.getElementById('helmet').style.opacity = '1';
    int +=10;
    stats[4] = int;
    document.getElementById('int').innerText = "Intelligence (INT): " + int;
    state = "demonKingCastle";
    toDemonKingCastle();
}