/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { getRandomPerso } from 'App/Controllers/Http/PersonnageController';
import {getRandomIntrigue} from 'App/Controllers/Http/IntrigueController';
import { getRandomPlace } from 'App/Controllers/Http/PlaceController';


// rend un lieu, un perso et une intrigue aléatoire. Si place est indiqué en url, s'y adapte
Route.get('/', async ({request}) => {

  const queryData = request.get();
  const choosenPlace = queryData.place;
  const allIntrigue = queryData.all;

  let place = await getRandomPlace(choosenPlace);
  let perso = await getRandomPerso();
  let intrigue;
  //Si all=no : alors l'intrigue est sélectionnée selon la location
  if(allIntrigue === "no"){
    intrigue = await getRandomIntrigue(choosenPlace ?? place.name);
  } else{
    intrigue = await getRandomIntrigue();
  }
  

  const res = {
    place : place,
    perso : perso,
    intrigue : intrigue
  }

  return res;
})


//Intrigues
Route.get('/intrigue', 'IntrigueController.index');
Route.get('/intrigue/:id', 'IntrigueController.show');


//Personnages
Route.get('/personnage', 'PersonnageController.index');
Route.get('/personnage/:id', 'PersonnageController.show');


//Personnages
Route.get('/place', 'PlaceController.index');
Route.get('/place/:id', 'PlaceController.show');

