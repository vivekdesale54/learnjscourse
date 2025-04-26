class Drumkit{
    constructor(){
        this.pads = document.querySelectorAll(".pad");
        this.play = document.querySelector(".play-btn"); 
        this.playBtn = document.querySelector(".play");
        this.currentKick = "./sounds/808 Kick.wav";
        this.currentKick = "./sounds/808 Snare.wav";
        this.currentKick = "./sounds/808 Open Hi-Hat.wav";
        this.kickAudio = document.querySelector(".kick-sound");
        this.snareAudio = document.querySelector(".snare-sound");
        this.hihatAudio = document.querySelector(".hihat-sound");
        this.index = 0
        this.bpm = 150;
        this.isPlaying = null;
        this.selects = document.querySelectorAll("select");
    }
    activePad() {
        this.classList.toggle('active'); 

    } 
    repeat(){
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);
        //loop over bars
         activeBars.forEach(bar => { 
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            //Check if pad is active
            if(bar.classList.contains('active')){
                //check which sound to play
                if(bar.classList.contains('kick-pad')){
                    this.kickAudio.currenttime = 0;
                    this.kickAudio.play();
                }
                if(bar.classList.contains('snare-pad')){
                    this.snareAudio.currenttime = 0;
                    this.snareAudio.play();
                }
                if(bar.classList.contains('hihat-pad')){
                    this.hihatAudio.currenttime = 0;
                    this.hihatAudio.play(); 
                }
            }
         });  

        this.index++; 
    }
    start() {
       const interval = (60 / this.bpm) * 1000;
       //check if playing
       if(!this.isPlaying){
       this.isPlaying = setInterval(() => {
            this.repeat();
        }, interval);
      }else {
        //remove interval
        clearInterval(this.isPlaying);
        this.isPlaying = null; 
      }
    }
    updateBtn(){
        if(!this.isPlaying) {
            this.playBtn.innerText = "Play";
            this.playBtn.classList.remove('active');

        } else{
            this.playBtn.innerText = "Stop";
            this.playBtn.classList.add('active');
        }
    }
    changeSound(e) {
        const selectionName = e.target.name;
        const selectionValue = e.target.value;
        switch(selectionName) {
            case "kick-select":
                this.currentKick = selectionValue;
                break;
            case "snare-select":
                this.currentSnare = selectionValue;
                break;
            case "hihat-select":
                this.currentHihat = selectionValue;
                break; 
        }
    }
}



const drumKit = new Drumkit();

//Event Listeners

drumKit.pads.forEach(pad => {
    pad.addEventListener('click', drumKit.activePad);
    pad.addEventListener('animationend', function(){
        this.style.animation = '';
    });
});

drumKit.play.addEventListener('click', function(){
    drumKit.start();
}); 

drumKit.selects.forEach(select => {
    select.addEventListener('change', function(e){
        drumKit.changeSound(e);
    })
});
