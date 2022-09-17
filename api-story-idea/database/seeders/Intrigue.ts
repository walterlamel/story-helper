import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { faker } from '@faker-js/faker';
import Intrigue from 'App/Models/Intrigue'

export default class extends BaseSeeder {
  public async run () {


    const names = [
      "Assassinat",
      "Convoi",
      "Exploration",
      "Détruire l'objet",
      "Retrouver le disparu",
      "Survival",
      "Protéger"
    ]

    let creating:object[] = new Array();

    for await (const name of names) {
      creating.push(
        { name : name,
          desc : faker.lorem.sentence(3),
          img : faker.image.nature(),
          isActive: true
        }
        )
    }

    await Intrigue.createMany(creating);



  }
}
