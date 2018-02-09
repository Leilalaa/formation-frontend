// Création d'un tableau villes
var villes = ['Nantes','Paris','Saint-Nazaire','Angers','Le Mans'];

// Affichage de chaque élément du tableau
villes.forEach(function(element) {
  console.log(element)
});

// Determiner si toutes les villes contiennent la lettre A

function trouverLettreA(element) {
  if(element.indexOf('a')!= -1 || element.indexOf('A')!= -1 ){
    return true;
  }
}

console.log("lettreADansToutesLesVilles ==", villes.every(trouverLettreA))

// Determiner si au moins une ville contient le caractère '-'
function trouverTiret(element) {
  if(element.indexOf('-')!= -1 ){
    return true;
  }
}

console.log("auMoinsUneVilleAvecUnTiret ==", villes.some(trouverTiret))

// Création d'un tableau contenant seulement les villes sans tiret ni espace
function trouverTiretEspace(element) {
  if(element.indexOf('-') == -1 && element.indexOf(' ') == -1){
    return true;
  }
}

console.log("villesSansTiretSansEspace ==", villes.filter(trouverTiretEspace))

// Construction d'un tableau contenant les villes avec s en derniere lettre (en majuscule)

console.log("villesMajusculeSeTerminantParS ==", villes.filter(v => v.endsWith('s')).map(v => v.toUpperCase()));
