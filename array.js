const videos = [
    "Gifting my girlfriend a car",
    "Giving a treat to my mom",
    "Surprising my dad with a new phone",
    "java",
    "Css",
    "Html",
    "Javascript"
];

// const newVideos = videos.map (function(video){
//     if (video.length < 10) {
//         return video;
//     }else {
//         return "nope";
//     }
// }
// )

// console.log(newVideos);

const arrowVideos = videos.map(video => (video.length < 10 ? video : "nope" ));

console.log(arrowVideos);


const numbers = [93, 45, 63, 47, 29, 44, 89, 83, 33, 32]

const newNumbers = [...numbers];

newNumbers.sort((a, b) => b - a);

console.log(newNumbers);
console.log(numbers);


const names = ["john", "jane", "doe", "smith", "jones"];
const otherNames = ["mike", "harvey", "rachel", "jessica", "karen"];
const allNames = names.concat(otherNames);
// console.log(allNames);

const allNames2 = [...names, ...otherNames];
console.log(allNames2); 

