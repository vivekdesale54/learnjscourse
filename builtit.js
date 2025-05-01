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
        this.isplaying = null;
    }
    activePad(){
        this.classList.toggle("active");
    }

    repeat(){
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);
        //loop over pads
        activeBars.forEach(bar => {
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            //check the sound is on 
           if(bar.classList.contains('active')){
            //check each sound
            if(bar.classList.contains("kick-pad")){
                this.kickAudio.currentTime = 0;
                this.kickAudio.play();
            }
            if(bar.classList.contains("snare-pad")){
                this.snareAudio.currentTime = 0;
                this.snareAudio.play();
            }
            if(bar.classList.contains("hihat-pad")){
                this.hihatAudio.currentTime = 0; 
                this.hihatAudio.play();
            }
           }
        });
        this.index++;
    }
    start(){
        const interval = (60/150) *1000
        if(!this.isplaying) {
        this.isplaying = setInterval(() => {
          this.repeat();
        }, interval); 
        } else {
            clearInterval(this.isplaying);
            this.isplaying = null;
        }
    }
}
    

const drumbeat = new Drumbeat();

drumbeat.pads.forEach(pad => {
    pad.addEventListener("click", drumbeat.activePad);
    pad.addEventListener("animationend", function(){
        this.style.animation = "";
    })
});

drumbeat.playBtn.addEventListener("click",() =>{
    drumbeat.start(); 
});




  



