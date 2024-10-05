//Crétation du Titre de la page
const pageTitle = document.querySelector(".title")
const title = document.createElement("h1");
title.innerText = "La liste de Tâches d'Alex";
pageTitle.appendChild(title);



// Creation d'une liste prédéfinie
const list = [];
// création des variables disponible sur le dom
const taskList = document.querySelector("#taskList");
const taskBtn = document.querySelector("#addTaskBtn");
// ajout de la variable de notre input
const inputTask = document.querySelector("#input-tsk")
//-------------------------Création de la Liste DOM---------------------------

// On affiche les éléments de la list dans le DOM
function addListOnDisplay () {
    // On efface la liste actuelle
    taskList.innerHTML="";
    // On récupère les élements de la "list" grace à une fonction "item"
    list.forEach(item => {
        // On créé les "li" avec "listItem"
       const listItem = document.createElement("li");
        // On ajoute "item" à nos "li"
        listItem.innerText = item;
        // On rattache nos "li" à notre parent "taskList"
        taskList.appendChild(listItem);
    })
    }

//----Ajout d'évenement sur la touche entrée quand on veut valider l'input------

    // On crée la fonction qui ajoute un item à notre liste
   function addItem () {
    // on déclare la valeur de input Task dans une variable
    const valueInputTask = inputTask.value.trim();
    // on fait une boucle qui nous dit "si la valeur d'inputTask n'est pas vide"
    if (valueInputTask !== ""){
    // on ajoute la valeur à notre tableaux (parent) list
        list.push(valueInputTask);
    // on ajoute la list à l'écran
        addListOnDisplay();
    // on enlève notre valeur d'input
        inputTask.value="";
    // par contre, si la valeur est vide 
    }else{
        alert("Veuillez entrer une tâche avant de valider")
    }
   }
   //Ajout du listener du bouton
   taskBtn.addEventListener("click", addItem);
   //ajout du listener de l'input
   inputTask.addEventListener("keypress", (event) =>{
    // condition si la touche est entré
    if (event.key === "Enter") {
    // appel à la fonction addItem
        addItem();
    // on vide la valeur de l'input
        inputTask.value = "";
    }
   })
//-----------------------------------------------------------------------------

//on affiche la liste initiale au chargement de la page
addListOnDisplay();