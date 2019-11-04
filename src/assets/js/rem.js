function setRem() {
    const baseSize = window.screen.width;
    console.log(baseSize);

    console.log(document.documentElement.clientWidth);

    const scale = document.documentElement.clientWidth >= 600 ? 600 : baseSize;
    const size = scale / 10 + "px"
    document.documentElement.style.fontSize = size;
    document.getElementsByTagName("body")[0].style.fontSize = "16px";
}
setRem()
window.onresize = function() {
    console.log("444");

    setRem()
}