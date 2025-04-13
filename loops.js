

// const name = ['nick', 'varshu', 'michael', 'michie']

//for arrays
// for(names in name){
//     console.log(names)
// }

//this is for getting out of loop 
// for ( let names of name) {
//     if(names === "michael"){
//         break;
//     }
//     console.log(names);
// }

//for each for arrays only 

// name.foreach(function (names, index)  {
//     console.log(names, index)
// })

//loop over a object 

// const value = {
//     namesec: "Moti",
//     age2: 55,
//     followers: 500,
//     bankbalance: "1 million", 
// }

// for(x in value) {
//     console.log(value[x]);
// }

// guessing game


// function guessgame(){
//     let randomnr = Math.floor(Math.random() * 11);
//     let guess;
//     do {
//         guess = prompt(" Guess the no from 0 -10");
//         console.log(guess, randomnr);
//         if(randomnr > guess){ 
//             console.log(" You guess to low");
//         } else if (randomnr < guess){ 
//             console.log(" You guess too high");
//         } 
//     } while (randomnr != guess);
//         console.log(" You won ")
    
// }

// guessgame();