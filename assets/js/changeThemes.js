const black = document.getElementById("black");
const white = document.getElementById('white');
const body = document.body;
const nav = document.getElementById("nav");
const foo = document.getElementById("footer");
const div = document.getElementsByTagName('div');
document.get

//apply cashed theme
const theme = localStorage.getItem('theme');
if (theme) {
    console.log(theme);
    body.classList.remove("white");
    body.classList.add(theme);
    nav.classList.add(theme);
    foo.classList.add(theme);

}
function isThere(ceva, color) {
    if (ceva.classList.contains(color));
    return true;
}
black.onclick = () => {
    body.classList.add("black");
    nav.classList.add('black');
    foo.classList.add('black');
    localStorage.setItem("theme", "black");
    if (isThere(body, "white")) {
        body.classList.remove('white');
    }
    if (isThere(nav, "white")) {
        nav.classList.remove('white');

    }
    if (isThere(foo, "white")) {
        foo.classList.remove('white');

    }
    console.log(div);
    for (let i = 0; i < div.length; i++) {
        if (div[i].classList.contains('white'))
            div[i].classList.remove("white");
        div[i].className += " black";
        console.log(div[i].className);
    }
    body.classList.add("black");
}

white.onclick = () => {
    localStorage.setItem("theme", "white");
    if (body.classList.contains('black')) {
        body.classList.replace('black', "white");
        nav.classList.add('white');
        foo.classList.add('white');
    }
    for (let i = 0; i < div.length; i++) {
        div[i].className += " white";
        console.log(div[i].className);
    }
    body.classList.add("white");
}
