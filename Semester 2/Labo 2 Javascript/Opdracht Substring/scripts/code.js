const setup = () => {
    let btnSubString=document.getElementById("btnSubString");
    btnSubString.addEventListener("click", substring);
}

const substring = () => {
    let txtInput=document.getElementById("txtInput");
    let txtLinks=document.getElementById("txtLinks");
    let txtRechts=document.getElementById("txtRechts");
    let txtOutput=document.getElementById("txtOutput");

    let g1=parseInt(txtLinks.value, 10);
    let g2=parseInt(txtRechts.value, 10);
    let resultaat = txtInput.substring(g1, g2);
    
    txtOutput.innerHTML=resultaat;
}
window.addEventListener("load", setup);