let ingreds = [];
const ingredList = document.querySelector(".ingreds");
const search = document.querySelector("input")

search.addEventListener("keydown", (event)=>{
    if(event.key === "Enter" ){
        addIngred(search.value);
        search.value = "";
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