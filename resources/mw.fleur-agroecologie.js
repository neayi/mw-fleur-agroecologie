var FleurAgroecologie_controller = (function () {
	'use strict';

	return {
		initializeDivs: function () {

			if ($(".fleurs-agroecologie").length == 0)
				return;

			let axes = [
				{'nom': 'autonomie', 'textes': [
					"Mon niveau d’autonomie est très faible",
					"Mon niveau d’autonomie est assez faible",
					"Mon niveau d’autonomie reste moyen et implique, en conséquence, une résilience encore limitée",
					"Mon niveau d’autonomie est très poussé.",
					"Mon niveau d’autonomie est extrêmement poussé et stable depuis plusieurs années."]},
				{'nom': 'resilience', 'textes': [
					"Je ne me sens pas suffisamment formé(e) sur la plupart de ces dimensions et je ne les prends pas en compte sur ma ferme.",
					"Je ne prends en compte que certaines de ces dimensions, sur une partie de ma ferme uniquement et de manière très limitée pour chacune.",
					"Je prends en compte la plupart de ces dimensions, mais sur une partie de ma ferme uniquement ou de manière limitée pour certaines.",
					"Je mets en pratique les dimensions me permettant d’être théoriquement résilient(e) face aux aléas environnementaux et économiques.",
					"Je mets en pratique les dimensions me permettant d’être théoriquement résilient(e) face aux aléas environnementaux et économiques. <b>J’ai pu le constater en y étant déjà confronté(e).</b>"]},
				{'nom': 'travail', 'textes': [
					"Mes conditions d’exercices ne sont pas acceptables et donc pas durables",
					"Mes conditions de travail ne sont acceptables qu’à très court terme.",
					"Je suis satisfait(e) de mes conditions de travail à court terme mais des aménagements devront avoir lieu pour les maintenir sur le long terme.",
					"Je suis satisfait(e) de mes conditions de travail même si je peux identifier encore quelques marges de progrès.",
					"Je suis durablement satisfait(e) de mon organisation, de mon temps de travail, du niveau de pénibilité physique, de la stimulation intellectuelle liée à mon activité et du sens que j’y trouve."]},
				{'nom': 'viabilite', 'textes': [
					"Je ne me sens pas suffisamment formé(e) sur les clefs de viabilité et ne suis pas en mesure de suivre la comptabilité de ma ferme.",
					"Mon EBE me permet de me verser une très faible rémunération après remboursement des annuités d'emprunt.",
					"Mon EBE me permet de me dégager une rémunération encore insatisfaisante après remboursement des annuités d'emprunt. La ferme reste financièrement fragile en cas d’aléas.",
					"Je peux me dégager une rémunération dont je suis satisfait depuis plusieurs années. Je maîtrise les clefs de viabilité et ma comptabilité.",
					"Je peux me dégager une rémunération dont je suis satisfait depuis plusieurs années. Mon EBE, en plus de me permettre de rembourser des annuités et de me dégager ce revenu, me permet d’investir dans ma ferme."]},
				{'nom': 'sante', 'textes': [
					"Je ne me sens pas suffisamment formé(e) sur la plupart de ces dimensions et je ne les prends pas en compte sur ma ferme.",
					"Je ne prends en compte que certaines de ces dimensions, sur une partie de ma ferme uniquement et de manière très limitée pour chacune.",
					"Je prends en compte la plupart de ces dimensions, mais sur une partie de ma ferme uniquement ou de manière limitée pour certaines.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme. Je mesure mes résultats : <b>ma ferme démontre qu’elle n’affecte en aucune manière la santé publique.</b>"]},
				{'nom': 'securite', 'textes': [
					"Je ne me sens pas suffisamment formé(e) sur la plupart de ces dimensions et je ne les prends pas en compte sur ma ferme.",
					"Je ne prends en compte que certaines de ces dimensions, sur une partie de ma ferme uniquement et de manière très limitée pour chacune.",
					"Je prends en compte la plupart de ces dimensions, mais sur une partie de ma ferme uniquement ou de manière limitée pour certaines.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme. Je mesure mes résultats : <b>je suis capable de chiffrer la contribution de ma ferme à un régime alimentaire moyen en terme d’apports divers et de calories, et d’objectiver les rendements de ma ferme par unité de surface.</b>"]},
				{'nom': 'territoire', 'textes': [
					"Je ne me sens pas suffisamment formé(e) sur la plupart de ces dimensions et je ne les prends pas en compte sur ma ferme.",
					"Je ne prends en compte que certaines de ces dimensions, sur une partie de ma ferme uniquement et de manière très limitée pour chacune.",
					"Je prends en compte la plupart de ces dimensions, mais sur une partie de ma ferme uniquement ou de manière limitée pour certaines.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme. Je mesure mes résultats : <b>ma ferme démontre de vrais impacts sur la connexion avec son territoire.</b>"]},
				{'nom': 'terroir', 'textes': [
					"Je ne me sens pas suffisamment formé(e) sur la plupart de ces dimensions et je ne les prends pas en compte sur ma ferme.",
					"Je ne prends en compte que certaines de ces dimensions, sur une partie de ma ferme uniquement et de manière très limitée pour chacune.",
					"Je prends en compte la plupart de ces dimensions, mais sur une partie de ma ferme uniquement ou de manière limitée pour certaines.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme. Je mesure mes résultats : <b>la qualité gustative de mes productions est reconnue.</b>"]},
				{'nom': 'biodiversite', 'textes': [
					"Je ne me sens pas suffisamment formé(e) sur la plupart de ces dimensions et je ne les prends pas en compte sur ma ferme.",
					"Je ne prends en compte que certaines de ces dimensions, sur une partie de ma ferme uniquement et de manière très limitée pour chacune.",
					"Je prends en compte la plupart de ces dimensions, mais sur une partie de ma ferme uniquement ou de manière limitée pour certaines.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme. Je mesure mes résultats : <b>ma ferme démontre un impact positif sur la biodiversité.</b>"]},
				{'nom': 'climat', 'textes': [
					"Je ne me sens pas suffisamment formé(e) sur la plupart de ces dimensions et je ne les prends pas en compte sur ma ferme.",
					"Je ne prends en compte que certaines de ces dimensions, sur une partie de ma ferme uniquement et de manière très limitée pour chacune.",
					"Je prends en compte la plupart de ces dimensions, mais sur une partie de ma ferme uniquement ou de manière limitée pour certaines.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme. Je mesure mes résultats : <b>ma ferme émet peu de GES, en stocke davantage et a donc un bilan carbone positif.</b>"]},
				{'nom': 'fertilite', 'textes': [
					"Je ne me sens pas suffisamment formé(e) sur la plupart de ces dimensions et je ne les prends pas en compte sur ma ferme.",
					"Je ne prends en compte que certaines de ces dimensions, sur une partie de ma ferme uniquement et de manière très limitée pour chacune.",
					"Je prends en compte la plupart de ces dimensions, mais sur une partie de ma ferme uniquement ou de manière limitée pour certaines.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme. Je mesure mes résultats : <b>ma ferme démontre un impact positif sur la fertilité naturelle de mes sols.</b>"]},
				{'nom': 'ressources', 'textes': [
					"Je ne me sens pas suffisamment formé(e) sur la plupart de ces dimensions et je ne les prends pas en compte sur ma ferme.",
					"Je ne prends en compte que certaines de ces dimensions, sur une partie de ma ferme uniquement et de manière très limitée pour chacune.",
					"Je prends en compte la plupart de ces dimensions, mais sur une partie de ma ferme uniquement ou de manière limitée pour certaines.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme.",
					"Je prends en compte l’ensemble de ces dimensions, et chacune de manière approfondie sur l’ensemble de ma ferme. Je mesure mes résultats : <b>la gestion des ressources sur ma ferme est maitrisée.</b>"]}];

			let popoverOptions = {
				trigger: 'hover click'
			  };

			$.ajax({
				url: "/extensions/FleurAgroecologie/resources/fleur-agroecologie.svg",
				method: "GET",
				dataType: 'html'
			}).done(function (data) {
				$(".fleurs-agroecologie").each(function() {
		
					let theDiv = $(this);
					theDiv.append(data);
					theDiv.find(".score").addClass("score-off");
	
					axes.forEach((axe) => {
						let value = theDiv.data(axe.nom);
						if (value == undefined)
							value = 0;

						for (let i = 1; i <= value; i++)
						{
							theDiv.find(".score-"+axe.nom+"-"+i).removeClass("score-off");
						}
						
						popoverOptions.content = axe.textes[value];
						theDiv.find(".score-"+axe.nom).popover(popoverOptions);
					});
				});
			});
		}
	};
}());

window.FleurAgroecologieController = FleurAgroecologie_controller;

(function () {
	$(document)
		.ready(function () {
			window.FleurAgroecologieController.initializeDivs();
		});
}());

