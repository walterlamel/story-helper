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
import {getRandomPlace} from 'App/Controllers/Http/PlaceController';
import { HttpContext } from '@adonisjs/core/build/standalone';
import Intrigue from 'App/Models/Intrigue';
import Personnage from 'App/Models/Personnage';
import Place from 'App/Models/Place';
import Database from '@ioc:Adonis/Lucid/Database';

//import Logger from '@ioc:Adonis/Core/Logger';


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
Route.get('/intrigue/all', 'IntrigueController.showAll');
Route.get('/intrigue/:id', 'IntrigueController.show');
Route.put('/intrigue/:id', 'IntrigueController.edit');


//Personnages
Route.get('/personnage', 'PersonnageController.index');
Route.get('/personnage/:id', 'PersonnageController.show');
Route.put('/personnage/:id', 'PersonnageController.edit');


//Place
Route.get('/place', 'PlaceController.index');
Route.get('/place/all', 'PlaceController.showAll');
Route.get('/place/:id', 'PlaceController.show');
Route.put('/place/:id', 'PlaceController.edit');


Route.post('/create', async ({request}:HttpContext) => {
  const i = request.all();
  if(!i.name || i.name === ""){
    return { res : false, text : "Vous devez donner un nom à l'élement", input : ["name"]}
  }
  if(!i.desc || i.desc === ""){
    return { res : false, text : "Vous devez décrire l'élement", input : ["desc"]}
  }

  const type = i.type;
  delete i.type;
  let newadd;

  switch(type){
    case "intrigue":
      if(await (await Intrigue.query().where('name', i.name)).length){
        return { res : false, text : "Ce nom existe déjà", input : ["name"]}
      }

      await Intrigue.create(i);
      newadd = await Intrigue.query().where('name', i.name);
      break;
    case "personnage":
      if(await (await Personnage.query().where('name', i.name)).length){
        return { res : false, text : "Ce nom existe déjà", input : ["name"]}
      }
      await Personnage.create(i);
      newadd = await Personnage.query().where('name', i.name);
    case "place":
      if(await (await Place.query().where('name', i.name)).length){
        return { res : false, text : "Ce nom existe déjà", input : ["name"]}
      }
      await Place.create(i);
      newadd = await Place.query().where('name', i.name);
  }
  
  return newadd.length;

});

//recupère tous les éléments non actif
Route.get('/admin', async () => {
  let intrigues = await Database.from('intrigues').select('*').where("is_active", false);
  let places = await Database.from('places').select('*').where("is_active", false);
  let personnages = await Database.from('personnages').select('*').where("is_active", false);
  var res = Object.assign({}, intrigues, places, personnages);

  return res;
})

//recupère tous les élement non actif selon le type
Route.get('/admin/:type', async ({params}) => {
  
    switch(params.type){
      case "intrigue":
        return await Database.from('intrigues').select('*').orderBy("is_active").orderBy('name');;
        
      case "personnage":
        return await await Database.from('personnages').select('*').orderBy("is_active").orderBy('name');;
        
      case "place":
        return await Database.from('places').select('*').orderBy("is_active").orderBy('name');
    }

})

