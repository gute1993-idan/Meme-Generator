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
        <img class = "img-grid" src="${image.url}" alt="" onclick = "openMemeEditor('${image.id}')">
        </div>
        `
    });
    document.querySelector('.image-gallery').innerHTML = strHTMLs.join('');
}

// function onChangeImage(imageId) {
//     changeImage(imageId)
//     renderCanvas()
// }

function openMemeEditor(imageId) {
    document.querySelector('.main-container').style.display = 'none'
    document.querySelector('.about').style.display = 'none'
    document.querySelector('.search-nav').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'block'
    changeImage(imageId)
    renderCanvas()
    // resizeCanvas()
}

// function resizeCanvas() {
//     const elCanvasContainer = document.querySelector('.canvas-container');
//     gCanvas.width = elCanvasContainer.offsetWidth;
//     gCanvas.height = elCanvasContainer.offsetHeight;
// }

function drawImg() {
    var imageId = getMeme().selectedImgId;
    const elImg = new Image()
    elImg.src = getImgs()[imageId - 1].url;
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
        drewTextLines()
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

function onChangeAline(direction) {
    changeAline(direction);
    renderCanvas()
}

function onSwitchLine() {
    switchLine();
    document.querySelector('input[name=line]').placeholder = 'Second line';
}

function drewTextLines() {
    return getLines().forEach(line => {
        drawText(line.txt, line.pos.x, line.pos.y)
    })
}

// function onFocusText() {

// } 

function downloadCanvas(elLink) {
    var imgContent = gCanvas.toDataURL('img/jpeg');
    elLink.href = imgContent
}

function onAddLine() {
    addLine()
    renderCanvas()
}

function onDeleteLine() {
    deleteLine()
    renderCanvas()
}