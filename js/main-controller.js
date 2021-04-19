'use strict'

var gCanvas;
var gCtx;

function onInit() {
    renderCanvas()
    drawImg()
    setTimeout(() => {
        drawText(getLines()[0].txt, 250, 60) 
    }, 100);
}

function renderCanvas() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
}


function drawImg() {
    var img = getImgs()
    const elImg = new Image()
    elImg.src = img[0].url;
    elImg.onload = ()=>{
        gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
    }
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px IMPACT'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onSetText(){
    var elText = document.querySelector('input[name=line]').value; 
    setText(elText);
    renderCanvas()

}