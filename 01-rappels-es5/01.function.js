// Declaration des variables
var nombre1 = 10;
var nombre2 = 20;

// Fonction servant d'additionner deux nombres
function additionner(nb1,nb2){
  return nb1+nb2;
}

// On affecte à la variable somme la fonction d'addition
somme = additionner;

// On crée une variable de type fonction qui effectue une multiplication entre deux nombres
multiplication = function (nb1,nb2){
  return nb1*nb2;
};

// Fonction permettant d'afficher le nom d'une opération, d'afficher et effectuer ladite opération et d'afficher également le résultat
afficherOperation = function(nomOperation, operation, nb1, nb2){
  return console.log(nomOperation, "== [ nb1 == ",nb1," nb2 == ", nb2,"] ==", operation(nb1,nb2));
}

// Création de variables contenant le résultat obtenus par les fonctions précédemment créés
resultat1 = additionner(nombre1, nombre2);
resultat2 = somme(nombre1, nombre2);
resultat3 = multiplication(nombre1, nombre2);


// Affichage des différents résultats
console.log("resultat1 ==", resultat1);
console.log("resultat2 ==", resultat2);
console.log("resultat3 ==", resultat3);

// Utilisation de la fonction d'affichage des operations définie plus haut, qui affichera son resultat par elle même
afficherOperation("Somme", somme, 20, 40);
afficherOperation("Multiplication", multiplication, 10, 20);
afficherOperation("Soustraction", (function(nb1,nb2){return nb1-nb2}), 15,5);
