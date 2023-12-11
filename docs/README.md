# Architecture technique

- [Architecture technique](#architecture-technique)
  - [Description](#description)
  - [Contributeurs](#contributeurs)
  - [Fonctionnalités](#fonctionnalités)
  - [Stack](#stack)
  - [Tools](#tools)
    - [Sécurité](#sécurité)
  - [Bonnes pratiques](#bonnes-pratiques)
    - [Design Patterns](#design-patterns)
  - [Prérequis](#prérequis)
  - [Installation](#installation)
  - [Lancer les tests](#lancer-les-tests)
  - [Déploiement](#déploiement)
  - [Contribuer](#contribuer)
  - [Documentation](#documentation)
  - [Licence](#licence)
  - [Ressources Supplémentaires](#ressources-supplémentaires)
    - [Sitographie](#sitographie)
  - [Remerciements](#remerciements)
  - [FAQ](#faq)

## Description

Ce projet API d'Authentification est une application Web finale conçue pour permettre de gérer les processus d'authentification pour deux entités, les plateformes ou compagnies et les utilisateurs. On fonctionne exactement comme Google et le processus est simple, si une plateforme est reconnu comme compagnie sur notre site, nos utilisateurs ayant un compte chez nous peuvent s'authentifier avec ses informations sur cette plateforme. Elle utilise principalement du React en front, du Node.js en back et suit les meilleures pratiques de développement front-end et back-end.

## Contributeurs
    
- [Jiad ABDUL](https://github.com/jiaad)
- [GLIN-DAYI Faithgot](https://github.com/Faithgg)
- [Paul Charbel](https://github.com/SirMacCready)
- [Yassine HAMIL](https://github.com/YassineHamil)
- [Arthur ZAJAC](https://github.com/jiad-saegus)

## Fonctionnalités

### Company
1. Gestion des compagnies : Enregistrement, connexion (uniquement via notre interface), modification, et suppression des comptes utilisateurs.
2. Changement de mot de passe en deux processus : Génération du token unique et validation du token.
3. Protocoles de sécurité : Utiliser des protocoles de sécurité standards tels que HTTPS, cryptage des mots de passe, et éventuellement l'authentification via une interface visuelle.
4. Authentification unique (SSO) : Permettre aux utilisateurs de se connecter une fois et d'accéder à tous les sites membres sans avoir à se reconnecter. (Idéale non concrétisée)
5. Journalisation des activités : Enregistrer les activités liées à l'authentification pour des raisons de sécurité et de suivi (Idéale non concrétisée) .

### Users
1. Gestion des utilisateurs : Enregistrement,connexion (via notre interface et via la plateforme de la compagnie), modification et suppression des comptes utilisateurs.
2. Changement de mot de passe en deux processus : Génération du token unique et validation du token.
3. Protocoles de sécurité : Utiliser des protocoles de sécurité standards tels que HTTPS, cryptage des mots de passe, et éventuellement l'authentification via une interface visuelle.
4. Authentification unique (SSO) : Permettre aux utilisateurs de se connecter une fois et d'accéder à tous les sites membres sans avoir à se reconnecter. (Idéale non concrétisée)
5. Journalisation des activités : Enregistrer les activités liées à l'authentification pour des raisons de sécurité et de suivi (Idéale non concrétisée) .


## Stack

- **Backend** : [Nodejs](https://nodejs.org/) + [Express](https://expressjs.com/fr/)
- **Frontend** : [React](https://reactjs.org/)
- **BDD** : [MongoDB](https://www.mongodb.com/fr-fr)
- **Architecture** : Fonctionnement microservice

## Tools

- **Code Quality** : [ESLint](https://eslint.org/) 
- **Hosting** : [Netlify](https://www.netlify.com/)
- **CSS** : [Tailwind](https://tailwindcss.com/)
- **Testeur d'API** : [POSTMAN](https://tailwindcss.com/)

### Sécurité

- [jwt](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

## Bonnes pratiques

- DRY

### Design Patterns

- MVC

## Prérequis

- [Lister les prérequis pour installer et exécuter le projet.]
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Installation

- 1. Cloner le projet :
  
  ```bash
  git clone [URL du dépôt]
  ```

- 2. Installer les dépendances :

```bash
npm install
```

- 3. Tout ce qu'il y a à savoir pour préparer le projet au lancement se trouve sur https://github.com/jiaad/UM-hetic?tab=readme-ov-file#endpoints

- 4. Lancer le projet :

 ```bash
npm start
```


## Déploiement

[Aucune instruction spécifique au déploiement]

## Contribuer

- Ce projet n'est pas pour le moment OpenSource

## Documentation

Lien vers la documentation complète du projet: https://github.com/jiaad/UM-hetic?tab=readme-ov-file#documentation-de-lapi-dauthentification.

## Licence

Aucune

## Ressources Supplémentaires

- https://developer.mozilla.org/fr/docs/Learn/Server-side/Express_Nodejs/Introduction
- https://welovedevs.com/fr/articles/mongodb/#:~:text=D%C3%A9marrer%20avec%20MongoDB%20est%20tr%C3%A8s,effectuer%20ses%20premi%C3%A8res%20requ%C3%AAtes%20MongoDB.

### Sitographie

- [roadmaps.sh](https://roadmap.sh/software-design-architecture)

## Remerciements

- Openshiftapps & Red Hat
- Google Auth

## FAQ

- Votre ApI est disponible en ligne?
- > OUI, mais temporairement. Le côté backend de l'application était mis en ligne grace à Openshiftapps qui donne un espace gratuit pendant 30jours, une fois ce délais passé, vous allez devoir télécharger le repos et suivre les indications de la docs pour faire tourner le projet.
