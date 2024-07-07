console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    let allBreeds = [];

    fetch(imgUrl)
         .then(response => response.json())
         .then(data =>{
                const imageContainer = document.getElementById("dog-image-container");
                data.message.forEach(imgUrl => {
                    const imgElement = document.createElement("img")
                    imgElement.src = imgUrl;
                    imgElement.alt = "Random dog images"
                    imgElement.style.width ='200px';
                    imgElement.style.margin = '10px';
                    imageContainer.appendChild(imgElement);

                })

         })
    fetch(breedUrl)
        .then(response => response.json())
        .then(data =>{
            allBreeds = Object.keys(data.message);
            displayBreeds(allBreeds);    
           });

function displayBreeds(breeds){
    const breedList = document.getElementById("dog-breeds");
    while( breedList.firstChild){
        breedList.removeChild(breedList.firstChild);
    }
    breeds.forEach(breed => {
      const listItem = document.createElement("li");
      listItem.textContent = breed;
      listItem.addEventListener("click", () => {
      listItem.style.color = "red";
      });
      breedList.appendChild(listItem);  
    });

}            
 const breedDropDown = document.getElementById("breed-dropdown");
 breedDropDown.addEventListener("change", (event) => {
    const selectedLetter = event.target.value;
    const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
    displayBreeds(filteredBreeds);
 });
             
         
});
