//
let busqueda = document.getElementById("api");

function getRaM() {
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // console.log(data.results);

            const container = document.getElementById("container");
            //esto de arriba te sirve donde debe que ubicar la informacion
            data.results.forEach((character) => {
                // console.log(character);

                container.innerHTML += `
                    <h2>${character.name}</h2>
                    <img src=${character.image} />
                    <h3>${character.status}</h3>
                    <h4>${character.origin.name}</h4>
                    `;
                //ponelo separado ya que el punto te permite acceder a esa cosa
            });
        })
        .catch((error) => console.log("ERROR AL CARGAR DATOS", error));
}
getRaM();
//el unico trabajo que hiciste bien (porque te ayudaron)

//
