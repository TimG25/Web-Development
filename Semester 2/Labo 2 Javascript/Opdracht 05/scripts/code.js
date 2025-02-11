const setup = () => {
    let btnWijzig = document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", Wijzigen);


}
const Wijzigen = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);