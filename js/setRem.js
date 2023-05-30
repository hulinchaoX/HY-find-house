function setRem() {
    var ui_w = 375
    var clientW = document.documentElement.clientWidth || document.body.clientWidth;
    clientW = clientW > 640 ? 640 : clientW;
    clientW = clientW < 250 ? 250 : clientW;
    var html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientW / ui_w) * 10 + 'px';
}

window.onresize = setRem;
window.onload = setRem;