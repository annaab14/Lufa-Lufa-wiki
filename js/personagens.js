function getPersonagens(){
    fetch("https://www.potterapi.com/v1/characters?key=$2a$10$8R1RvfjauFpkNRDVY4eYHeEdi3wXFOWEF2lc2YnirrREZAXWp6uNm").then(function(response){
        response.json().then(function(data){
                 console.log("vou aparecer depois");  
                 console.log(data);
                 var casa = localStorage.getItem("casa");
                 mudarFundo(casa);
                 var htmlCompleto= "";
                 data.forEach(element => {
                    if(element.house == casa){
                        var htmlPadrao = `<div class="col-sm-4 py-2">
                        <div class="card h-100 card-body">
                            <h2>${element.name}</h2>
                            Card. I'm just a simple card-block, but I have a little more text!
                        </div>
                    </div>`;
                        htmlCompleto += htmlPadrao;
                    console.log(element.name);
                    }
                    
                 });
               
                 document.getElementById("personagens").innerHTML = htmlCompleto;
                 
            })
        })
        .catch(function(err){
          console.error(err);
        });

}

function mudarFundo(casa){
    var body = document.getElementsByTagName('body')[0];
    var nav = document.getElementById('nav');
    console.log(nav);
switch (casa) {
    case 'Gryffindor':
        body.style.backgroundImage = 'url(../img/grifinoia.png)';
        nav.style.backgroundColor = "red";
        break;
    case 'Slytherin':
        body.style.backgroundImage = 'url(../img/sonserina.jpg)';
        break;
    case 'Ravenclaw':
        body.style.backgroundImage = 'url(../img/corvinal.jpg)';
        break;
    case 'Hufflepuff':
        body.style.backgroundImage = 'url(../img/lufalufa.jpg)';
        break;
    default:
        break;
}

    
}


getPersonagens();
