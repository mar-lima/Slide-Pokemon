let btnClick = document.querySelector(".button-on");
let minWondow = document.querySelector(".mini-display--on");
let windowOn = document.querySelector(".tela-on");

btnClick.addEventListener('click', function() {
    if(minWondow.style.width === '0%'){
        powerOff();
        
    } else {
        powerOn();
        
    }
});
function powerOff() {
    minWondow.style.width = '100%'
    minWondow.style.height = '100%'
    windowOn.style.width =  '100%'
    windowOn.style.height =  '100%'
    images.setAttribute('src', '../style/assets/1.png')
    mini.setAttribute('src', '../style/mini/1.png')
};
function powerOn() {
    minWondow.style.width = '0%'
    minWondow.style.height = '0%'
    windowOn.style.width = '0%'
    windowOn.style.height = '0%'   
};

// funçaão para passar as imagens

let left = document.querySelector(".button-left");
let right = document.querySelector(".button-right");

imageIndex = 1;
let images = document.querySelector(".img");

miniIndex = 1;
let mini = document.querySelector(".mini");

function next() {
    imageIndex++
    images.setAttribute('src', '../style/assets/'+imageIndex + '.png');
    
    miniIndex++
    mini.setAttribute('src', '../style/mini/'+miniIndex + '.png');

    if(imageIndex >= 21 ) {
        imageIndex = 1
        miniIndex = 1
    };
};

function prev() {
    imageIndex--
    images.setAttribute('src', '../style/assets/'+imageIndex + '.png');
   
    miniIndex--
    mini.setAttribute('src', '../style/mini/'+miniIndex + '.png');

    if(imageIndex <= 1 ) {
        imageIndex = 21
        miniIndex = 21
    };  
};

// dark mode

// toggle é usado para adicionar ou remover uma coisa nesse caso ele adiciona a classe darck e remove ela 

color1 = '#366474'
color2 = '#2D3033'
function darck() {
    document.querySelector("body").classList.toggle('darck')
}
