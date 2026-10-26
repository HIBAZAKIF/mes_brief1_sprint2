// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;
let id = 3;

// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.

const ul = document.getElementById("liste-produits");
const etat_vide = document.getElementById("etat-vide");
const nom_produit = document.getElementById("nom");
const prix_produit = document.getElementById("prix");
const btn_submit = document.querySelector("form>button");
const total = document.getElementById("total");



btn_submit.addEventListener("click" , (event)=>{
  event.preventDefault();
  ajouter();
})



function afficher (){
  if(produits.length == 0){

    etat_vide.style.display = "block";

  }else{
    etat_vide.style.display = "none" ;
    ul.textContent = "";
    let compteur = 0
    produits.forEach(element , index => {
         const li = document.createElement("li");
          ul.append(li);
          li.classList.add("produit");

          const div = document.createElement("div");
          li.append(div);

          const strong = document.createElement("strong");
          div.append(strong);
          strong.textContent = element.nom ;
          strong.classList.add("nom-produit");

          const span = document.createElement("span");
          div.append(span);
          span.textContent = element.prix ;
          span.classList.add("prix-produit");

          const btn = document.createElement("button");
          li.append(btn);
          btn.textContent = "Retirer" ;
          btn.classList.add("supprimer");
          btn.type = "button"; 
          compteur += Number(element.prix);

          const btn_supprimer = document.getElementsByClassName("supprimer");
          btn_supprimer.addEventListener("click" , ()=>{console.log("fgh")})

         
     });
     total.textContent = compteur;
  }
     
}
afficher();

function ajouter(){
  if(nom_produit.value == "" || prix_produit.value <= 0){
    return
  }  
  const objet = {
      id : id++,
      nom : nom_produit.value,
      prix : prix.value
    }
    produits.push(objet);
    afficher();
}

function supprimer(id){
  let index_sup ;
  produits.forEach((element,index )=> {
    if(element.id == id){
        index_sup = index;
    }
  });

  if(index_sup == undefined){
    return
  }

  produits.splice(index_sup , 1);
  afficher();

}

