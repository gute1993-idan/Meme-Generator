'use strict'

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}



/* CANVAS FUNCTIONS*/


//share in facebook
function shareCanvas() {
    var data = canvas.toDataURL("image/png");
    var encodedPng = data.substring(data.indexOf(',') + 1, data.length);
    var decodedPng = Base64Binary.decode(encodedPng);
    FB.getLoginStatus(function(response) {
        if (response.status === "connected") {
            postImageToFacebook(response.authResponse.accessToken, "heroesgenerator", "image/png", decodedPng, "www.heroesgenerator.com");
        } else if (response.status === "not_authorized") {
            FB.login(function(response) {
                postImageToFacebook(response.authResponse.accessToken, "heroesgenerator", "image/png", decodedPng, "www.heroesgenerator.com");
            }, { scope: "publish_actions" });
        } else {
            FB.login(function(response) {
                postImageToFacebook(response.authResponse.accessToken, "heroesgenerator", "image/png", decodedPng, "www.heroesgenerator.com");
            }, { scope: "publish_actions" });
        }
    });

}
// downloadCanvas
function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-canvas.jpg'
}

//drew img

function drawImg() {
    const elImg = new Image()
    elImg.src = 'img/???.jpg';
    elImg.onload = ()=>{
        gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
    }
}

//download img
//html
{/* <section class="links">
<a href="#" onclick="downloadImg(this)" download="exported-data.jpg">
    <i class="fas fa-file-image img-icon"></i>
</a>
</section> */}

//script
function downloadImg(elLink) {
    const imgContent = '???';
    elLink.href = 'data:image/???,' + imgContent
}

//another way
function downloadImg(elLink){
    var imgContent = gCanvas.toDataURL('img/jpeg');
    elLink.href = imgContent
}

//render canvas

function renderCanvas(img){
    gCanvas.width=img.width;
    gCanvas.height=img.height;
    gCtx.drawImage(img,0,0);//canvas size = img size
    gCtx.drawImage(img,0,0, gCanvas.width, gCanvas.height)//img size = canvas size
}



// on submit call to this function
function uploadImg(elForm, ev) {
    ev.preventDefault();
    document.getElementById('imgData').value = gElCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }
    let inputVal = elForm.querySelector('input').value
    doUploadImg(elForm, onSuccess, inputVal);
}

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);
    console.log('doUploadImg -> formData', formData)
    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(function (res) {
            return res.text()
        })
        .then(onSuccess)
        .catch(function (err) {
            console.error(err)
        })
}




