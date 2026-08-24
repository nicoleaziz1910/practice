const opening = [
    "Believe in yourself",
    "Keep going",
    "You are capable of more than you think"
];
const positiveMessage = [
    "Your hard work will pay off",
    "Every small step matters",
    "You are closer than you think"

];
const encouragement = [
    "Never give up",
    "Keep moving forward",
    "Trust the process"
]
const randomOpening = Math.floor(Math.random() * 3);
const selectedOpening = opening[randomOpening];

const randomPositiveMessage = Math.floor(Math.random() * 3);
const selectPositiveMessage = positiveMessage[randomPositiveMessage];

const randomencouragement = Math.floor(Math.random() * 3);
const selectEncouragement = encouragement[randomencouragement];

const final = selectedOpening + " "+ selectPositiveMessage +" "+ selectEncouragement ;

console.log(final);