'use strict'
var gCanvas;
var gCtx;
var gIsSearchImg = false;
var gIsDownloading = false;

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
    return getLines().forEach((line, idx) => {
        var isFocus = getMeme().selectedLineIdx === idx
        drawText(line, isFocus)
    })
}

function drawText(line, isFocus) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px IMPACT`
    gCtx.textAlign = 'center'
    gCtx.fillText(line.txt, line.pos.x, line.pos.y)
    gCtx.strokeText(line.txt, line.pos.x, line.pos.y)

    if (isFocus && !gIsDownloading) {
        let lineHeight = line.size * 1.25
        let textWidth = gCtx.measureText(line.txt).width;
        gCtx.strokeRect(line.pos.x - textWidth / 2 - 10, line.pos.y - lineHeight + 10, textWidth + 20, lineHeight)
    }
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
    drawImg()
    document.querySelector('input[name=line]').value = '';
    document.querySelector('input[name=line]').placeholder = getCurrLine().txt;
}

function onSearchImg(letters) {
    gIsSearchImg = true;
    setImagesSearch(letters);
    renderGallery();
    document.querySelector('input[name=search]').value = '';
}

function downloadCanvas(elLink) {
    var imgContent = gCanvas.toDataURL('img/jpeg');
    elLink.href = imgContent;
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

function hideShare() {
    document.querySelector('.fa-facebook').style.display = 'none'
}

function openGallery() {
    document.querySelector('.main-container').style.display = 'grid'
    document.querySelector('.about').style.display = 'flex'
    document.querySelector('.search-nav').style.display = 'flex'
    document.querySelector('.meme-editor').style.display = 'none'
    document.querySelector('.saved-memes').style.display = 'none'
    toggleMenu()
}

function onOpenSavedMemes() {
    var imgs = getLocalMemes()
    let strHTMLs = imgs.map(img => {
        return ` <div class="local-img">
        <img style="" src="img/${img.selectedImgId}.jpg" onclick="onSelectMeme(${img.selectedImgId})">
        </div>`
    });
    document.querySelector('.saved-memes').innerHTML = strHTMLs.join('')

    document.querySelector('.main-container').style.display = 'none'
    document.querySelector('.about').style.display = 'none'
    document.querySelector('.search-nav').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'none'
    document.querySelector('.saved-memes').style.display = 'block'
    toggleMenu()
}

function onSaveToLocal() {
    saveMemeToLocal()
}





