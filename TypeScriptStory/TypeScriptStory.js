"use strict";
Dungeonstart("start");
function Dungeonstart(storypart) {
    switch (storypart) {
        /*1*/
        case "start":
            let Storystart = prompt("You are in debt to someone but have no money.\nWhile at the market, you hear about a dungeon in the forest where a treasure is hidden.\nEquipped with a shield and sword, you decide to enter the dungeon to find the treasure.\nWhen you finally arrive in the dungeon, you have three paths to choose from: left, forward, or right.\nWhich path do you choose?");
            if (Storystart == "left") {
                Dungeonstart("left");
            }
            else if (Storystart == "forward") {
                Dungeonstart("forward");
            }
            else if (Storystart == "right") {
                Dungeonstart("right");
            }
            else {
                alert("You wrote something wrong!");
                Dungeonstart("start");
            }
            break;
        /*2*/
        case "left":
            let Answerleft = prompt("Upon entering the left room, you come across a tasty turkey.\nDo you want to eat it?");
            if (Answerleft == "yes") {
                Dungeonstart("EatTurkey");
            }
            else if (Answerleft == "no") {
                Dungeonstart("start");
            }
            else {
                alert("You wrote something wrong!");
                Dungeonstart("left");
            }
            break;
        /*2.1*/
        case "EatTurkey":
            let turkeyeat = alert("As you enjoy the delicious turkey, suddenly the realization hits you: it's poisoned!\n\nYou Die!");
            Dungeonstart("GameOver1");
            break;
        /*3*/
        case "forward":
            let Answerforward = alert("opening the door infront, you realize that you are missing ground bellow your feet and plummit to your death!\n\nYou Die!");
            Dungeonstart("GameOver1");
            break;
        /*4*/
        case "right":
            let Answerright = prompt("As you open the door, you see a long corridor. You walk through the corridor and see a figure in the distance. Do you continue or do you give up and return to the village? \ngo on or go back to the village");
            if (Answerright == "go back to the village") {
                alert("Game Over!!");
            }
            else if (Answerright == "go on") {
                Dungeonstart("corridorwalk2");
            }
            else {
                alert("You wrote something wrong!");
                Dungeonstart("right");
            }
            break;
        /*4.1*/
        case "corridorwalk2":
            let Answercorridorwalk2 = prompt("You decide to keep going and notice how the figure gets closer and closer. Do you decide to:\nturn around or approach the figure?");
            if (Answercorridorwalk2 == "turn around") {
                alert("Game Over!");
            }
            else if (Answercorridorwalk2 == "approach the figure") {
                Dungeonstart("fightstart");
            }
            else {
                alert("You wrote something wrong!");
                Dungeonstart("corridorwalk2");
            }
            break;
        /*4.2*/
        case "fightstart":
            alert("You decide to approach the figure, when suddenly it starts to run towards you. You realize that this figure is a goblin. When you are within reach of the goblin, it begins to attack you with its raised sword.");
            Dungeonstart("What do you do?");
            break;
        /*fightchoice1*/
        case "What do you do?":
            let decision1 = prompt("What do you do? \n\nattack or block?");
            if (decision1 == "attack") {
                let attackfightstart = alert("The goblin and you try to attack at the same time, but you stumble, and the goblin's attack chops off your arm.\nThere is blood everywhere, and you scream in despair and pain.\nThe goblin makes the next attack and separates your head from your body.\nYour head flies to the floor.\n\nYou Die!");
                Dungeonstart("GameOver1");
            }
            else if (decision1 == "block") {
                alert("Just before the goblin hits you, you swing your shield towards the sword and block the attack.");
                Dungeonstart("fight");
            }
            else {
                alert("You wrote something wrong!");
                Dungeonstart("What do you do?");
            }
            break;
        /*4.3*/
        case "fight":
            alert("The kobold is pushed back by your block and loses posture for a short time.");
            Dungeonstart("What do you do?2");
            break;
        /*fightchoice2*/
        case "What do you do?2":
            let decision2 = prompt("What do you do? \n\nattack or block?");
            if (decision2 == "attack") {
                alert("You waste no time swinging your sword and cutting his arm. He lies on the floor and makes unimaginable noises because of this pain. You go to him and thrust your sword into his heart.");
                Dungeonstart("Quest");
            }
            else if (decision2 == "block") {
                alert("You block again, but this time the goblin knows it, he breaks through your block and the goblin punctures your leg.\nHe pulls his sword out of your leg and stabs your chest, the blood flows out of you.\n\nYou Die!");
                Dungeonstart("GameOver1");
            }
            else {
                alert("You wrote something wrong!");
                Dungeonstart("What do you do?2");
            }
            break;
        /*4.4*/
        case "Quest":
            let Quest = prompt("You continue further and see a note. It says: In 3 of the cases you will die. There is only one way to reach the treasure.\nWe are in the year 1350. A merchant sold a vase two decades ago that was 631 years old. What the merchant didn't know is that the vase was 200 years older.\nThe correct door is the one that shows the correct age of the vase.\n\nThe left door shows the number 831, followed by 851, 651, and on the right side is the number 631.\n\nWhich door do you choose?");
            if (Quest == "831") {
                Dungeonstart("831");
            }
            else if (Quest == "851") {
                Dungeonstart("851");
            }
            else if (Quest == "651") {
                Dungeonstart("651");
            }
            else if (Quest == "631") {
                Dungeonstart("631");
            }
            else {
                alert("You wrote something wrong!");
                Dungeonstart("Quest");
            }
            break;
        /*4.4.1*/
        case "831":
            alert("Behind the first door lies a room where the floor suddenly comes alive. Countless tentacles shoot up from the ground and ensnare you with relentless force.\nThey inexorably pull you into the dark depths of a devouring abyss as you desperately scream for help.\nYour cries are stifled in the horrifying labyrinth of tentacles that, without mercy, drag you into the darkness until you are gone forever.\n\nYou Die!");
            Dungeonstart("GameOver2");
            break;
        /*4.4.2*/
        case "851":
            alert("In a moment of hope, you open the chest that supposedly holds riches. However, instead of precious treasures, it reveals only a simple piece of paper. The message on it shatters your expectations:\nThe treasure you seek is not to be found in this dungeon. It lies in the dungeon further north in the Snow Troll Mountains.\nThis disappointing truth permeates your thoughts as frustration, despair, and anger well up within you. Your heart pounds with fury and disappointment as the burden of your debts weighs on you like an insurmountable obstacle. The hopelessness of your situation presses heavily on your soul, and you feel like a lost ship in a raging storm, with no safe harbor in sight. In the midst of this bleak scenario, you ask yourself, What should I do?.");
            alert("The adventure from Part 1 is coming to a close.\nPre-order Part 2 of the game now!");
            break;
        /*4.4.3*/
        case "651":
            alert("You step through the door and suddenly the room transforms into an endless labyrinth full of disturbing noises and hallucinogenic illusions. You wander lost, slowly succumbing to madness, until you finally collapse in a dark corner of the labyrinth.\n\nYou Die!");
            Dungeonstart("GameOver2");
            break;
        /*4.4.4*/
        case "631":
            alert("You enter the door and discover a tempting chest. The moment you approach it, the door slams shut with a deafening bang. Panic rises within you as the walls ominously move towards you, making it hard to breathe as you are being squeezed.\n\nYou Die!");
            Dungeonstart("GameOver2");
            break;
        /*GameOverSpawnStart*/
        case "GameOver1":
            let DieFight = prompt("Do you wanna try again?");
            if (DieFight == "yes") {
                Dungeonstart("start");
            }
            else if (DieFight == "no") {
                alert("Game Over!");
            }
            else {
                alert("You wrote something wrong!");
                Dungeonstart("GameOver1");
            }
            break;
        /*GameOverSpawnQuest*/
        case "GameOver2":
            let DieQuest = prompt("Do you wanna try again?");
            if (DieQuest == "yes") {
                Dungeonstart("Quest");
            }
            else if (DieQuest == "no") {
                alert("Game Over!");
            }
            else {
                alert("You wrote something wrong!");
                Dungeonstart("GameOver2");
            }
            break;
    }
}
