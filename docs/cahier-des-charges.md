# Cahier des Charges Techniques

- [Cahier des Charges Techniques](#cahier-des-charges-techniques)
  - [1. Introduction](#1-introduction)
    - [1.1 Objectif du Document](#11-objectif-du-document)
    - [1.2 Portée du Projet](#12-portée-du-projet)
  - [2. Spécifications Techniques](#2-spécifications-techniques)
    - [2.1 Architecture Système](#21-architecture-système)
      - [Exemple de diagramme d'architecture (mermaid)](#exemple-de-diagramme-darchitecture-mermaid)
      - [Exemple de diagramme de base de données (mermaid)](#exemple-de-diagramme-de-base-de-données-mermaid)
    - [2.2 Choix Technologiques](#22-choix-technologiques)
    - [2.3 Interfaces Système](#23-interfaces-système)
    - [2.4 Sécurité](#24-sécurité)
  - [3. Développement](#3-développement)
    - [3.1 Gestion de Version](#31-gestion-de-version)
    - [3.2 Normes de Codage](#32-normes-de-codage)
    - [3.3 Tests](#33-tests)
  - [4. Déploiement et Maintenance](#4-déploiement-et-maintenance)
    - [4.1 Environnements](#41-environnements)
    - [4.2 CI/CD](#42-cicd)
    - [4.3 Plan de Maintenance](#43-plan-de-maintenance)
  - [5. Documentation](#5-documentation)
    - [5.1 Documentation Technique](#51-documentation-technique)
    - [5.2 Documentation Utilisateur](#52-documentation-utilisateur)
    - [6. Features](#6-features)
      - [Exemple de plannification de taches](#exemple-de-plannification-de-taches)
        - [Liste des Fonctionnalités du Projet](#liste-des-fonctionnalités-du-projet)
        - [Temps Estimé par Tâches](#temps-estimé-par-tâches)
        - [Scope Défini](#scope-défini)
        - [Priorité Définie](#priorité-définie)
        - [Date de Fin](#date-de-fin)
          - [Exemple de diagramme de Gantt (mermaid)](#exemple-de-diagramme-de-gantt-mermaid)
  - [6. Glossaire](#6-glossaire)
  - [7. Annexes](#7-annexes)
  - [8. Conclusion](#8-conclusion)

## 1. Introduction

### 1.1 Objectif du Document

Ce document vise à définir de manière exhaustive les spécifications techniques de notre projet. Il sert de référence pour toutes les parties prenantes impliquées dans le développement, la mise en œuvre et la maintenance du projet.

### 1.2 Portée du Projet

Cette API permet de gérer les processus d'authentification pour deux entités, les plateformes ou compagnies et les utilisateurs. Pour être plus simple, on fonctionne exactement comme Google et le processus est simple, si une plateforme est reconnu comme compagnie sur notre site, nos utilisateurs ayant un compte chez nous peuvent s'authentifier avec ses informations sur cette plateforme.

## 2. Spécifications Techniques

### 2.1 Architecture Système

- Architecture Globale : Modulaire.

- Diagrammes d'Architecture : https://mermaid.live/view#pako:eNp9U11PwjAU_StLfQXlI5mwBxNGXXwQQtDExI2Hut7BdGtn2ykE-O-WtcOBkT3cdvecc2_PTbtFMaeAPLQUpFg5j_OIOfqT5ZtJBIIzBYya9BxIrMIqOqOiWJhsBZ_pfBJ_HGX360KAlKFdnaluef0uF3VRmsqwis6YxCuw-QlnS4790K4O9i_0m8MXCAnOTPD1xmDTZcrWYRX_Co2Hdvtu9_D8PNO_nyVItTOihr6iBFx8E0F_WdbIibuKqcvSmxeRKtgZX5cp1lpjDpaiSsEcTBQ561XP4jKr2c7akwVnEv7xd8apZnOcsNpkYMeVpFnmXbldPAr8JhoQqdJkY_EBxm4wPFUfnBkUD3rjXqeJ1p4M3u-7t8NuEzfnNGinM3T7ujZqoRxETlKqr-72wI6QWkEOEfL0lkJCykxFKGJ7TSWl4k8bFiNPiRJaqCwoUYBTou9OXif1GRUXE_MaqkfRQgVhr5xrSkIyCfsfgzMKzQ.

- Diagramme de base de données : https://mermaid.live/view#pako:eNqdksFugzAMhl8l8nFrD7tyXa_bZd1lioRcYtpoJEGO0YSqvvsMpaijnSaNC-aLY_v_8RGq5AgKqBrMeeNxzxhsNPqMxLxnYnM8E2MefRTj3fyZhX3cGwromyVs9fpX4pvk2nOWiIGWB9pPXu_wnWc5lA7l5mRP0REvaezC7paiY8p5KnGy8Vrkcwotxv5Pnfemzp5JZrjRKbc-kBnGLVNdVkwoPsXlNelb-p-Nc4vRl81sy0LTNn1SvFJ06TvgHzI7_cPlldaBVWdDZjzXPle18GTBrNdpii7-FeaA-bfEB43GbZqyYAWBWCU7Xb9xTgtyIHUYCg0d1dg1YsHGk6ZiJ-mtjxUUwh2toGsHh6eFvUByXhK_TBs9vFagg32kpCk1NplO3zMj7Rs


### 2.2 Choix Technologiques

- Langages de Programmation : JS
- Frameworks et Bibliothèques : React, Node.js, Express
- Base de Données : NoSQL
- Outils de Développement : VS-code, Git.

### 2.3 Interfaces Système

- APIs Externes : Aucune.

### 2.4 Sécurité

- Authentification et Autorisation : JWT.
- Chiffrement et Protection des Données : bcrypt.

## 3. Développement

### 3.1 Gestion de Version

- Outils de Gestion de Version : Git.
- Stratégie de Branching : Git Flow.

### 3.2 Normes de Codage

- Style de Codage : Airbnb.
- Revue de Code : Manuel.

### 3.3 Tests

- Pas de tests réalisés sur le projet.

## 4. Déploiement et Maintenance

### 4.1 Environnements

- Développement, Test, Production : Utilisation de PostMan pour tester l'api

### 4.2 CI/CD

...

### 4.3 Plan de Maintenance

- Mises à Jour : Fréquence et processus.
- Support Technique : Niveaux de support et processus.

## 5. Documentation

### 5.1 Documentation Technique

- Code Source : Disponible ici sur Discord.
- Documentation Externe : MDN.

### 5.2 Documentation Utilisateur

- Manuels Utilisateur : Guides (https://github.com/jiaad/UM-hetic?tab=readme-ov-file#documentation-de-lapi-dauthentification), FAQ (`README.md#FAQ`), etc.
- Formation : Assistance sur discord.

### 6. Features

##### Liste des Fonctionnalités du Projet

1. **BDD** : Créer les utilisateurs en BDD.
2. **Auth** : Implémenter JWT.
3. **Routes** : Route et controller.
4. **Frontend** : Créer frontend Login / Signup.

##### Temps Estimé par Tâches

- **Tâche BDD** : 10 heures
- **Tâche Auth** : 5 heures
- **Tâche Routes** : 15 heures
- **Tâche Frontend** : 20 heures

##### Scope Défini

- **Phase 1** : Implémentation des fonctionnalités BDD et Auth.
- **Phase 2** : Développement des fonctionnalités Routes et Frontend.

##### Priorité Définie

1. **Haute** : BDD, Routes
2. **Moyenne** : Auth, Frontend

##### Date de Fin

- **Date Prévue** : 12/12/2023


## 6. Glossaire

- AUCUN.

## 7. Annexes

- AUCUNE.

## 8. Conclusion
Projet bien cincrétisé mais nous avons rencontrés certaines difficultés et n'avons pas pu atteindre certains objectifs

- Difficultés et Objectifs non atteints
1. Délais insuffisant : Notre première difficulté est liée au temps imparti pour le projet et dont la majorité est passée en entreprise sur d’autres projets.
2. Sécurité : On aurait beaucoups plus protéger certaines roots que la façon dont nous l’avions fait. Nous l’avions implémenter mais compte tenu du trafic à ces dernières heures nous n’avons pas ajouté le snippet de code qui restreint les routes protégées.
3. Non finition de certaines vues front : On a fini avec l’API Backend mais certaines pages du frontend, compte tenu du temps, n'ont pas pu être terminées. Il s’agit entre autres des pages de modifications des infos de comptes et de réinitialisation de mot de passe.