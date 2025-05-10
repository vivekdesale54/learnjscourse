//Classes 
class Drumbeat{
    constructor() {
        this.pads = document.querySelectorAll(".pad");
        this.playBtn = document.querySelector(".play");
        this.currentKick = document.querySelector("kick-808.wav");
        this.currentSnare = document.querySelector("snare-808.wav");
        this.currentHihat = document.querySelector("hihat-808.wav");
        this.kickAudio = document.querySelector(".kick-audio");
        this.snareAudio = document.querySelector(".snare-audio");
        this.hihatAudio = document.querySelector(".hihat-audio");
        this.index = 0;
        this.bpm = 150;
        this.isplaying = null;
        this.selects = document.querySelectorAll("select");
        this.muteBtns = document.querySelectorAll(".mute");
        this.tempoSlider = document.querySelector(".tempo-slider")
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
    updatebtn(){
        if(!this.isplaying){
            this.playBtn.innerText = "Stop";
            this.playBtn.classList.add("active");
        } else {
            this.playBtn.innerText = "Play";
            this.playBtn.classList.remove("active");

        }
    }
    changeSound(e){
        const selectName = e.target.name;
        const selectValue = e.target.value;
        console.log(selectValue);
        console.log(selectName);
        switch(selectName){
            case "kick-select":
                this.kickAudio.src = selectValue;
            break;
            case "snare-select":
                this.snareAudio.src = selectValue;
            break;
            case "hihat-select":
                this.hihatAudio.src = selectValue;
            break;
        }

    }
    mute(e){
        const muteIndex = e.target.getAttribute("data-track");
        e.target.classList.toggle("active");
        if(e.target.classList.contains("active")) {
            switch(muteIndex) {
                case "0":
                    this.kickAudio.volume = 0;
                break;
                case "1":
                    this.snareAudio.volume = 0;
                break;
                case "2":
                    this.hihatAudio.volume = 0;
                break;

            }
           
        }
        else {
            switch(muteIndex) {
                case "0":
                    this.kickAudio.volume = 1;
                break;
                case "1":
                    this.snareAudio.volume = 1;
                break;
                case "2":
                    this.hihatAudio.volume = 1;
                break;
            }
        } 
        
    }
    changetempo(e){
        const mutetempo = document.querySelector(".tempo-nr");
        mutetempo.innerText = e.target.value;  
    }
    updateTempo(e ) {
        this.bpm = e.target.value;
        clearInterval(this.isplaying);
        this.isplaying = null;
        const playBtn = document.querSelector(".play");
        if(playBtn.classList.contains("active")){
            this.start(); 
        }

    }

}
    

const drumbeat = new Drumbeat();


//Event listener

drumbeat.selects.forEach(select => {
    select.addEventListener('change', function(e){
        drumbeat.changeSound(e);
    });
});

drumbeat.pads.forEach(pad => {
    pad.addEventListener("click", drumbeat.activePad);
    pad.addEventListener("animationend", function(){
        this.style.animation = "";
    })
});

drumbeat.playBtn.addEventListener("click",() =>{
    drumbeat.start(); 
});

drumbeat.muteBtns.forEach(btn => {
    btn.addEventListener("click", function(e) {
        drumbeat.mute(e);
    });
});

drumbeat.tempoSlider.addEventListener("input", function(e){
    drumbeat.changetempo(e);
});

drumbeat.tempoSlider.addEventListener("change", function(e){
    drumbeat.updateTempo(e);
});




  



