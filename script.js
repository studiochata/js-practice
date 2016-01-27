var mynumber = Math.floor((Math.random() *50) + 1);

var yournumber = prompt("What's your number");
if(yournumber <= mynumber)
{
    console.log("Yatzee!");
}
else
{
    console.log("Womp Womp");
}