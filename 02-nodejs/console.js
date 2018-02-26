// On déclare le fait que l'on ait besoin de readLine, de notre service.js et on créé une variable menu
const readline = require('readline');
const service = require('./service.js');

showMain();

// Main
function showMain() {

	// On affiche dans la console le menu
	console.log(
	        '*** Application Conférence ***\n\n' +
	        '1. Liste de tous les présentateurs\n' +
	        '2. Top présentateurs\n' +
	        '3. Liste des sessions\n' +
	        '4. Détail d\'une session\n' +
	        '5. Quitter le menu'
	        );

	// On crée une interface readline
    var menu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // On créé notre question readLine, et on traite la réponse dans un switch
	menu.question('Que souhaitez-vous faire ?', (answer) => {

	  switch(answer) {

            case '1': console.log(service.listerTousLesPresentateurs()); break;
            case '2': console.log(service.listerTopPresentateurs()); break;
            case '3': console.log(service.listerToutesLesSessions()); break;
            case '4': sessionDetail();
            case '5' : break;
            default: showMain();
        }

        menu.close();

	});

}

function sessionDetail(){

	// On crée une interface readline
    var menu2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // On demande à l'utilisateur l'identifiant de la session dont il souhaite connaitre les informations et on utilise sa réponse en paramètre de la fonction créée dans service.js
	menu2.question('Veuillez entrer l\'identifiant de la session', (answer) => {
		
		console.log(service.trouverUneSession(answer));
	
	rl.close();

	});

}

