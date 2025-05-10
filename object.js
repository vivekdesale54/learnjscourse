
// const button = document.querySelector(".button");

// button.addEventListener('click', function() {
//     const input = prompt("What's your timing? (Enter your timing)");

//     const time = Number(input);

//     if (input === null) {
//         alert("Input Cancelled");
//     } else if (isNaN(time) || input.trim() === '') {
//         alert("Please enter a valid number.");
//     } else if (input <= 5) {
//         console.log("You have PE");
//     } else if (input > 5 <= 10) {
//         console.log("You are normal");
//     } else {
//         console.log("You are an animal");
//     }
// });


// const button = document.querySelector('.check-time-btn');

// // Add event listener for click event
// button.addEventListener('click', function () {
//     // Prompt user to enter time
//     const input = prompt("What’s your time? (Enter a number)");

//     const time = Number(input);

//     if (input === null) {
//         // User pressed Cancel
//         alert("Input cancelled.");
//     } else if (isNaN(time) || input.trim() === '') {
//         alert("Please enter a valid number.");
//     } else if (time < 5) {
//         alert("You have PE.");
//     } else if (time >= 5 && time <= 10) {
//         alert("You are normal.");
//     } else {
//         alert("You are an animal.");
//     }
// });

// const newButton = document.querySelector(".button")

// newButton.addEventListener('click', function () {
//     const input = prompt("What's your timing? (Enter your timing)");

//     const newtime = Number(input);  

//     if (newtime <= 5) {
//         alert("You have PE");
//     } else if (newtime > 5 && newtime <= 10) {
//         alert("You are normal");
//     } else if (newtime > 10) {
//         alert("You are an animal");
//     }
// });

//Promise syntax 

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("got the user");
//         reject(new Error("User not logged in?"));

//     }, 2000);
// });

// promise
//     .then(user => {
//         console.log(user);
//     })
//     .catch(err => console.log(err.message));

const yt = new Promise(resolve => {
    setTimeout(() => {
        console.log("videos from yt");
        resolve({ videos: [1, 2, 3, 4, 5, 6] });
    }, 2000);
});

const fb = new Promise(resolve => {
    setTimeout(() => {
        console.log("this is from fb");
        resolve({ user: "Name" });
    }, 2000);
});

Promise.all([fb, yt])
    .then(result => console.log(result));


//Asyn function 

async function displayUser() {
    try {
        const userLogged = await loginUser("vivek", 12324);
        const videos = await getUSerVideos(loggedUser.userEmail);
        const detail = await videosDetails(videos[0]);
        console.log(detail);
    } catch (err) {
        console.log("We could not get videos");
    }
}

const advicesbtn = document.querySelector(".advices");
const header = document.querySelector("h1");

advicesbtn.addEventListener('click', () => {
    fetch("https://api.adviceslip.com/advice")
        .then(result => result.json())
        .then(data => {
            header.innerText = data.slip.advice;
        });
});
