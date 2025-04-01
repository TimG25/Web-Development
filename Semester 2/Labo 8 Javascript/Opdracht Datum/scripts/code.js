

const setup = () => {
    let today = new Date();
    let birthday = new Date(2006, 5, 25);

    console.log(Math.round((today - birthday) / (1000 * 60 * 60 * 24)));
}




window.addEventListener("load", setup);