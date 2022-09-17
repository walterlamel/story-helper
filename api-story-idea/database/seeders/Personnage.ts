import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Personnage from 'App/Models/Personnage'
import { faker } from '@faker-js/faker';

export default class extends BaseSeeder {
  public async run () {
    const numberFalsePerso = 20;


    for (let index = 0; index < numberFalsePerso; index++) {
      await Personnage.create({
        name : faker.name.fullName(),
        type : faker.helpers.arrayElement(['Méchant', 'Noble', 'Roturier', 'Monstre', 'Nécromant', 'Soldat']),
        desc: faker.lorem.sentences(3),
        img : faker.image.people(),
        isActive: true
      })
      
    }
  }
}
