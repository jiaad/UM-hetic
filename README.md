# Documentation de l'API d'Authentification

## Introduction
Cette API permet de gérer les processus d'authentification pour deux entités, les plateformes ou `compagnies` et les `utilisateurs`.
Pour être plus simple, on fonctionne exactement comme Google et le processus est simple, si une plateforme est reconnu comme compagnie sur notre site, nos utilisateurs ayant un compte chez nous peuvent s'authentifier avec ses informations sur cette plateforme.

## Evolution du projet :
- 85% du backend est terminé ( Celà dit: l'api marche déjà et avec un testeur d'API comme POSTMAN par exemple, vous pouvez le tester en créant votre compte `compagnie` et l'implémenter dans votre projet ).
- 20% du frontend reste à faire (L'objectif en front consiste à créer une interface visuelle beaucoup plus souple pour faciliter l'utilisation de l'API pour nos compagnies).

# Vous êtes une compagnie

## Endpoints
- ### Origin :`http://fglindayi-um-hetic-code-redirect-3.apps.sandbox-m3.1530.p1.openshiftapps.com` 
### 1. `company/` (POST)
Permet à une compagnie de s'inscrire ou de créer un compte.

#### Paramètres de la requête (tous REQUIS)
- `siret` : Numéro de siret de la compagnie.
- `date_of_creation` : La date de creation de la compagnie.
- `type` : Type de compagnie.
- `name` : Nom de la compagnie.
- `email` : l'email de la compagnie (unique).
- `password` : Mot de passe de la compagnie.

#### Réponse JSON
- `{success:true, message:'Compagnie créée'}` : Compagnie inscrit avec succès.
- `{success:false,error:'...un message d'erreur...', message:'... le message de l'erreur produite...'}` : Erreur dans les paramètres de la requête.

**NB**: Vous aurrez toujours en réponse un parametre success qui vous servira de variable clée pour implémenter la logique suite à l'appel de l'API.

### 2. `company/login` (POST)
Permet à une compagnie de se connecter et d'obtenir un jeton d'authentification.

#### Paramètres de la requête
- `email` : Email de la compagnie.
- `password` : Mot de passe de la compagnie.

#### Réponse JSON
- `{success:true, company:{...information de la compagnie...} ,  token:"...Un long jeton 😀..." }` : Connexion réussie, retourne le jeton d'authentification.
- `{success:false, ...'}` : Échec de l'authentification.

### 3. `company/logout/:id` (GET)
Permet à une compagnie de se déconnecter en invalidant le jeton d'authentification.
(On continue d'analyser cette partie puisqu'on pensait faire simple en stokant juste le token coté front (localstorage))
#### Paramètres de la requête

#### Réponse


### 4. `company/:id` (PUT)
Permet de modifier les informations d'une compagnie.

#### Paramètres de la requête (Les informations à modifier, tous REQUIS)
- `siret` : Numéro de siret de la compagnie.
- `date_of_creation` : La date de creation de la compagnie.
- `type` : Type de compagnie.
- `name` : Nom de la compagnie.

#### Réponse JSON
- `{success:true, company:{...information de la compagnie...} , message:'Compagnie modifiée'}` : Compagnie modifiée avec succès.
- `{success:false,error:'...un message d'erreur...', message:'... le message de l'erreur produite...'}` : Erreur dans les paramètres de la requête.

### 5. `company/:id` (DELETE)
Permet de supprimer une compagnie.

#### Paramètres de la requête
- le bon `id` en parametre de l'URL.

#### Réponse JSON
- `{success:true, message:'Compagnie supprimée'}` : Compagnie supprimée avec succès.
- `{success:false,error:'...un message d'erreur...', message:'... le message de l'erreur produite...'}` : Erreur dans les paramètres de la requête.

### 6. `company/forget_password` (POST)
Permet à une compagnie de modifier son mot de passe.

#### Paramètres de la requête
- `email` : L'email de la compagnie

#### Réponse JSON
- `{success:true,token: "un long token", data:{...En gros des données comme le lien de modification par exemple...}}` : Premier pas franchi avec succès. Ici vous recevrez un lien composant un token généré pour l'ocasion, ce token est restreint à une seule utilisation. Cette réponse vous envoie sur l'endpoint `company/reset_password/:token`
- `{success:false,error:'...un message d'erreur...', message:'... le message de l'erreur produite...'}` : Erreur dans les paramètres de la requête.

### 7. `company/reset_password/:token` (POST)
Permet à une compagnie de modifier son mot de passe.

#### Paramètres de la requête
- `password` : Le nouveau mot de passe

#### Réponse JSON
- `{success:true,message: 'Mot de passe changé!'}` : Deuxieme pas franchi avec succès. A ce niveau tout est bon, faudra juste se reconnecter avec les nouveaux idendifiants.
- `{success:false,error:'...un message d'erreur...', message:'... le message de l'erreur produite...'}` : Erreur dans les paramètres de la requête.

## Gestion des utilisateurs:
### 1ere partie
Ici le principe est simple, d'après votre connexion, vous recevrez le lien à mettre sur votre formulaire de connexion (sur votre plateforme), ce lien comprend votre identifiant donc sera différent en fonction des compagnies. Une fois l'interface visuelle réalisée, vous l'aurez quelque part sur votre dashboad.

### 2eme partie
Vous enverrez la requette de connexion (`email et password`) via post au lien qu'on vous filera et vous attendrez le retour qui sera bien sur du json que vous traiterez.

### 3eme partie
Le json reçu sera de deux types:
- `succes:true` :  Si tout s'est bien passé, vous aurez bien sur une donnée dans le meme JSON comme `data:{...}` qui renfermera les informations de l'utilisateur qui vient de se connecter avec success sur votre site. A souligner aussi qu'une fois vous avez ses données c'est bon, vous pouvez créer un token pour lui, disponible le nombre de temps que voulez et le faire déconnecter quand vous voulez. Celà nous fera économiser quelques lignes de codes 🥲. Sinon on peut vous en filer mais vous aurez à vérifier de temps en temps si le token est bon, et ça vous rajoute des lignes de codes aussi et beaucoup plus de requettes api supplémentaires (les verifications de token et aussi la deconnexion). (...On en discutera ensemble s'il le faut 🙂...)
- `succes:false` :  Si quelque chose ne va pas, là c'est que quelque chose s'est mal passé et vous redirigerez sur la page de connexion avec l'erreur. Cette erreur sera contenu dans un parametre `msg:"...corps du message..."` et donc accessible avec `response.msg`.

**NB**: Ces informations seront en vrai suffisantes pour que vous implémentiez vos logiques.

## Utilisation du Token d'Authentification
Chaque requête aux endpoints protégés devrait inclure le token d'authentification dans l'en-tête `Authorization`, mais pour le moment, nous ne protégeons encore rien  pour que le projet soit ouvert à tous et pour que vous puissiez évoluer avant les restrictions.

## Autres informations
Pensez à un npm install avant de démmarrer le projet si vous le téléchargez en local, le fichier `package-lock.json` est dans le `.gitignore` pour réduire les problèmes de conflits dû aux différents sytemes d'exploitation. Il est d'ailleurs inévitable aussi pour les nodes_moduls ⚠️.

```bash
npm install

```
Par défaut aussi, le back tournera sur le `port 3000`, s'il est occupé 😅, vous allez devoir débuguer un peu 💀, surtout pour la modification de mot de passe car le lien de modif a quasi été out-codé prenant en compte le lien en ligne cette fois ci; mais celà serait un équivalent de `http://localhost:3000/` en local soit les codes.

```
# /backend/controller/company.js ligne 156
      const url = `http://localhost:3000/company/reset_password/${original_token}`;
```

```
# /backend/routes/users.js ligne 65
      const url = `http://localhost:3000/company/reset_password/${original_token._id}`;
```


Un fichier `config.json` est requis à la racine du dossier `backend` et dont le contenu est sous la forme suivante et donc comportant vos informations de connexion à votre base de données MongoDB :

```
const DB_URI = "mongodb+srv://identifiant:mot_de_passe@cluster0.lxcmgb6.mongodb.net/um-hetic?retryWrites=true&w=majority"

module.exports = {DB_URI}
```


Pour permettre la facilté de l'usage du projet, on le fait tourner sur un serveur en ligne dont le lien source du backend est `http://fglindayi-um-hetic-code-redirect-3.apps.sandbox-m3.1530.p1.openshiftapps.com`. [Si ce lien ne marche pas, veuillez nous contacter par Discord pour qu'on le relance car parfois il le faut 🥲.]


# Vous êtes utilisateur

## Actions :
En tant qu'utilisateur, vous n'avez d'actions que sur interface gratuite, en soit l'API est disponible mais que pour répondre aux exigences des compagnies. Vous pouvez bien-sûr accéder à votre profil sur `https://inquisitive-ganache-18e865.netlify.app/`.

### Enregistrement 
Votre enregistrement sur notre plateforme se fera via un lien `https://inquisitive-ganache-18e865.netlify.app/user/`

### Connexion 
Votre enregistrement sur notre plateforme se fait via le lien `https://inquisitive-ganache-18e865.netlify.app/user/login`
A la connexion, vous aurez accès à la gestion de votre profil dont **la modification** et **suppression** du compte.

### Modification des infos de compte
Une fois connecté, vous aurez accès à la modification de vos infos de base.

### Suppression
Une fois connecté, vous aurez accès à la suppression de votre compte.

**NB** : rappelons qu'il s'agit d'une action qui sera disponible que sur notre interface. celà est dit, votre potentielle suppression de compte chez une compagnie n'entrainera pas la suppression définif de votre compte chez nous.

### Modification de mot de Passe
Cette action est un peu particulière car elle se déroule en deux parties :
- Génération d'un token d'Update à Usage unique qui vous permettra de modifier votre mot de passe via un lien (unique)
- Modification du mot de passe via le lien reçu.
