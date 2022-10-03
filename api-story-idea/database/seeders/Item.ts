import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Item from 'App/Models/Item'
import Type from 'App/Models/Type'

export default class extends BaseSeeder {
  public async run () {
    await Type.createMany([
      {
        name : "intrigue",
        visible_name : "Intrigue",
        is_active : true
      },
      {
        name: "place",
        visible_name : "Lieu",
        is_active : true
      },
      {
        name : "personnage",
        visible_name : "Personnage",
        is_active : true
      }
    ]);


    await Item.createMany([
      {
        name : "Vol",
        desc : "Vous devez voler un objet précieux.",
        is_active : true,
        typeId : 1
      },
      
      {
        name : "Assassinat",
        desc : "Assassinat discret, pas repérage",
        is_active : true,
        typeId : 1
      },
      {
        name : "Capitale",
        desc : "grand plein truc poliqtuqe",
        is_active : true,
        typeId : 2
      },
      
      {
        name : "Temple dans la jungle",
        desc : "recouvert d'arbres",
        is_active : true,
        typeId : 2
      },
      {
        name : "Velour",
        desc : "Orphelin",
        is_active : true,
        typeId : 3
      },
      
      {
        name : "Medela",
        desc : "Medium",
        is_active : true,
        typeId : 3
      }
    ])
  }
}
