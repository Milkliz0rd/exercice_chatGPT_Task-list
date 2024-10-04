//Tableau des tâches
const taches = ["faire les courses", "aller au coiffeur","aller chercher Bjorn à l'école", "faire à manger"]
// élements du Dom
const btnTache = document.querySelector("#addTaskBtn")
const listeTache = document.querySelector("#taskList")

//fonction ajouter tâche à la liste html
function addTaskListDom (){
    //boucle for
    for (let i=0; i < taches.length; i++) {
        // création des li 
        let listItem = document.createElement("li");
        // contenue des li
        listItem.textContent = taches[i];
        // ajout des li au dom
        listeTache.appendChild(listItem);
    };
};

btnTache.addEventListener("click",addTaskListDom);