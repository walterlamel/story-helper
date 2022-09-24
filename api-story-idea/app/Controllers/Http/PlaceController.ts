import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';
import Place from 'App/Models/Place';



export default class PlaceController {

    public async index(){
        return await getRandomPlace()
        return Place.all()
    }

    public show({params}:HttpContextContract){
        return Place.query().where('id', params.id)
    }

    
    public showAll(){
        return Place.query();
    }

    public async edit({params, request}:HttpContextContract){
        const place = await Place.findOrFail(params.id);
        const i = request.all();
        await place.merge(i)
        .save();
        return true;
    }

    public async delete({params}:HttpContextContract){
        const p = await Place.findOrFail(params.id);
        await p.delete();
        return true;
    }

}

//choisi de manière aléatoire mais s'adapte à la place si elle est indiquée
export async function getRandomPlace(place = false){
    if(place){
        let res = await Place.query().whereLike('name', place)
        return res[0];
    } else {

        let res = await Database.rawQuery('SELECT * FROM places ORDER BY RAND() LIMIT 1');
        return res[0][0] ?? [];
    }

}