import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';
import Place from 'App/Models/Place';

export default class PlaceController {

    public index(){
        return getRandomPlace()
        return Place.all()
    }

    public show({params}:HttpContextContract){
        return Place.query().where('id', params.id)
    }

}

//choisi de manière aléatoire mais s'adapte à la place si elle est indiquée
export async function getRandomPlace(place = false){
    if(place){
        let res = await Place.query().whereLike('name', place)
        return res[0];
    } else {

        let res = await Database.rawQuery('SELECT * FROM places ORDER BY RANDOM() LIMIT 1');
        return res[0];
    }

}