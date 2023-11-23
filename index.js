var botoesBateria = document.querySelectorAll(".bateria")

for (var i = 0; i < botoesBateria.length; i++){
    botoesBateria[i].addEventListener("click",function (){
        var botaoApertado = this.innerHTML;

        tocarBateria(botaoApertado);
        animarBotoes(botaoApertado)
    })
}

document.addEventListener("keydown", function(event){
    tocarBateria(event.key);
    animarBotoes(event.key)
    
})


function tocarBateria(key){
    switch(key){
        case "a" :
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case "s" :
            var kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play()
            break;
        case "d" :
            var snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;
        case "f" :
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
        case "j" :
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case "k" :
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        case "l" :
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
        default :
            console.log(key);
    }
}

// Colocar Animação

function animarBotoes (key){
    var selecBotao = document.querySelector("." + key)
    selecBotao.classList.add("aniPress");

    setTimeout(function(){
        selecBotao.classList.remove("aniPress")
    }, 100)
}