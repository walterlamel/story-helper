import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { faker } from '@faker-js/faker';
import Place from 'App/Models/Place'
import LinkPlacesIntrigue from 'App/Models/LinkPlacesIntrigue';

export default class extends BaseSeeder {
  public async run () {

    const names = [    
    "Entrepôt désaffecté",
    "Lac",
    "Lac féerique",
    "Montagne magique",
    "Montagne perdue",
    "Tours en béton",
    "Immeuble à moitié démoli",
    "Ferme",
    "Rue pavée sinueuse",
    "Lavoir",
    "Ruelle bondée",
    "Chantier en friche",
    "Café",
    "Forêt de pins",
    "Forêt de chêne",
    "Forêt enchantée",
    "Désert",
    "Désert rouge",
    "Désert de sel",
    "Atelier",
    "Train",
    "Boîte",
    "Prison",
    "Loge",
    "Grande route perdue",
    "Sous-sol",
    "Squat",
    "Grenier",
    "Donjon",
    "Place fleurie",
    "Cul-de-sac",
    "Prairie de fleurs sauvages",
    "Placard à balai",
    "Appartement luxueux",
    "Bordel",
    "Scène de théâtre/opéra/etc",
    "Théâtre caché",
    "Restaurant 5 étoiles",
    "Hôtel",
    "Motel",
    "Taverne",
    "Bureau",
    "Château du moyen âge",
    "Château de la renaissance",
    "Temple",
    "Salle d'attente",
    "Boîte de nuit",
    "Club échangiste",
    "Marais sombre",
    "Temple dans la jungle",
    "Rayons d'un supermarché",
    "Garage",
    "Cimetière",
    "Endroit abandonné",
    "Pont",
    "Sous l'eau",
    "Port",
    "Ville portuaire",
    "Volière",
    "Serre",
    "Elevage",
    "Balcon",
    "Fond d'un jardin",
    "Cabane dans un arbre",
    "Galaxie lointaine",
    "Espace",
    "Bibliothèque millénaire",
    "Autre planète",
    "Parc",
    "Couloir",
    "Coin d'une salle de classe",
    "Boutique d'antiquaire",
    "Centre astronomique",
    "Usine"
  ]


    let creating:object[] = new Array();

    for await (const name of names) {
      creating.push(
        { name : name,
          desc : faker.lorem.sentence(3),
          img: faker.image.city(),
          isActive: true
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
