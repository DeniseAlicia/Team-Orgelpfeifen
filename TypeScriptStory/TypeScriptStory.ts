
Dungeonstart();

function Dungeonstart():void
{
    let Answer: string = prompt("You owe someone money but have none. While at the market, you heard about a dungeon in the forest where a treasure is hidden. You decide to enter the dungeon to find the treasure. When you arrive in the dungeon, you have the option to go Left, Straight, or Right. Which path do you choose? left forward right")!;
    
    switch (Answer)
    {
        case "left":
            let Answerleft: string = prompt("arriving in the leftroom you are presented with a tasty turkey. Do you want eat it?")!;
            break;
                switch(Answerleft)
                    {

                    }   
        case "forward":
            let Answerforward: string = prompt("opening the door infront, you realize that you are missing ground bellow your feet and plummit to your death")!;
            break;
        case "right":
            let Answerright: string = prompt("")!;
            break;
        default:
            Dungeonstart()!;
            break;
    }
}

function Answerleft():void
{
    
}
