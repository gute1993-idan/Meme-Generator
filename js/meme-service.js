'use strict'

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'img/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'img/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'img/4.jpg', keywords: ['happy'] },
    { id: 5, url: 'img/5.jpg', keywords: ['happy'] },
    { id: 6, url: 'img/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'img/7.jpg', keywords: ['happy'] },
    { id: 8, url: 'img/8.jpg', keywords: ['happy'] },
    { id: 9, url: 'img/9.jpg', keywords: ['happy'] },
    { id: 10, url: 'img/10.jpg', keywords: ['happy'] },
    { id: 11, url: 'img/11.jpg', keywords: ['happy'] },
    { id: 12, url: 'img/12.jpg', keywords: ['happy'] },
    { id: 13, url: 'img/13.jpg', keywords: ['happy'] },
    { id: 14, url: 'img/14.jpg', keywords: ['happy'] },
    { id: 15, url: 'img/15.jpg', keywords: ['happy'] },
    { id: 16, url: 'img/16.jpg', keywords: ['happy'] },
    { id: 17, url: 'img/17.jpg', keywords: ['happy'] },
    { id: 18, url: 'img/18.jpg', keywords: ['happy'] }
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
                x: 250,
                y: 60
            }
        },
        {
            txt: 'second line',
            size: 40,
            align: 'left',
            color: 'red',
            pos: {
                x: 250,
                y: 460
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
    let currLine = getLines()[gMeme.selectedLineIdx]
    return currLine
}

function getCurrImage() {
    return gMeme.selectedImgId
}

function switchLine() {
   return gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length;
}
