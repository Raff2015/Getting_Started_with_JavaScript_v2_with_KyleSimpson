var teacher = "Edgar";
var twitterHandle = "erc0117";
var age = 31;

function whoAmI(myName, myNickname, myAge) {
    console.log(`
    Hi, I'm ${myName} (aka ${myNickname}),
    and I'm ${myAge} years old.
    `);
}

whoAmI(teacher, twitterHandle, age);