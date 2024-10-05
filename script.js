//Crétation du Titre de la page
const pageTitle = document.querySelector(".title")
const title = document.createElement("h1");
title.innerText = "La liste de Tâches d'Alex";
pageTitle.appendChild(title);



// Creation d'une liste prédéfinie
const list = ["Faire mes cours","Aller au sport","Faire mes courses","Nettoyer le sol","Faire des gâteaux"];
// création des variables disponible sur le dom
const taskList = document.querySelector("#taskList");
const taskBtn = document.querySelector("#addTaskBtn");
const inputTask = document.querySelector("#input-tsk");

//-------------------------Création de la Liste DOM---------------------------

// On affiche les éléments de la list dans le DOM
function listOnDisplay(){
    // On efface la liste actuelle
    taskList.innerHTML="";
    // On récupère les élements de la liste "Item" 
    list.forEach(item =>{
        // On créé les "li" 
        const listItem = document.createElement("li");
        // On ajoute "item" à nos "li"
        listItem.innerText = item;
        // On rattache nos "li" à notre parent "taskList"
        taskList.appendChild(listItem)
    });
}

// --------------On ajoute de nouvelles tâches à notre list-------------------

    // On met un élément d'écoute sur notre btn 
taskBtn.addEventListener("click", () =>{
    // notre btn va récupérer la valeur de notre inputTask puis la nettoyer
    const inputTaskValue = inputTask.value.trim();
    // On ajoute une condition si notre input à un contenue 
    if (inputTaskValue !=="") {
        // Si il y a du contenu, alors on ajoute à la liste 
        list.push(inputTaskValue);
        // On met à jour la list à l'écran (voilà pourquoi on l'a déclaré avant)
        listOnDisplay();
        // Enfin, on réinitialise l'input
        inputTask.value = ""; 
    }else{
        alert("Veuillez rentrer une nouvelle Tâche avant d'ajouter à la liste")
    }
})

//-----------------------------------------------------------------------------

//on affiche la liste initiale au chargement de la page
listOnDisplay();