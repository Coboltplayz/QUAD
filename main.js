/*This is the main function of the whole story */
var story;
function getStory(name) {
return { 
currentScene: "beginning", /*This is always the current scene. It changes when you click or choose choices.*/
beginning: { /*Events: pg1, pg2, and beginning*/
title: "Quack", 
story: `You woke in the night and you stare at the clock, it was 3:AM.`,
image: "", 
choices: [
	{
	choice: "Go to Kitchen",
	destination: 'pg1'
	},
	{
	choice: "Go to Bed", 
	destination: 'pg2'
	}
]
},
pg1: { /*From: beginning | To: pg3, pg4, pg5*/
title: "The Kitchen", 
story:`You went to the kitchen. You were hungry. So what will u eat?`,
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
story:`You go to bed but you saw a shadow. What will u do?`,
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
story:`You are gonna eat the burger so u pick it up and eat it but you saw a shadow. What will u do?`,
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
story:`You ate nothing and saw a shadow. What will u do?`,
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
story:`You are gonna eat the apple and saw a shadow. What will u do?`,
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
story:`You ignored the shadow and go to bed.`,
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
story:`You think what was the shadow. The shadow appeared in front of you. What will u do?`,
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
	choice: "Go to bed",
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
	choice: "Go to bed",
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
story:`ZZZZZZZZZZZzzzzzzzz`,
image: "", 
defaultDestination: "end",
buttonText: 'Next'
},
end: { /*From: anyDeath | To: beginning*/
title: "GAME OVER", 
story:`You died, the end.`,
image: "", 
defaultDestination: "beginning",
buttonText: 'Restart?'
},
pg10: { /*From: pg7  | To: pg 12 and pg13*/
title: "Running", 
story:`U run and want to go outside your house. But there was a door that you lock every night. So what will you do ${name}?`,
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
story:`You kicked the door but it won't bugde open.`,
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
story:'You try kicking the door again and it open! So where will u go?',
image: "", 
choices: [
	{
	choice: "Go to your car",
	destination: 'pg15'
	},
	{
	choice: "Go to other house", 
	destination: 'pg16'
	}
]
},
pg15: { /*From: pg14 | To: pg17 and pg16 */
title: "Going to your car", 
story:`You go to your car and open the door with the keys. You go inside and saw the shadow following you. What will u do?`,
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
title: "Going inside of Kevins House", 
story:`You are going inside of Kevins house but the shadow appeared in front of you.`,
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
story:`You run. Where will u go?`,
image: "", 
choices: [
	{
	choice: "Go to your car",
	destination: 'pg20mod1'
	},
	{
	choice: "Go to police station", 
	destination: 'pg17mod1'
	}
]
},
pg24: { /*From: pg19 | To: pg27 and pg28*/
title: "Talking to Sams family", 
story:`You walk to Sams family. "Are you okay ${name}? Sam was gone when we woke up. DO you know where Sam went?" "I don't know where he went." You said.`,
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
story:`You helped finding Sam. What do you think Sam went?`,
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
pg30: { /*From: pg25 | To: pg35 and pg36*/
title: "Going outside", 
story:`You go outside and Sams father said to you "Have you seen him?" you said "Nope".`,
image: "", 
choices: [
	{
	choice: "Find Sam in the street",
	destination: 'pg35'
	},
	{
	choice: "Find Sam in other houses", 
	destination: 'pg36'
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