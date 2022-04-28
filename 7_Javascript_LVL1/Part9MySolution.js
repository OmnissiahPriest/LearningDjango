var name=prompt("What is your name?");
console.log(name[0]);
var surname=prompt("What is your surname?");
console.log(surname[0]);
var age=prompt("How ols are you?");
console.log(age);
var height = prompt("How tall are you?");
console.log(height);
var pet =prompt("What is your pet's name?")
console.log(pet[pet.length-1]);

if (name[0]==surname[0]&&age>20&&age<30&&height>170&&pet[pet.length-1]=="y") {
  console.log("You're busted, Mr. "+surname);
}
alert("Thank You!")
