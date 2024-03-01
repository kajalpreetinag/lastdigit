const input = require("readline-sync")
let n = input.questionInt("enter number: ")

if(n>0)
{
    P=n%10;
    console.log(P)
}
else{console.log("not positive");}