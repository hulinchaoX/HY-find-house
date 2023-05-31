function setRem() {
    let uiWidth = 375
    let clientWidth = document.documentElement.clientWidth || document.body.clientWidth
    let html = document.querySelector('html')
    html.style.fontSize = (clientWidth / uiWidth) * 10 + 'px'

}
window.onresize = setRem
window.onload = setRem
