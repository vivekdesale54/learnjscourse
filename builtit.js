//Classes 
class Drumbeat{
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        
    }
    activePad(){
        this.classList.toggle("active")
    }
    repeat(){

    }
}
    




const DrumBeat = new Drumbeat();

//Event Listeners

// Drumbeat.pads.foreach(pad => {
//     pad.addEventListener('click', Drumbeat.activePad);
// });








