# SIG Mobile — Sprint 1

Mini-projet pour la matière **Méthodes Agiles**, repris d'un ancien projet SIG Mobile.

## Objectif

Afficher une carte Leaflet de Ben Arous et trois points fictifs avec leurs descriptions. La page contient aussi l'objectif du sprint, le planning proposé et les critères d'acceptation. Durée prévue : une semaine. Validation de la prof : à réaliser.

## Membres

À compléter : noms du binôme, groupe et dates du sprint.

## Mettre le dossier sur GitHub

1. Créer un dépôt, par exemple **sig-mobile-sprint-1**.
2. Choisir **Add file → Upload files**.
3. Déposer le contenu de ce dossier à la racine du dépôt : **index.html** doit se trouver directement à la racine, pas dans un sous-dossier.
4. Enregistrer avec **Commit changes**. Un premier commit suffit : ne pas inventer un historique de sprints.

## Activer GitHub Pages

Dans le dépôt : **Settings → Pages → Build and deployment**.

- Source : **Deploy from a branch**.
- Branch : **main** (ou la branche qui contient vos fichiers).
- Folder : **/ (root)**.
- Cliquer **Save** et attendre la publication ; GitHub indiquera l'adresse du site.

L'adresse aura généralement la forme https://VOTRE-COMPTE.github.io/sig-mobile-sprint-1/.
Ce modèle est à adapter ; le site n'est pas encore publié.

Le fichier .nojekyll permet de servir directement les fichiers statiques.
Documentation : https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Démonstration locale

Node.js et Internet sont nécessaires en local. Aucun npm install ni MySQL requis.

Sous Windows : double-cliquer **DEMARRER-SPRINT-1.cmd**, garder la fenêtre ouverte puis ouvrir http://127.0.0.1:8781/.

Autres systèmes : exécuter **node serve-sprint-1.js** dans le dossier, puis ouvrir la même adresse.

Éviter l'ouverture directe du HTML depuis le disque : le fournisseur de tuiles peut bloquer les requêtes sans référent HTTP. Sur GitHub Pages, aucun serveur local ni Node.js n'est nécessaire pour le visiteur.

## Périmètre et limites

- Trois signalements fictifs, sans données personnelles ni base réelle.
- Carte, zoom, popups et recentrage.
- Leaflet et tuiles OpenStreetMap chargés via Internet ; leur disponibilité dépend des services externes.
- Ajout, modification, recherche, statuts et statistiques prévus dans les sprints suivants.
- La fiche docs/REVUE_SPRINT_1.md est à compléter après les essais et la revue.

## Vérifications à réaliser avant présentation

Ouvrir le site, vérifier les trois points, leurs fiches, le zoom, le recentrage et l'affichage mobile. Consigner les résultats réels et les retours de la prof.

## Crédits

Carte : Leaflet 1.9.4 ; fond © OpenStreetMap contributors (attribution visible sur la carte).
