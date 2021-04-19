'use strict'

var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
    renderGallery()
}

function renderCanvas() {
    drawImg()
}

function renderGallery(){
    var images = getImgs();

    let strHTMLs = images.map((image)=>{
        return `
        <div cllas="">
        <img src="${image.url}" alt="" onclick = "onChangeImage('${image.id}')">
        </div>
        `
    });
    document.querySelector('.image-gallery').innerHTML = strHTMLs.join('');
}

function onChangeImage(imageId){
    changeImage(imageId)
    renderCanvas()
}


function drawImg() {
    var imageId = getMeme().selectedImgId;
    const elImg = new Image()
    elImg.src = getImgs()[imageId-1].url;
    elImg.onload = ()=>{
        gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
        var line = getLines()[0]
        drawText(line.txt, line.pos.x, line.pos.y) 
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

