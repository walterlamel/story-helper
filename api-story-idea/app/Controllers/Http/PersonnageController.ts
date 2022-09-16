import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';
import Personnage from 'App/Models/Personnage';

export default class PersonnageController {

    public index(){
        return getRandomPerso()
        return Personnage.all()
    }

    public show({params}:HttpContextContract){
        return Personnage.query().where('id', params.id)
    }

}


export async function getRandomPerso(){
    let res = await Database.rawQuery('SELECT * FROM personnages ORDER BY RANDOM() LIMIT 1')
    return res[0];
}