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
app.use(express.static(__dirname));
app.listen(process.env.PORT || 3000, () => console.log('app available on http://localhost:3000'));