angjs
	-lib
		-jasmine-2.4.1
			-boot.js
			-console.js
			-jasmine-html.js
			-jasmine.css
			-jasmine.js
			-jasmine_favicon.png
		-angular-mocks.js
		-angular.min.js
	-spec
		-balanceApp.controller.spec.js
	-Readme.txt
	-SpecRunner.html
	-app.js
	-balance.png
	-favicon.ico
	-index.html
	-styles.css

Le dossier lib contient les bibliotheques utilisees lors du developpement de l'application et des tests unitaires

Le dossier spec contient les fichiers de tests

Pour lancer l'application, il est possible d'installer le package browser-sync avec npm en executant la commande "npm install -g browser-sync". Il suffit apres de lancer un serveur avec la commande 'browser-sync start --server --directory --files "**/*" ' dans le dossier du projet. Le navigateur s'ouvrira a la page d'accueil et affiche le contenu du dossier. Si on clique sur le fichier index.html, l'application s'ouvrira.

Pour lancer les tests, il suffit d'ouvrir le fichier SpecRunner.html dans sur un navigateur, les tests s'executeront automatiquement.