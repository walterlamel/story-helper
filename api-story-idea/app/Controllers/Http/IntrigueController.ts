import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Intrigue from 'App/Models/Intrigue';


export default class IntrigueController {

    //sans parametre
    public index({request}:HttpContextContract){
        const queryData = request.get();
        const place = queryData.place;
        if(place){
            return this.chooseByPlace(place);
        }
        
        return Intrigue.query().preload('places');
    }

    //avec un id : montre l'intrigue demandée
    public show({params}:HttpContextContract){
        return Intrigue.query().preload('places').where('id', params.id);
    }


    //avec paramere "place" : cherche le nom de la place
    public chooseByPlace(place){
    
        return getRandomIntrigue(place)
    }
}


//choisi de manière aléatoire mais s'adapte à la place si elle est indiquée
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