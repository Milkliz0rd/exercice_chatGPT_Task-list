//Crétation du Titre de la page
const pageTitle = document.querySelector(".title");
const title = document.createElement("h1");
title.innerText = "La liste de Tâches d'Alex";
pageTitle.appendChild(title);

// Creation d'une liste prédéfinie
const list = [];
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

//----Ajout d'évenement sur la touche entrée quand on veut valider l'input------

// On crée la fonction qui ajoute un item à notre liste

  // on déclare la valeur de input Task dans une variable

  // on fait une condition qui nous dit "si la valeur d'inputTask n'est pas vide"

  // on ajoute la valeur à notre tableaux (parent) list

  // on ajoute la list à l'écran

  // on enlève notre valeur d'input

  // par contre, si la valeur est vide

//-----------------------------------------------------------------------------
//Ajout du listener du bouton

//-----------------------------------------------------------------------------
//ajout du listener de l'input

// condition si la touche est entré

// appel à la fonction addItem

// on vide la valeur de l'input