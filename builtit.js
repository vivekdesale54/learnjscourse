//Classes 
class Drumbeat{
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        this.playBtn = document.querySelector(".play");
        this.kickAudio = document.querySelector(".kick-audio");
        this.snareAudio = document.querySelector(".snare-audio");
        this.hihatAudio = document.querySelector(".hihat-audio");
        this.index = 0;
        this.bpm = 150;
    }
    activePad(){
        this.classList.toggle("active");
    }

    repeat(){
        let step = this.index % 8;
        const activeBar = document.querySelectorAll(`.b${step}`);
        console.log(step);
        this.index++;
    }
    start(){
        const interval = (60/150) *1000
        setInterval(() => {
            this.repeat();
        }, interval);
    }
}
    

const drumbeat = new Drumbeat();

drumbeat.pads.forEach(pad => {
    pad.addEventListener("click", drumbeat.activePad);
});

drumbeat.playBtn.addEventListener("click",() =>{
    drumbeat.start(); 
});




  



