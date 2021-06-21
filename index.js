const { readFile, readFileSync } = require('fs').promises;
async function documentHtml() {
    let string = await readFileSync('index.html', 'utf-8');

}

const express = require('express');
const app = express();

// app.get('/', (request, response) => {
//     readFile('./index.html', 'utf-8', (err, html) => {
//         if (err) {
//             response.status(500).send('sprufasdkljfs lkfj as');
//         }
//         response.send(html);
//     });
// });
app.get('/', async (request, response) => {
    response.send(await readFile('index.html', 'utf-8'));
});
app.get('/filme', async (request, response) => {
    response.send(await readFile('filme.html', 'utf-8'));
});
app.get('/seriale', async (request, response) => {
    response.send(await readFile('seriale.html', 'utf-8'));
});
app.post('/?', async (request, response) => {
    response.send(await readFile('vizioneaza.html', 'utf-8'));
});
let array = {
    about: ["Brightburn is a 2019 American superhero horror fil…2 million against a budget of $6–12 million.\n    ", "In the Heights is a 2021 American musical drama fi…s direction, the story, and musical numbers.\n    ", "The Conjuring: The Devil Made Me Do It (also known…t as weaker than previous Conjuring installments.", "The Comeback Trail is a 2020 American crime comedy…lly on July 23, 2021 by Cloudburst Entertainment.", "Brightburn is a 2019 American superhero horror fil…2 million against a budget of $6–12 million.\n    ", "Brightburn is a 2019 American superhero horror fil…2 million against a budget of $6–12 million.\n    ", "When a high school senior finds out from her paren… that change her heart and those around her.\n    ", "Brightburn is a 2019 American superhero horror fil…2 million against a budget of $6–12 million.\n    ", "După un eveniment global care distruge capacitatea…atea și propria ei minte se cufundă în haos.\n    ", "\nO minte genială dar sadică dezlănțuie un mod boln… centrul jocului morbid al minţii criminale.\n    "],
    title: ["Brightburn", "In the Heights", "The Conjuring: The Devil Made Me Do It", "The Comeback Trail", "Rurouni Kenshin", "Holler", "Wish For Christmas", "Security", "Awake", "\n    Spiral: From the Book of Saw\n    "],
    urlPoster: ["https://upload.wikimedia.org/wikipedia/en/f/fa/Brightburn_film_poster.png", "https://upload.wikimedia.org/wikipedia/en/6/6a/In_The_Heights_teaser_poster.jpg", "https://upload.wikimedia.org/wikipedia/en/e/e8/The_Conjuring_-_The_Devil_Made_Me_Do_It.png", "https://image.tmdb.org/t/p/w185/gxsvZDA79tUGgSu1GsuRzkmaubZ.jpg", "https://image.tmdb.org/t/p/w185/3Xq7xmYZwNJfSODpec6OzYaxaA3.jpg", "https://image.tmdb.org/t/p/w185/7pqE8HeWv7Mqrjqi0QHTTfP1tvC.jpg", "https://image.tmdb.org/t/p/w185/kaRwPVUlSRnYh7kHbbKhHdX2MLG.jpg", "https://image.tmdb.org/t/p/w185/msTpZMyvd16KhuS7YZiIkdvPgXf.jpg", "https://image.tmdb.org/t/p/w185/uZkNbB8isWXHMDNoIbqXvmslBMC.jpg\n    ", "\n    https://image.tmdb.org/t/p/w185/lcyKve7nXRFgRyms9M1bndNkKOx.jpg\n    "],
    urlVideo: [],
    year: ["9 mai 2019", "9 mai 2019", "9 mai 2019", "2020", "9 mai 2019", "11 Jun 2021", "  01 Nov 2016", "07 Jun 2021", "09 Jun 2021", "\n    14 May 2021\n    "]
}
array.title.map((e)=>{
    app.get('/'+e+'',async (request,response)=>{
        console.log(e);
      
        // response.send(await writeFile('vizioneaza.html','utf-8'));
        response.write()
    });
});
console.log(array);
app.use(express.static(__dirname));
app.listen(process.env.PORT || 3000, () => console.log('app available on http://localhost:3000'));