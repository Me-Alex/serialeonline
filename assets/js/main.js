// function numeFilm(nume) {
//     b = document.getElementById('1').innerHTML;
//     console.log(nume.value);
//     window.location = "vizioneaza.html";
//     console.log(2);

//     function ceva() {
//         console.log('mege');
//         let d = document.getElementById('nume-film-test');
//     }

// }

const form = document.querySelectorAll('#form');
const form2 = document.getElementById('form');

const submit = document.getElementById('submit');
const input = document.getElementById('input');
console.log(input.innerHTML);

submit.onclick = () => {
    if (input) {
        form[0].action += input.value;
        console.log(input.innerHTML);
    }
}


console.log(form);
