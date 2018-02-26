// On reccupère notre dossier data en tant que module
var data = require('./data/devfest-2015.js');

// On affiche le contenu du tableau de speakers contenu dans data
exports.listerTousLesPresentateurs = function(){

	return data.speakers;

}

// On affiche le contenu du tableau de sessions contenu dans data
exports.listerToutesLesSessions = function(){

	return data.sessions;

}

// On affiche une session particulière en la recherchant parmis les sessions via son id
exports.trouverUneSession = function(idSession){

	 return data.sessions.find(function(session){

        return session.id == idSession;

    })

}

// On affiche les presentateurs ayant la valeur true à toppresentateur
exports.listerTopPresentateurs = function(){

	return data.speakers.filter(function(speaker){

        return speaker.topspeaker;

    })


}

