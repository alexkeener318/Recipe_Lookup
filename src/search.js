import { search } from "./index";

let ingreds = [];
const ingredList = document.querySelector(".ingreds");
const searchBar = document.querySelector("input");
const searchButton = document.querySelector("#search");

searchBar.addEventListener("keydown", (event)=>{
    if(event.key === "Enter" ){
        addIngred(searchBar.value);
        searchBar.value = "";
    }
});


function addIngred(ingred) {
    const newIngred = document.createElement("div");
    newIngred.classList.add("ingred")
    
    //make text and remove button
    const text = document.createElement("div");
    text.classList.add("ingred-text")
    text.textContent = ingred;

    const remove = document.createElement("div");
    remove.classList.add("remove-ingred")
    remove.textContent = "X";
    remove.addEventListener("click", ()=>{
        removeIngred(newIngred)
    });

    // Add to parent ingredient div
    newIngred.appendChild(text);
    newIngred.appendChild(remove);

    ingredList.appendChild(newIngred);
}

function removeIngred(element) {
    element.remove();
}
searchButton.addEventListener("click", async ()=>{
    let recipe = await search(ingredList);
    console.log(recipe)
});




export default addIngred;