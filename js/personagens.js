function getPersonagens(){
    fetch("https://www.potterapi.com/v1/characters?key=$2a$10$8R1RvfjauFpkNRDVY4eYHeEdi3wXFOWEF2lc2YnirrREZAXWp6uNm").then(function(response){
        response.json().then(function(data){
                 console.log(data);
                 var casa = "Hufflepuff";
                 mudarFundo(casa);
                 var htmlCompleto= "";
                 data.forEach(element => {
                    if(element.house == casa){
                        var htmlPadrao = `<div class="col-sm-4 py-2">
                        <div class="card h-100 card-body">
                            <h2>${element.name}</h2>
                            Blood status: ${element.bloodStatus}
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
    case 'Hufflepuff':
        body.style.backgroundColor = 'black';
        break;
    default:
        break;
}

    
}


getPersonagens();
