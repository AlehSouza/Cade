function startGame(){
    document.getElementById('menuInicial').style.opacity = "0";
    setTimeout( function hideMenu(){
        document.getElementById("menuInicial").style.display = "none";
    },1500);
}

function nextDialog(){
    document.getElementById('dialogPlaceholder').style.opacity = "0";
    setTimeout( function hideDialogAndNextTip(){
        document.getElementById('dialogPlaceholder').style.display = "none";
        document.getElementById('dialogItems').style.display = "flex";
        document.getElementById('gratientScreen').style.backgroundColor = "transparent";
    },1500);
}

var points = 0;

function winnerDoubt(points){
    if(points == 7){
        // alert('Ganhou');
    }else{
        // console.log('Ainda não, faltam alguns pontos');
    }
}

function hide_point(pointer){
    // console.log(pointer);
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



// posicionar botões ✔️
// adicionar um botão de respostas
// fazer uma tela de agradecimento e finalização do game
//  

// fazer uma hud da game station num outro projeto que redireciona a estes
// fazer testes
// corrijir erros &&& bugs