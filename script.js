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
// ajout de la variable de notre input

//-------------------------Création de la Liste DOM---------------------------

// On affiche les éléments de la list dans le DOM

    // On efface la liste actuelle

    // On récupère les élements de la "list" grace à une fonction "item"

        // On créé les "li" avec "listItem"

        // On ajoute "item" à nos "li"

        // On rattache nos "li" à notre parent "taskList"
  
// --------------On ajoute de nouvelles tâches à notre list-------------------

    // On met un élément d'écoute sur notre btn 
 
    // notre btn va récupérer la valeur de notre inputTask puis la nettoyer

    // On ajoute une condition si notre input à un contenue 

        // Si il y a du contenu, alors on ajoute à la liste 

        // On met à jour la list à l'écran (voilà pourquoi on l'a déclaré avant)

        // Enfin, on réinitialise l'input
      
        // par contre si notre input est vide
 
//-----------------------------------------------------------------------------

//on affiche la liste initiale au chargement de la page
