var mynumber = Math.floor((Math.random() *50) + 1);

var yournumber = prompt("What's your number");
if(yournumber <= mynumber)
{
    alert("Yatzee!");
}
else
{
    alert("Womp Womp");
}