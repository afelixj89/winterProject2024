
const searchButton = document.querySelector(".submitButton");
const seachBarResults = document.querySelector("#pokName");
const showImage = document.querySelector(".pokemonPicture")
const height = document.querySelector(".height")
const weight = document.querySelector(".weight")
const id = document.querySelector(".id")
const abilities = document.querySelector(".abilities")
const pokemonName = document.querySelector(".pokemonName")
console.log(".pokemonName")





searchButton.addEventListener("click", function(e) {
    e.preventDefault();
    //console.log(searchBarLower)
    const searchBarValue = seachBarResults.value;
    const searchBarLower= searchBarValue.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${searchBarLower}`;
    // console.log(searchBarLower)

    
        fetch(url)
            .then((res) =>{ 
              
                return res.json();
    })
                    .then((data) => {
                        pokemon = data.results //results is the array that pulls the pokemon out from the res iterable
                        // console.log(data.sprites.front_default);

                        const imageLink = data.sprites.front_default
                        showImage.setAttribute("src", imageLink)
                        console.log(data.game_indices[0].version.name)
                        pokemonName.innerHTML = `Name: ${data.name}`
                        height.innerHTML = `Height: ${data.height} `
                        weight.innerHTML = `Weight: ${data.weight}`
                        id.innerHTML = `Pokemon ID: ${data.id}`
                        
                        
                        // id.innerHTML = `Abilities: ${data.a}`


                        

                      });

    });
    

            
