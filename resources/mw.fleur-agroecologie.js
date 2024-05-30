var FleurAgroecologie_controller = (function () {
	'use strict';

	return {
		initializeDivs: function () {

			let axes = [
				'autonomie',
				'resilience',
				'travail',
				'viabilite',
				'sante',
				'securite',
				'territoire',
				'terroir',
				'biodiversite',
				'climat',
				'fertilite',
				'ressources'];
			
			$.ajax({
				url: "/extensions/FleurAgroecologie/resources/fleur-agroecologie.svg",
				method: "GET",
				dataType: 'html'
			}).done(function (data) {
				console.log(data);

				$(".fleurs-agroecologie").each(function() {
		
					let theDiv = $(this);
					theDiv.append(data);
					theDiv.find(".score").addClass("score-off");
	
					axes.forEach((axe) => {
						let value = theDiv.data(axe);
	
						for (let i = 1; i <= value; i++)
						{
							theDiv.find(".score-"+axe+"-"+i).removeClass("score-off");
						}
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

