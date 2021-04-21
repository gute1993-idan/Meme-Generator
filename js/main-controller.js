'use strict'

var gCanvas;
var gCtx;
var gIsSearchImg = false;

function onInit() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
    renderGallery()
}

function renderCanvas() {
    drawImg()
}

function renderGallery() {
    if (gIsSearchImg) {
        var images = getImgSearch();
    } else {
        var images = getImgs();
    }
    let strHTMLs = images.map((image) => {
        return `
        <div>
        <img class = "img-grid" src="${image.url}" alt="" onclick = "openMemeEditor('${image.id}')">
        </div>
        `
    });
    document.querySelector('.image-gallery').innerHTML = strHTMLs.join('');
}

function openMemeEditor(imageId) {
    document.querySelector('.main-container').style.display = 'none'
    document.querySelector('.about').style.display = 'none'
    document.querySelector('.search-nav').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'block'
    changeImage(imageId)
    renderCanvas()
}

function drawImg() {
    var imageId = getMeme().selectedImgId;
    const elImg = new Image()
    elImg.src = getImgs()[imageId - 1].url;
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
        drewTextLines()
    }
}
function drewTextLines() {
    return getLines().forEach(line => {
        drawText(line.txt, line.pos.x, line.pos.y, line.color)
    })
}

function drawText(text, x, y, color) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color
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
    if (getCurrIdx() === 0) {
        let lineHeight = getLines()[1].size * 1.25
        let textWidth = gCtx.measureText(getLines()[1].txt).width;
        gCtx.strokeRect(getLines()[1].pos.x - textWidth / 2 - 10, getLines()[1].pos.y - lineHeight + 10, textWidth + 20, lineHeight)

    } else if (getCurrIdx() === 1) {
        let lineHeight = getLines()[0].size * 1.25
        let textWidth = gCtx.measureText(getLines()[0].txt).width;
        gCtx.strokeRect(getLines()[0].pos.x - textWidth / 2 - 10, getLines()[0].pos.y - lineHeight + 10, textWidth + 20, lineHeight)
    }
    switchLine();
    document.querySelector('input[name=line]').placeholder = 'Second line';
}


function onSearchImg(letters) {
    gIsSearchImg = true;
    setImagesSearch(letters);
    renderGallery()
}


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

function onChangeColor(color) {
    changeColor(color.value);
    renderCanvas()
}

//mobile//

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

