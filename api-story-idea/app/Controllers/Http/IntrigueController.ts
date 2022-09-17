import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Intrigue from 'App/Models/Intrigue';


export default class IntrigueController {

    //sans parametre
    public index({request}:HttpContextContract){
        const queryData = request.get();
        const place = queryData.place;
        if(place){
            return getRandomIntrigue(place);
        }

        return getRandomIntrigue();
    }

    //avec un id : montre l'intrigue demandée
    public show({params}:HttpContextContract){
        return Intrigue.query().preload('places').where('id', params.id);
    }

    public showAll(){
        return Intrigue.query().preload('places');
    }

    //create un nouvel element
    public async create({request}:HttpContextContract){
        const i = request.all();
        await Intrigue.create(i);
        const newadd = await Intrigue.query().where('name', i.name);
        return newadd;
    }

    public async edit({params, request}:HttpContextContract){
        const intrigue = await Intrigue.findOrFail(params.id);
        const i = request.all();
        await intrigue.merge(i)
        .save();
        return true;
    }

}


//choisi de manière aléatoire mais s'adapte à la place si elle est indiquée
    //avec paramere "place" : cherche le nom de la place
export async function getRandomIntrigue(place = false){
    let intrigues;
    if(place){
        intrigues = await Intrigue.query().preload('places').whereHas('places', (Place) => {
            Place.whereLike('places.name', place)
            })
    } else {
        intrigues = await Intrigue.query().preload('places');
    }
    
    return intrigues[Math.floor(Math.random() * intrigues.length)];
}