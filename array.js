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