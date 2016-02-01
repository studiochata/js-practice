var mynumber = Math.floor((Math.random() *50) + 1);

var yournumber = prompt("What's your number?");
while (yournumber >= mynumber)
{
    console.log("Yatzee!");
}
