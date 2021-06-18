

function pushToArray() {
    var xhttp = new XMLHttpRequest();
    var array = {
        title: [],
        about: [],
        year: [],
        urlPoster: [],
        urlVideo: []
    };
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let i;
            let xmlDoc = this.responseXML;
            let x = xmlDoc.getElementsByTagName("MOVIE");

            for (i = 0; i < x.length; i++) {

                array.title.push(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
                array.about.push(x[i].getElementsByTagName("ABOUT")[0].childNodes[0].nodeValue);
                array.year.push(x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue);
                array.urlPoster.push(x[i].getElementsByTagName("URLPOSTER")[0].childNodes[0].nodeValue);


            }

            for (let i = 0; i < array.about.length; i++) {
                console.log(array.urlPoster[i]);
                var elem = document.querySelector('.list');
                let listcard = "<div class='list-card'>";
                let a = "<a href='https://mealex.me'>";
                let divlist = "<div class='list'>";
                let img = "<img src='" + array.urlPoster[i] + "'>";
                let divlistEnd = "</div>";
                let divmovienames = "<div class='list-names'>";
                // let a2 = "<a href='vizioneaza.html' id='1'>"+array.title[i]+"</a>";
                let p="<p>"+array.title[i]+"</p>";
                let button = "<button value='brightburn'>haide </button>"
                let divmovienamesEnd = "</div></a></div>";
                let aEnd = "";
                let listcardEnd = "";
                let wholeelement=listcard 
                + a 
                + divlist 
                + img 
                + divlistEnd 
                + divmovienames 
                +p
                + divmovienamesEnd 
                + aEnd 
                + listcardEnd;
                elem.innerHTML += wholeelement;
            }
        }


    };
    xhttp.open("GET", "xml.xml", true);
    xhttp.send();
    console.log(array);


}
