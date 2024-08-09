# Documentation de l'API

## Structure du Projet

Le projet est organisé de la manière suivante :

- **`server.js`** : Point d'entrée de l'application Express.js. Ce fichier configure et lance l'application en utilisant les routes définies.

- **`app.js`** : 
  - **Gestion des Routes** : Ce fichier importe et monte les routes, permettant à l'API d'être accessible via les endpoints définis.

****

- **`controllers/`** : Ce répertoire contient les contrôleurs pour la gestion des requêtes HTTP relatives aux opérations CRUD.
  - **`Get.controller.js`** : Contrôleur pour l'obtention des informations des utilisateurs.
  - **`Post.controller.js`** : Contrôleur pour la création d'un utilisateur.
  - **`UpdateOneUser.controller.js`** : Contrôleur pour la modification des informations d'un utilisateur.
  - **`Delete.controller.js`** : Contrôleur pour la suppression des informations d'un utilisateur.
  - **`GetOneUser.controller.js`** : Contrôleur pour la récupération des informations d'un utilisateur.

****

- **`routes/`** : Ce répertoire contient la définition des routes de l'API.

****

- **`model/`** : Ce répertoire contient le schéma Mongoose utilisé pour définir le modèle de données de l'application.

****

- **`config/`** : Ce répertoire contient les fichiers de configuration.
  - **`connect.db.js`** : Gère la connexion à la base de données.

****

## Installation et Exécution

1. Assurez-vous que Node.js est installé sur votre machine.
2. Clonez ce dépôt sur votre machine locale.
3. Installez les dépendances en exécutant la commande suivante :
   ```bash
   npm install

   ```
4. Lancez le serveur en exécutant la commande suivante :
   ```bash
   npm start

   ```
## Utilisation de l'API

L'API expose les endpoints suivants :

  - `POST /user/postUser` : Enregistre les informations d'un nouvel utilisateur.
    - Paramètres : `nom`, `prenom`, `email`, `password`, `role`, `status`, `phone`, `adresse`
    - Réponse : Un format JSON contenant les informations de l'utilisateur.

  - `GET /user/getUser` : Récupère la liste des utilisateurs.
    - Paramètres : Aucun
    - Réponse : Liste des utilisateurs avec leurs informations (`nom`, `prenom`, `email`, `role`, `status`, `phone`, `adresse`, `password`) au format JSON.
  
  - `PUT /user/updateOneUser/{id}` : Modifie les informations d'un utilisateur.
    - Paramètres : `id` (identifiant de l'utilisateur), `nom`, `prenom`, `email`, `password`, `role`, `status`, `phone`, `adresse`
    - Réponse : Un format JSON contenant les informations de l'utilisateur.

  - `DELETE /user/deleteUser/{id}` : Supprime un utilisateur par son identifiant.
    - Paramètres : `id` (identifiant de l'utilisateur)
    - Réponse : `message: User deleted successfully`

  - `GET /user/getOneUser/{id}` : Récupère les informations d'un utilisateur.
    - Paramètres : `id` (identifiant de l'utilisateur)
    - Réponse : Un format JSON contenant les informations de l'utilisateur.

## **Configuration**

Vous pouvez configurer le port sur lequel le serveur écoute en modifiant la variable d'environnement `PORT`, ou en définissant un port par défaut dans `server.js`.

---

Cette documentation fournit un aperçu de la structure du projet, explique comment l'installer et l'exécuter, décrit l'utilisation de l'API et mentionne les options de configuration disponibles.

## Auteur

Ce projet a été développé par El Hadji Seydou Badiane dans le cadre du test d'obtention de stage chez Dexchange.****