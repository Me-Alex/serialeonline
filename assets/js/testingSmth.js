let test = document.querySelectorAll(".movies-container");
let test2 = document.querySelector(".movies-container");
let string = ""+test2+"";
// console.log(string);
let vizioneaza = document.getElementById('vizioneaza');
console.log(test);
console.log(test2);
console.log(test2.childNodes[1].children);

console.log(test2.childNodes[1].children.length);
childs=test2.childNodes[1].children;
console.log(childs);
let ceva,el;
for (let i = 0; i < 8; i++){
    for (let j= 0 ;j<test2.childNodes[1].children.length;j++){
        // console.log(childs[j].nodeName);
        if(childs[j].nodeName=="H1")
            childs[j].innerHTML="hai ahf adkf";
    }
    console.log(childs);
   vizioneaza.appendChild(test2.cloneNode(true));

}
test2.remove();