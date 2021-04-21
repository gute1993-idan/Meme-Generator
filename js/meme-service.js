'use strict'
var gImgsSearch = [];

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['all', 'angry', 'minister'] },
    { id: 2, url: 'img/2.jpg', keywords: ['all', 'happy', 'sweet', 'dog'] },
    { id: 3, url: 'img/3.jpg', keywords: ['all', 'dog', 'sleep'] },
    { id: 4, url: 'img/4.jpg', keywords: ['all', 'cat', 'sleep'] },
    { id: 5, url: 'img/5.jpg', keywords: ['all', 'angry', 'baby'] },
    { id: 6, url: 'img/6.jpg', keywords: ['all', 'man'] },
    { id: 7, url: 'img/7.jpg', keywords: ['all', 'happy', 'baby'] },
    { id: 8, url: 'img/8.jpg', keywords: ['all', 'happy', 'man', 'movie'] },
    { id: 9, url: 'img/9.jpg', keywords: ['all', 'happy', 'baby', 'weird'] },
    { id: 10, url: 'img/10.jpg', keywords: ['all', 'happy', 'man', 'minister'] },
    { id: 11, url: 'img/11.jpg', keywords: ['all', 'weird', 'man'] },
    { id: 12, url: 'img/12.jpg', keywords: ['all', 'man'] },
    { id: 13, url: 'img/13.jpg', keywords: ['all', 'happy', 'man', 'movie'] },
    { id: 14, url: 'img/14.jpg', keywords: ['all', 'man', 'movie'] },
    { id: 15, url: 'img/15.jpg', keywords: ['all', 'man', 'movie'] },
    { id: 16, url: 'img/16.jpg', keywords: ['all', 'happy', 'man', 'movie'] },
    { id: 17, url: 'img/17.jpg', keywords: ['all', 'man', 'minister'] },
    { id: 18, url: 'img/18.jpg', keywords: ['all', 'movie'] }
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'first line',
            size: 40,
            align: 'left',
            color: 'red',
            pos: {
                x: 225,
                y: 60
            }
        },
        {
            txt: 'second line',
            size: 40,
            align: 'left',
            color: 'red',
            pos: {
                x: 225,
                y: 425
            }
        }
    ]
};

function setText(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text;
}

function getImgs() {
    return gImgs
}

function getMeme() {
    return gMeme
}

function getLines() {
    return gMeme.lines
}

function changeImage(imageId) {
    gMeme.selectedImgId = imageId;
}

function getCurrLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getCurrImage() {
    return gMeme.selectedImgId
}

function switchLine() {
    return gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length;
}

function changeAline(direction) {
    switch (direction) {
        case 'left':
            getLines()[gMeme.selectedLineIdx].pos.x = 100;
            break;
        case 'center':
            getLines()[gMeme.selectedLineIdx].pos.x = 225;
            break;
        case 'right':
            getLines()[gMeme.selectedLineIdx].pos.x = 350;
            break;
    }
}

function addLine() {
    if (gMeme.lines.length > 2) return;
    var newLine = {
        txt: 'middle line',
        size: 40,
        align: 'center',
        color: 'red',
        pos: {
            x: 225,
            y: 225
        }
    }
    gMeme.lines.push(newLine)
}

function deleteLine() {
    // if (gMeme.selectedLineIdx > 1) gMeme.selectedLineIdx --;
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}

function getImgSearch(){
    return gImgsSearch
}

function setImagesSearch(input) {
    let imgs = gImgs.filter((img) => {
        return img.keywords.includes(input)
    });
    gImgsSearch = imgs;
}

function changeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color;
}