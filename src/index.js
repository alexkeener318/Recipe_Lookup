import {initializeApp} from 'firebase/app'
import { getDatabase,ref, set, get } from "firebase/database";
import addIngred from './search';

const firebaseConfig = {
    apiKey: "AIzaSyAhuoE6YMI6jU3w0fehj8iSh6fvzTFFcN0",
    authDomain: "recipe-lookup-bee2b.firebaseapp.com",
    projectId: "recipe-lookup-bee2b",
    storageBucket: "recipe-lookup-bee2b.appspot.com",
    messagingSenderId: "98458353965",
    appId: "1:98458353965:web:b2cf354725430fec5b93a4",
    measurementId: "G-XCTF7BM71K",
    databaseURL: "https://recipe-lookup-bee2b-default-rtdb.firebaseio.com/",
  };

const app = initializeApp(firebaseConfig);


function addRecipe(recipeID, rName, ingreds, rSteps, image){
    const db = getDatabase(app);
    const reference = ref(db, 'recipes/' + recipeID);

    set(reference, {
        name: rName,
        ingredients: ingreds,
        steps: rSteps,
        url: image
    });
}

async function search(ingreds){
    const db = getDatabase(app);
    const recipesRef = ref(db, 'recipes');
    const snapshot = await get(recipesRef);
    console.log(snapshot.val());
    let recipes = snapshot.val();
    for(let i = 0; i < recipes.length; i++){
        // split ingredients
        let recipeIngreds = recipes[i].ingredients.split(',');
        console.log(recipeIngreds);
        let works = true;
        console.log(ingreds.length);
        for(let j = 0; j < ingreds.length; j++){
            console.log("seeing if " + recipeIngreds + " contains " + ingreds[j]);
            if(!recipeIngreds.includes(ingreds[j])){
                works = false;
                break;
            }
        }
        if(works){
            console.log(recipes[i]);
        }
    }
    return snapshot.val();
}


export {search};