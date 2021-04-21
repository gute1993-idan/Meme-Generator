'use strict'

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


//render canvas

function renderCanvas(img){
    gCanvas.width=img.width;
    gCanvas.height=img.height;
    gCtx.drawImage(img,0,0);//canvas size = img size
    gCtx.drawImage(img,0,0, gCanvas.width, gCanvas.height)//img size = canvas size
}





