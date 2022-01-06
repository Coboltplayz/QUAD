/*This is the main function of the whole story */
var story;
function getStory(name) {
return { 
currentScene: "beginning", /*This is always the current scene. It changes when you click or choose choices.*/
beginning: { /*Events: pg1, pg2, and beginning*/
title: "Quack!            (First Chapter and the quarter of the game)", 
story: `You woke in the night and you stare at the clock, it was 3:AM.`,
image: "", 
choices: [
	{
	choice: "Go to Kitchen",
	destination: 'pg1'
	},
	{
	choice: "Go back to Bed", 
	destination: 'pg2'
	}
]
},
pg1: { /*From: beginning | To: pg3, pg4, pg5*/
title: "The Kitchen", 
story:`You went to the kitchen. You were hungry. So what will you eat?`,
image: "", 
choices: [
	{
	choice: "Burger",
	destination: 'pg3'
	},
	{
	choice: "Nothing", 
	destination: 'pg4'
	},
	{
	choice: "Apple", 
	destination: 'pg5'
	}
]
},
pg2: { /*From: beginning | To: pg4 and pg7*/
title: "Going to bed", 
story:`You go back to bed but you saw a shadow. What will you do?`,
image: "", 
choices: [
	{
	choice: "Go to bed",
	destination: 'pg6'
	},
	{
	choice: "Think what was that shadow", 
	destination: 'pg7'
	}
]
},
pg3: { /*From: pg1 | To: pg8 and pg7*/
title: "Eating the Burger", 
story:`You are gonna eat the burger so you pick it up and eat it but you saw a shadow. What will you do?`,
image: "", 
choices: [
	{
	choice: "Eat the burger",
	destination: 'pg8'
	},
	{
	choice: "Think what was that shadow", 
	destination: 'pg7'
	}
]
},
pg4: { /*From: pg1 and pg2 | To: pg7 and pg2*/
title: "Eating nothing", 
story:`You ate nothing and saw a shadow. What will you do?`,
image: "", 
choices: [
	{
	choice: "Think what was that shadow",
	destination: 'pg7'
	},
	{
	choice: "Go to bed", 
	destination: 'pg2'
	}
]
},
pg5: { /*From: pg1 | To: pg7 and pg8*/
title: "Eating the apple", 
story:`You are gonna eat the apple and saw a shadow. What will you do?`,
image: "", 
choices: [
	{
	choice: "Think what was that shadow",
	destination: 'pg7'
	},
	{
	choice: "Eat the apple", 
	destination: 'pg8mod1'
	}
]
},
pg6: { /*From: pg8 | To: pg9 and pg7*/
title: "Going to the bed", 
story:`You ignored the shadow and went to bed.`,
image: "", 
choices: [
	{
	choice: "Sleep",
	destination: 'pg9'
	},
	{
	choice: "Think what was that shadow", 
	destination: 'pg7'
	}
]
},
pg7: { /*From: pg2, pg3, pg4, pg5, pg6, and pg8| To: pg10 and pg11*/
title: "Knowing the Shadow", 
story:`You think what was the shadow. The shadow appeared in front of you. What will you do?`,
image: "", 
choices: [
	{
	choice: "Run",
	destination: 'pg10'
	},
	{
	choice: "Don't move", 
	destination: 'pg11'
	}
]
},
pg8: { /*From: pg3 and pg5 | To: pg6 and pg7*/
title: "Eating the burger", 
story:`You ignored the shadow and ate the burger.`,
image: "", 
choices: [
	{
	choice: "Go back to bed",
	destination: 'pg6'
	},
	{
	choice: "Think what was the shadow", 
	destination: 'pg7'
	}
]
},
pg8mod1: { /*From: pg3 and pg5 | To: pg6 and pg7*/
title: "Eating the apple", 
story:`You ignored the shadow and ate the apple.`,
image: "", 
choices: [
	{
	choice: "Go back to bed",
	destination: 'pg6'
	},
	{
	choice: "Think what was the shadow", 
	destination: 'pg7'
	}
]
},
pg9: { /*From: pg6| To: end*/
title: "Sleeping", 
story:`ZZZZZZZZZZZZZZZZZZZZZZzzzzzzzzzzzzzzzzzzzzzzzzzzz_`,
image: "", 
defaultDestination: "end",
buttonText: 'Next'
},
end: { /*From: anyDeath | To: beginning*/
title: "GAME OVER!", 
story:`You died ${name}, the end...`,
image: "", 
defaultDestination: "beginning",
buttonText: 'Restart I Guess?'
},
pg10: { /*From: pg7  | To: pg 12 and pg13*/
title: "Running", 
story:`You run and want to go outside your house. But there was a door that you lock every night. So what will you do ${name}?`,
image: "", 
choices: [
	{
	choice: "Open the door with a key",
	destination: 'pg12'
	},
	{
	choice: "Kick the door", 
	destination: 'pg13'
	}
]
},
pg11: { /*From: pg7 | To: end*/
title: "The shadows touch", 
story:`You did not move and froze to fear. The shadow touched you and it feel like it was cold. `,
image: "", 
choices: [
	{
	choice: "Continue",
	destination: 'end'
	}
]
},
pg12: { /*From: pg10 | To: pg13 and end*/
title: "Opening the door", 
story:`You find the key to open the door but you couldn't find the key. What will you do ${name}`,
image: "", 
choices: [
	{
	choice: "Kick the door",
	destination: 'pg13'
	},
	{
	choice: "Find the key", 
	destination: 'end'
	}
]
},
pg13: { /*From: pg10 and pg12 | To: pg14 and end*/
title: "Kicking the door", 
story:`You kicked the door but it won't budge open.`,
image: "", 
choices: [
	{
	choice: "Kick it again",
	destination: 'pg14'
	},
	{
	choice: "Give up", 
	destination: 'end'
	}
]
},
pg14: { /*From: pg13 | To: pg15 and pg16 */
title: "Kicking the door again", 
story:'You try kicking the door again and it open! So where will you go?',
image: "", 
choices: [
	{
	choice: "Go to your car",
	destination: 'pg15'
	},
	{
	choice: "Go to the other houses", 
	destination: 'pg16'
	}
]
},
pg15: { /*From: pg14 | To: pg17 and pg16 */
title: "Going to your car", 
story:`You go to your car and open the door with the keys. You go inside and saw the shadow following you. What will you do?`,
image: "", 
choices: [
	{
	choice: "Drive to the nearest police station",
	destination: 'pg17'
	},
	{
	choice: "Get out of the car", 
	destination: 'pg16'
	}
]
},
pg16: { /*From: pg16 and pg15 | To: pg18 and pg 19*/
title: "Going to other peoples house", 
story:`You go to the house of your neighbor.`,
image: "", 
choices: [
	{
	choice: "House of Kevin",
	destination: 'pg18'
	},
	{
	choice: "House of Sam", 
	destination: 'pg19'
	}
]
},
pg17: { /*From: pg 15 | To: pg20 and pg21*/
title: "Driving to the nearest police station", 
story:`You drive to the nearest police station and you saw that the police station was empty.`,
image: "", 
choices: [
	{
	choice: "Go to your car",
	destination: 'pg20'
	},
	{
	choice: "Go inside the police station", 
	destination: 'pg21'
	}
]
},
pg17mod1: { /*From: pg23 | To: pg26 and pg21mod1*/
title: "Going to the police station", 
story:`You go to the police station and you saw that the police station was empty.`,
image: "", 
choices: [
	{
	choice: "Run away from the police station",
	destination: 'pg26'
	},
	{
	choice: "Go inside the police station", 
	destination: 'pg21'
	}
]
},
pg18: { /*From: pg16 | To: pg22 and pg23*/
title: "Going to the house of Kevin", 
story:`You go the house of Kevin but you saw no one inside. The lights were also turn off.`,
image: "", 
choices: [
	{
	choice: "Go inside",
	destination: 'pg22'
	},
	{
	choice: "Run", 
	destination: 'pg23'
	}
]
},
pg19: { /*From: pg16 | To: pg24 and pg25*/
title: "Going to the house of Sam", 
story:`You go to the house of Sam. You saw his family outside.`,
image: "", 
choices: [
	{
	choice: "Talk to his family",
	destination: 'pg24'
	},
	{
	choice: "Go inside", 
	destination: 'pg25'
	}
]
},
pg20: { /*From: pg17 | To: end*/
title: "Going inside your car again", 
story:`You are going inside your car but the shadow appeared in front of you.`,
image: "", 
choices: [
	{
	choice: "Run",
	destination: 'end'
	}
]
},
pg20mod1: { /*From: pg23  | To: end*/
title: "Going inside your car", 
story:`You are going inside your car but the shadow appeared in front of you.`,
image: "", 
choices: [
	{
	choice: "Run",
	destination: 'end'
	}
]
},
pg21: { /*From: pg17 | To: end*/
title: "Going inside the police station", 
story:`You go inside the police station and you found it empty. There were no police and their police cars are gone. Then the shadow appeared in front of you.`,
image: "", 
choices: [
	{
	choice: "Run",
	destination: 'end'
	}
]
},
pg21mod1: { /*From: pg17mod1 | To: end*/
title: "Going inside the police station", 
story:`You go inside the police station and you found it empty. There were no police and their police cars are gone. Then the shadow appeared in front of you.`,
image: "", 
choices: [
	{
	choice: "Run",
	destination: 'end'
	}
]
},
pg22: { /*From: pg18 | To: end*/
title: "Going inside of Kevin's House", 
story:`You are going inside of Kevin's house but the shadow appeared in front of you.`,
image: "", 
choices: [
	{
	choice: "Run",
	destination: 'end'
	}
]
},
pg23: { /*From: pg18 | To: pg17mod1 and pg21mod1*/
title: "You run", 
story:`You run. Where will you go?`,
image: "", 
choices: [
	{
	choice: "Go to your car",
	destination: 'pg20mod1'
	},
	{
	choice: "Go to the police station", 
	destination: 'pg17mod1'
	}
]
},
pg24: { /*From: pg19 | To: pg27 and pg28*/
title: "Talking to Sams family", 
story:`You walk to Sam's family. "Are you okay ${name}? Sam was gone when we woke up. Do you know where Sam went?" asked his mother in a worried voice. "I don't know where he went." You said.`,
image: "", 
choices: [
	{
	choice: "Help them find Sam",
	destination: 'pg27'
	},
	{
	choice: "Ignore them", 
	destination: 'pg28'
	}
]
},
pg25: { /*From: pg19 | To: pg29 and pg30*/
title: "Going inside of Sams house", 
story:`You went to Sams house you see it was empty.`,
image: "", 
choices: [
	{
	choice: "Keep on seaching for things",
	destination: 'pg29'
	},
	{
	choice: "Go outside", 
	destination: 'pg30'
	}
]
},
pg26: { /*From: pg17mod1 | To: end*/
title: "Running away from the police station", 
story:`You were running away from the police station but you saw the shadow appeared in front of you.`,
image: "", 
choices: [
	{
	choice: "Run",
	destination: 'end'
	}
]
},
pg27: { /*From: pg24 | To: pg31 and pg32*/
title: "Helping finding Sam", 
story:`You helped finding Sam. Where do you think Sam went?`,
image: "", 
choices: [
	{
	choice: "Street",
	destination: 'pg31'
	},
	{
	choice: "Go to other houses", 
	destination: 'pg32'
	}
]
},
pg28: { /*From: pg24 | To: end*/
title: "Ignoring Sams family", 
story:`You ignored them and went to your car but the shadow appeared in front of you.`,
image: "",
choices: [
	{
	choice: "Run",
	destination: 'end'
	}
]
},
pg29: { /*From: pg25 | To: pg33 and pg34*/
title: "Searching for items", 
story:`You searched for items and found 2 items. A gun and a bat.`,
image: "", 
choices: [
	{
	choice: "Pick up gun",
	destination: 'pg33'
	},
	{
	choice: "Pick up bat", 
	destination: 'pg34'
	}
]
},
pg30: { /*From: pg25 | To: pg35 and pg32mod1*/
title: "Going outside", 
story:`You go outside and Sam's father said to you "Have you seen him?". You said "Nope".`,
image: "", 
choices: [
	{
	choice: "Find Sam in the street",
	destination: 'pg35'
	},
	{
	choice: "Find Sam in other houses", 
	destination: 'pg32mod1'
	}
]
},
pg31: { /*From: pg27 | To: pg37 and end*/
title: "Finding Sam", 
story:`You went to the street to find Sam. Where will you find him ${name}?`,
image: "", 
choices: [
	{
	choice: "Bridge",
	destination: 'pg37'
	},
	{
	choice: "Car", 
	destination: 'end'
	}
]
},
pg32: { /*From: pg27 | To: pg38, pg39, pg40, and pg41*/
title: "Going to the other house", 
story:`You walk to other peoples house and you saw an old man. The old man said "Where do you think your going?" he said in a scary voice.`,
image: "", 
choices: [
	{
	choice: "Talk to him",
	destination: 'pg38'
	},
	{
	choice: "Run away from him", 
	destination: 'pg39'
	},
	{
	choice: "Knock him out", 
	destination: 'pg40'
	},
	{
	choice: "Ignore him", 
	destination: 'pg41'
	}
]
},
pg33: { /*From: pg29 | To:  pg42 and pg43*/
title: "The gun", 
story:`You pick up the gun. What will you do?`,
image: "", 
choices: [
	{
	choice: "Go outside",
	destination: 'pg42'
	},
	{
	choice: "Check the ammo", 
	destination: 'pg43'
	}
]
},
pg34: { /*From: pg34 | To: pg44 and end*/
title: "The bat", 
story:`You pick up the bat. What will you do?`,
image: "", 
choices: [
	{
	choice: "Go outside",
	destination: 'pg44'
	},
	{
	choice: "Fight the shadow", 
	destination: 'end'
	}
]
},
pg35: { /*From: pg30 | To: end*/
title: "Finding Sam in the street", 
story:`You try to find Sam in the street but saw the shadow appeared in front of you.`,
image: "", 
choices: [
	{
	choice: "Run",
	destination: 'end'
	}
]
},
pg32mod1: { /*From: pg27 | To: pg38, pg39, pg40, and pg41*/
title: "Going to the other house", 
story:`You walk to other peoples house and you saw an old man. The old man said "Where do you think your going?".`,
image: "", 
choices: [
	{
	choice: "Talk to him",
	destination: 'pg38'
	},
	{
	choice: "Run away from him", 
	destination: 'pg39'
	},
	{
	choice: "Knock him out", 
	destination: 'pg40'
	},
	{
	choice: "Ignore him", 
	destination: 'pg41'
	}
]
},
pg37: { /*From: pg31 | To: pg45 and pg46*/
title: "Mezalozon Bridge", 
story:`You went to the bridge and find traffic. You saw the shadow behind you.`,
image: "", 
choices: [
	{
	choice: "Run away from the shadow",
	destination: 'pg45'
	},
	{
	choice: "Go inside a car", 
	destination: 'pg46'
	}
]
},
pg38: { /*From: pg32 and pg32mod1 | To: pg47 and pg48*/
title: "The old man", 
story:`You talk to him. What will you say?`,
image: "", 
choices: [
	{
	choice: "Do you know where my friend Sam went?",
	destination: 'pg47'
	},
	{
	choice: "Are you okay?", 
	destination: 'pg48'
	}
]
},
pg39: { /*From: pg32 and pg32mod1 | To: pg47 and pg38*/
title: "The old man", 
story:`You run away from the old man. Where will you go?`,
image: "", 
choices: [
	{
	choice: "Run",
	destination: 'pg47'
	},
	{
	choice: "Talk to the old man again", 
	destination: 'pg38'
	}
]
},
pg40: { /*From: pg32 | To: end and end*/
title: "Knocking the old man", 
story:`You knocked the old man out by punching him in his face. `,
image: "", 
choices: [
	{
	choice: "Run",
	destination: 'end'
	},
	{
	choice: "Carry his body", 
	destination: 'end'
	}
]
},
pg41: { /*From: pg32 | To: pg49*/
title: "The old man", 
story:`You ignored the old man. He said to you "You can't ignore me!" You look behind and saw him hitting you a stick and you were knock out.`,
image: "", 
choices: [
	{
	choice: "zzzzzzzzzzzzzzzz",
	destination: 'pg49'
	}
]
},
pg42: { /*From: pg33 | To: end and end*/
title: "The shadow", 
story:`You went outside and saw the shadow.`,
image: "", 
choices: [
	{
	choice: "Shoot",
	destination: 'end'
	},
	{
	choice: "Run", 
	destination: 'end'
	}
]
},
pg43: { /*From: pg33 | To: pg42*/
title: "The gun", 
story:`You check the ammo and it was full.`,
image: "", 
choices: [
	{
	choice: "Go outside",
	destination: 'pg42'
	}
]
},
pg44: { /*From: pg34 | To: end and end*/
title: "The shadow", 
story:`You go outside and saw the shadow.`,
image: "", 
choices: [
	{
	choice: "Hit the Shadow",
	destination: 'end'
	},
	{
	choice: "Run", 
	destination: 'end'
	}
]
},
pg45: { /*From: pg37 | To: end*/
title: "The shadow", 
story:`You run away from the shadow. The shadow was screeching.`,
image: "", 
choices: [
	{
	choice: "Run",
	destination: 'end'
	}
]
},
pg46: { /*From: pg37 | To: end*/
title: "The shadow", 
story:`You went inside a car end waited until the shadow was gone. But you saw the shadow.`,
image: "", 
choices: [
	{
	choice: "Don't move",
	destination: 'pg11'
	}
]
},
pg47: { /*From: pg38 and pg39 | To: pg49*/
title: "The old man", 
story:`"Do you know where Sam went?" you said. He knocked you with his walking stick.`,
image: "", 
choices: [
	{
	choice: "zzzzzzzzzzzzzzzz",
	destination: 'pg49'
	}
]
},
pg48: { /*From: pg38 and pg39 | To: pg49*/
title: "The old man", 
story:`"Are you okay?" you said. He said "Always fine!" he knocked you out with his walking stick.`,
image: "", 
choices: [
	{
	choice: "zzzzzzzzzz",
	destination: 'pg49'
	}
]
},
pg49: { /*From: pg41, pg47 and pg48 | To: pg50*/
title: "Waking up", 
story:`You woke up in a dark house.`,
image: "", 
choices: [
	{
	choice: "Continue",
	destination: 'pg50'
	}
]
},
pg50: { /*From: pg49 | To: pg51 and pg52*/
title: "The Dark House (Congratulations!!!!! You made it to the another quarter of the game!!!!)", 
story:`This place was dark you can't see anything.`,
image: "", 
choices: [
	{
	choice: "Find something",
	destination: 'pg51'
	},
	{
	choice: "Just wait", 
	destination: 'pg52'
	}
]
},
}
}
	
/*All the most complex functions. THIS IS IMPORTANT, don't delete!*/
document.addEventListener('DOMContentLoaded', function() {
var button = document.querySelector('#start-button')
var content = document.querySelector('#content')
button.addEventListener('click', function() {
var name = document.querySelector('#name-input')
story = getStory(name.value)
renderScene()
})
})

function renderScene(){
var text = "Next"
var image = "";
if (story[story.currentScene].image){
image = "<img></img>"
}

if (story[story.currentScene].buttonText) {
text = story[story.currentScene].buttonText
}
content.innerHTML = `
<h1>${story[story.currentScene].title}</h1>
<p>${story[story.currentScene].story}</p>
${image}
${getInputs()}
<button id = "submit-button">${text}</button>
`
if (story[story.currentScene].image) {
document.querySelector("img").src = `./img/${story[story.currentScene].image}`
}
var button = document.querySelector("#submit-button");
button.addEventListener('click', function() {
getInputValue()
})
}

function getInputValue() {
var inputs = document.querySelectorAll('input[type="radio"]');
for (var i = 0; i < inputs.length; i++) {
if (inputs[i].checked) {
story.currentScene = inputs[i].getAttribute('data-destination')
renderScene();
return;
}
}
story.currentScene = story[story.currentScene].defaultDestination
renderScene()
}

getInputs()
function getInputs() {
var input = ""
if (!story[story.currentScene].choices) {
return ""
}
for(var i = 0; i < story[story.currentScene].choices.length; i++) {
input += `
<div>
<input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices" />
<label for = "radio${i}">${story[story.currentScene].choices[i].choice}</label>
</div>`
}
return input;
}
