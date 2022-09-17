import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';
import Personnage from 'App/Models/Personnage';


export default class PersonnageController {

    public async index(){
        return await getRandomPerso()
        return Personnage.all()
    }

    public show({params}:HttpContextContract){
        return Personnage.query().where('id', params.id)
    }

    public async edit({params, request}:HttpContextContract){
        const perso = await Personnage.findOrFail(params.id);
        const i = request.all();
        await perso.merge(i)
        .save();
        return true;
    }

}


export async function getRandomPerso(){
    let res = await Database.rawQuery('SELECT * FROM personnages ORDER BY RAND() LIMIT 1')
    return res[0][0] ?? [];
}