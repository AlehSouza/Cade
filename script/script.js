var points = 0;

function startSong(){
    var audio = new Audio('../src/audio/bg.mp3');
    audio.play();
    audio.volume = 0.30;
}

function winnerSong(){
    var audio = new Audio('../src/audio/winner.mp3');
    audio.play();
    audio.volume = 1;
}

function startGame(){
    document.getElementById('menuInicial').style.opacity = "0";
    setTimeout( function hideMenu(){
        document.getElementById("menuInicial").style.display = "none";
    },1500);
    startSong();
}

function nextDialog(){
    document.getElementById('dialogPlaceholder').style.opacity = "0";
    setTimeout( function hideDialogAndNextTip(){
        document.getElementById('dialogPlaceholder').style.display = "none";
        document.getElementById('dialogItems').style.display = "flex";
        document.getElementById('gratientScreen').style.backgroundColor = "transparent";
    },1500);
}

function winnerDoubt(points){
    if(points == 7){
        winnerSong();
        document.getElementById('winner').style.display = "flex";
    }
}

function hide_point(pointer){
    document.getElementById(pointer).style.border = "5px solid #3dff33";
    document.getElementById(pointer).removeAttribute("onclick");
    pointerBar(pointer);
    points++;
    console.log('Pontuação atual '+ points);
    winnerDoubt(points);
}

function pointerBar(alien){
    console.log(alien)
    document.getElementsByClassName(alien)[0].style.backgroundColor = "#3dff33";
}