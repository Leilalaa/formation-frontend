// Création d'une fonction créant un objet de type personne

function Personne(nom,prenom,pseudo){

  this.nom = nom;
  this.prenom = prenom;
  this.pseudo = pseudo;

  this.getNomComplet = function() {

    return console.log(nom, prenom);

  }
  // Création d'une fonction afficherPersonne pour afficher les informations d'une personne
  afficherPersonne = function(personne) {
    console.log(personne.nom, personne.prenom, personne.pseudo)
    personne.getNomComplet()
  }

  // Création d'une fonction getInitiales retournant une chaine de caractères composée de la première lettre du prénom et de la première lettre du nom
  this.getInitiales = function() {

    return console.log(this.nom.charAt(0),this.prenom.charAt(0));

  }

}

// Création d'objets
var jules = new Personne("LEMAIRE","Jules","jules77");
var paul = new Personne("LEMAIRE","Paul","paul44");

// Différents affichages
console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
jules.getNomComplet();

afficherPersonne(paul);

jules.pseudo = "jules44";
afficherPersonne(jules);

// Ajout de l'âge
Personne.prototype.age = "NON RENSEIGNE"
console.log(jules.age);
jules.age=30;
console.log(jules.age);
jules.getInitiales();


// Objet sans fonction constructeur
var robert = {nom : "LEPREFET",
                prenom : "Robert",
                pseudo : "robert77",
                getNomComplet : function(){
                  return console.log(this.nom, this.prenom, this.pseudo);
                }
              }
robert.getNomComplet();
afficherPersonne(robert);

// Héritage via une fonction constructeur

// Création d'une fonction constructeur client
function Client(nom,prenom,pseudo,numeroClient){

  Personne.call(this,nom,prenom,pseudo);
  this.numeroClient = numeroClient;


  // Création d'une fonction getInfos pour afficher les informations d'un client
  getInfos = function(personne) {
    console.log(personne.numeroClient, personne.nom, personne.prenom);
  }
}

// Utilisation de call


var steve = new Client("LUCAS","Steve","steve44","A01");
afficherPersonne(steve);
console.log(steve.numeroClient);
getInfos(steve);
