// Creation d'une liste prédéfinie
const list = ["Faire mes cours","Aller au sport","Faire mes courses","Nettoyer le sol","Faire des gâteaux"];
// création des variables disponible sur le dom
const taskList = document.querySelector("#taskList");
const taskBtn = document.querySelector("#addTaskBtn");

// création de la function pour faire apparaitre la liste à l'écran
function listOnDisplay (){
    // vide la liste lorsqu'on rappuie sur le bouton
    taskList.innerHTML = "";
    // On récupère chaque élément de la liste 
    for (let i = 0; i < list.length; i++ ){
        // On créé l'élément HTML "li"
        let itemList = document.createElement("li");
        // On créé le contenue de "li" en prenant les éléments de list
        itemList.innerText = list[i];
        // On ajoute les "li" de itemList au parent "ul" TaskList
        taskList.appendChild(itemList);
    }        
}

// On appel la function avec le clique du bouton
taskBtn.addEventListener("click", listOnDisplay);