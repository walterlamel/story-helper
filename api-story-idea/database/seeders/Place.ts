import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { faker } from '@faker-js/faker';
import Place from 'App/Models/Place'
import Database from '@ioc:Adonis/Lucid/Database';
import LinkPlacesIntrigue from 'App/Models/LinkPlacesIntrigue';

export default class extends BaseSeeder {
  public async run () {

    const names = [
      "Marais",
      "Château",
      "Forêt",
      "Jungle",
      "Lieu de mort",
      "Rivière",
      "Campement"
    ]

    
    let creating:object[] = new Array();

    for await (const name of names) {
      creating.push(
        { name : name,
          desc : faker.lorem.paragraph()
        }
        )
    }

    await Place.createMany(creating);
    

    await LinkPlacesIntrigue.createMany([
      {
        intrigueId : 2,
        placeId : 1,
      },
      {
        intrigueId : 2,
        placeId : 3,
      },
      {
        intrigueId : 1,
        placeId : 5,
      },
      {
        intrigueId : 1,
        placeId : 3,
      }
    ])
    
  }
}
