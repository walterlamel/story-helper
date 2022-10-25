# Story Helper

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)]

Le Story Helper est un petit outil d'aide à la création de scénario. Si vous êtes en manque d'inspiration, le site propose trois idées de manière aléatoire : un lieu où peut se dérouler votre intrigue, un personnage qui peut participer à l'intrigue, et un contexte sur lequel peut se baser votre intrigue.

## Pour commencer

Le site est construit avec React et AdonisJS. Le dossier api-story-idea contient le backend avec AdonisJs et le dossier story-helper contient le front avec React.

### Pré-requis

Avoir Node.js & NPM
Avoir une base de données MYSQL en local

### Installation

Executer les commandes suivantes :

#### Back

- Aller dans le dossier backend : `cd api-story-idea`
- Faire un `npm install`
- Lancer votre base de données locales et lancer un `node ace migration:refresh` pour installer les tables
- Lancer le server : `node ace serve --watch`
- Mettre à jour le dossier `.env` ainsi :

```
PORT=3335
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=7ZXfGelNI84bhINEYhyj7FRkhRJ0iCh9
DRIVE_DISK=local
DB_CONNECTION=mysql
MYSQL_HOST=localhost
MYSQL_PORT=port
MYSQL_USER=user
MYSQL_PASSWORD=password
MYSQL_DB_NAME=storyhelper

```

#### Front

- Aller dans le dossier backend : `cd story-helper`
- Faire un `npm install`
- Mettre à jour le fichier `.env` tel quel :

```
REACT_APP_URL_API='http://localhost:3335'
REACT_APP_API_USER=lienAPIquigereutilisateur
REACT_APP_VERSION=versionActuelle

```

- Lancer le server `npm start`

Attention : l'API utilisateur ne se trouve pas dans le dossier Back. Je me suis basé sur une autre API qui m'appartient. Il vous faudra sans doute faire quelque modification pour l'adapter à votre système. Le mien est basé sur ADONISJS.

## Fabriqué avec

- [React](https://fr.reactjs.org/) Bibliothèque Javascript pour le front
- [AdonisJs](https://adonisjs.com/) Framework NodeJS pour le back
- [Scss](https://sass-lang.com/) Framework Css
