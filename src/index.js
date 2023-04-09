import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAhuoE6YMI6jU3w0fehj8iSh6fvzTFFcN0",
    authDomain: "recipe-lookup-bee2b.firebaseapp.com",
    projectId: "recipe-lookup-bee2b",
    storageBucket: "recipe-lookup-bee2b.appspot.com",
    messagingSenderId: "98458353965",
    appId: "1:98458353965:web:b2cf354725430fec5b93a4",
    measurementId: "G-XCTF7BM71K"
  };

const app = initializeApp(firebaseConfig);

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