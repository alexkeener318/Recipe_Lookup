import { search } from "./index";

let ingreds = [];
const ingredList = document.querySelector(".ingreds");
const searchBar = document.querySelector("input");
const searchButton = document.querySelector("#search");
const results = document.querySelector(".display");

searchBar.addEventListener("keydown", (event)=>{
    if(event.key === "Enter" ){
        addIngred(searchBar.value);
        searchBar.value = "";
    }
});


function addIngred(ingred) {
    ingreds.push(ingred);
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
    let name = element.firstChild.textContent;
    let index = ingreds.indexOf(name);
    ingreds.splice(index,1);
    element.remove();
}
searchButton.addEventListener("click", async ()=>{
    let recipe = await search(ingreds);
    console.log("output: " + recipe)
    appendResults(recipe);
});

function appendResults(recipes) {
    //console.log(inside);
    for(let i = 0; i < recipes.length; i++){
        const name = document.createElement("div");
        name.classList.add("info")
        name.textContent = recipes[i].name;

        const ingred = document.createElement("div");
        ingred.classList.add("info")
        ingred.textContent = recipes[i].ingredients;

        const next = document.createElement("div");
        next.classList.add("info")
        next.classList.add("link")
        next.textContent = "Click Here";

        results.appendChild(name);
        results.appendChild(ingred);
        results.appendChild(next);
    }
}



export default addIngred;