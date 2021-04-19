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

function renderGallery() {
    var images = getImgs();

    let strHTMLs = images.map((image) => {
        return `
        <div class="">
        <img src="${image.url}" alt="" onclick = "onChangeImage('${image.id}')">
        </div>
        `
    });
    document.querySelector('.image-gallery').innerHTML = strHTMLs.join('');
}

function onChangeImage(imageId) {
    changeImage(imageId)
    renderCanvas()
}


function drawImg() {
    var imageId = getMeme().selectedImgId;
    const elImg = new Image()
    elImg.src = getImgs()[imageId - 1].url;
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
        var line0 = getLines()[0]
        var line1 = getLines()[1]
        drawText(line0.txt, line0.pos.x, line0.pos.y)
        drawText(line1.txt, line1.pos.x, line1.pos.y)
    }
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `${getCurrLine().size}px IMPACT`
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onSetText() {
    var elText = document.querySelector('input[name=line]').value;
    setText(elText);
    renderCanvas()
}

function changeFontSize(num) {
    getCurrLine().size += num;
    renderCanvas()
}

function changeDirection(num) {
    getCurrLine().pos.y += num;
    renderCanvas()
}

function switchLine() {
    var currLine = getCurrLine()
    // if(currLine === 0) 
}