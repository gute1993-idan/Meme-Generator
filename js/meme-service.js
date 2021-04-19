'use strict'

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/2.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/3.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/4.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/5.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/6.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/7.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/8.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/9.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/10.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/11.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/12.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/13.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/14.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/15.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/16.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/17.jpg', keywords: ['happy'] },
    // { id: 1, url: 'img/18.jpg', keywords: ['happy'] }
];

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'first line',
            size: 20,
            align: 'left',
            color: 'red',
            pos: {
                x: 0,
                y: 0
            }
        },
        // {
        //     txt: 'second line',
        //     size: 20,
        //     align: 'left',
        //     color: 'red',
        //     pos: {
        //         x: 0,
        //         y: 0
        //     }
        // }
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
