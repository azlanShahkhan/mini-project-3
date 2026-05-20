let n=Math.floor(Math.random()*100)+1, g;
while((g=prompt("Guess 1-100"))!=n){
  alert(g<n?"Too low":"Too high");
}
alert("Correct! The number was "+n);
