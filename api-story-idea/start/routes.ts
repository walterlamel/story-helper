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

import Route from '@ioc:Adonis/Core/Route';
import Item from 'App/Models/Item';
//import Logger from '@ioc:Adonis/Core/Logger';

Route.get('/', 'ItemController.index'); //affiche 3 res random
Route.get('/type', 'TypeController.index'); //affiche les types existants
Route.get('/all/', 'ItemController.getall'); //affiche tous les resultats
Route.get('/all/:type', 'ItemController.getall'); //affiche tous les resultats selon le type
Route.post('/create', 'ItemController.create'); //creer un nouvel item
Route.get('/:id', 'ItemController.get').where('id', /^[0-9]+$/); // affiche le resultat selon l'id
Route.put('/:id', 'ItemController.update').where('id', /^[0-9]+$/); // modifie le resultat selon l'id
Route.delete('/:id', 'ItemController.delete').where('id', /^[0-9]+$/); // supprime le resultat selon l'id
Route.get('/:type', 'ItemController.index'); //affiche un resultat random selon le type




Route.get('/special', () => {
  Item.createMany([
    {
      name: "",
      typeId: 1,
      desc: "",
      is_active: true
    },
  ])
})