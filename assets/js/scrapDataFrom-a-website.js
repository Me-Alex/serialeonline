let array = document.querySelectorAll(".image");
console.log(array);
// console.log(array[0].firstElementChild.currentSrc);
// console.log(array.length);
// let dictionar={
//     imgsrc:[],
//     titlu:[],
//     an:[]
// };
 dict = {
    title: [],
    urlPoster: []
};
for (var k = 0; k < array.length; k++) {
    dict.urlPoster.push(array[k].firstElementChild.currentSrc);
    dict.title.push(array[k].childNodes[1].attributes[1].nodeValue);
}
localStorage.setItem("dict", dict);

