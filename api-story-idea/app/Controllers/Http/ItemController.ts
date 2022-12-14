import { HttpContext } from "@adonisjs/core/build/standalone";
import { schema, validator, rules } from '@ioc:Adonis/Core/Validator';
import Item from "App/Models/Item";

const schemaItem = schema.create({
    name : schema.string([
        rules.trim()
        ]),
    desc : schema.string([
        rules.trim()
        ]),
    img : schema.string.optional(),
    typeId : schema.number([
        rules.exists({ table: 'types', column : 'id'})
    ])
});

const schemaItemModif = schema.create({
    name : schema.string.optional([
        rules.trim()
        ]),
    desc : schema.string.optional([
        rules.trim()
        ]),
    img : schema.string.optional(),
    typeId : schema.number.optional([
        rules.exists({ table: 'types', column : 'id'})
    ]),
    is_active : schema.boolean.optional()
});

export default class ItemController {

    /**
     * Route basique. Retourne 3 résultats random de trois types différents.
     * @param params type recherché
     * @returns un tableau des résultats
     */
    public async index({params}:HttpContext){
        if(params.type){
            return await this.getrandom(params.type);
        } else {
            return [await this.getrandom('place'), await this.getrandom('intrigue'), await this.getrandom('personnage')];
        }
    }

    /**
     * 
     * @param params id du resultat demandé 
     * @returns tableau du resultat
     */
    public async get({params}:HttpContext){
        if(params.id){
            return await Item.query().preload('type').where('id', params.id);
        } else {
            return false;
        }
    }

    /**
     * Retourne tous les résultats d'une categorie
     * @param params string type recherché (optionnel) 
     * @returns tableau
     */
    public async getall({params, request}:HttpContext){
        const  {is_active, asc} = request.qs();

        const query = Item.query().preload('type');

        if(is_active !== undefined){
            query.where('is_active', is_active);
        }

        if(asc !== undefined){
                query.orderBy(asc, asc)
        }

        if(params.type){
            return await query.whereHas('type',(query) => {query.where('name', params.type)});
        } else {
            return await query;
        }
    }

    /**
     * Créé un nouvel item
     * @param request object attend un post complet 
     * @returns si réussi, retourne l'objet créé
     */
    public async create({request}:HttpContext){
        const i = request.all();
        if(!i.img){
            i.img = "";
        }

        
        const item = await request.validate({
            schema : schemaItem,
            messages: {
            'required' : 'Vous devez indiquer ce(s) champs',
            'unique' : 'Ce nom est déjà utilisé. Veuillez en trouver un autre.',
            'exists' : 'Le type ne correspond pas à un type existant'
            },
            reporter: validator.reporters.jsonapi,
        })

        return await Item.create(item);

    }

    /**
     * Modifie un item dans la bdd
     * @param params number attend l'id a modifier 
     * @param request object put nécessaire
     * @returns true si ok
     */
    public async update({params, request}:HttpContext){
        const item = await Item.findByOrFail('id', params.id);
        const verifInfos = await request.validate({
            schema : schemaItemModif,
            messages: {
            'required' : 'Vous devez indiquer ce(s) champs',
            'unique' : 'Ce nom est déjà utilisé. Veuillez en trouver un autre.',
            'exists' : 'Le type ne correspond pas à un type existant'
            },
            reporter: validator.reporters.jsonapi,
        })

        return await item.merge(verifInfos).save();
    }

    /**
     * Supprimer un item de la bdd
     * @param param id number id à supprimer
     * @returns true si tout est ok
     */
    public async delete({params}:HttpContext){
        const i = await Item.findOrFail(params.id);
        await i.delete();
        return true;}


    /**
     * Récupére en random un des éléments selon son type
     * @param type string 
     * @returns tableau resultat
     */
    private async getrandom(type: string){
        let r = await Item.query().preload('type').whereHas('type', (query) => {query.where('name', type)}).where('is_active', "1")
        return r[Math.floor(Math.random() * r.length)] ?? [];
    }
}