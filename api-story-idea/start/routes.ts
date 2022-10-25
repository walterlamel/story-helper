/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';
//import Item from 'App/Models/Item';
//import Logger from '@ioc:Adonis/Core/Logger';

/*
Route.get('/special', async () => {
  await Item.createMany([
    {
      name: "Ville de forêt",
    typeId: 2,
    desc: "C'est une jolie petite ville entièrement construite dans une forêt et adaptée à elle. Des maisons sont faites autours de troncs épais, d'autres directement grâce à la pousse des arbres, d'autres encore sous terre ou dans de gigantesques champignons. De nombreux problèmes peuvent malgré tout y survenir : une étrange maladie attaque le coeur des arbres, les animaux deviennent de plus en plus sauvages, un groupe politique veut s'ouvrir au reste du monde",
    is_active: true
    },
    {
      name: "Temple dans la jungle",
    typeId: 2,
    desc: "Après des jours de marche difficiles au milieu des arbres, des lianes et des feuilles, se découvre enfin le temple abandonné. La végétation a réussi à s'emparer de lui malgré la taille des pierres. La mousse, les animaux et les arbres le recouvrent mais au travers, on image la puissance que ce temple devait avoir. Maintenant, il va encore falloir trouver l'entrer, éviter les pièges et les créatures qui s'y cachent.",
    is_active: true
    },
    {
      name: "Ville sous terraine",
    typeId: 2,
    desc: "Sous d'immenses montagnes, a été construit cette ville. Faites de pierre et de joyaux, sa beauté est sans pareil. Elle s'élève haute et par des moyens technologiques inconnus, elle a réussi à répondre à certains besoins : faire pousser des arbres et des champs, emmener de la lumière, se protéger des créatures de la nuit. On dit en revanche, que son roi y est devenu fou, que quelque chose gronde dans les profondeurs sous la cité et aussi qu'ils connaissent des magies inconnues..",
    is_active: true
    },
    {
      name: "Village abandonnée",
    typeId: 2,
    desc: "Ce village, de taille moyenne, semble avoir été abandonné. Il n'y a plus les bruits que l'on connait : les discussions, les rires des enfants ou le martèlement d'un maréchal-ferrant. Tout y est vide et pourtant, rien n'a bougé. On peut encore retrouver des jouets dans la rue, certains plats sont encore chauds et un fer est laissé à l'abandon. Comme si tous ses habitants avaient simplement disparu. Qu'a-t-il bien pu se passer ?",
    is_active: true
    },
    {
      name: "Ville dédiée à la mort",
    typeId: 2,
    desc: "Ici, le dieu de la mort est partout et c'est complètement toléré et assumé. Les gens le prient et le respectent comme il se doit. L'endroit ressemble beaucoup à une ville quelconque mais c'est surtout dans l'immense temple, construit en son centre, et dans les coutumes que la différence se voit. D'abord, les exécutions sont publiques, gigantesques, festives et ritualisées. Ensuite, beaucoup de pèlerins viennent ici pour se laisser mourir. De plus, élément très important, ils tiennent ici un registre gigantesque qui contient de très nombreuses informations...",
    is_active: true
    },
    {
      name: "Port marchand",
    typeId: 2,
    desc: "Le coeur marchand du royaume. Du bruit, des odeurs et des gens partout autour de vous. Il y a rarement eu autant d'activités concentré au même point. Des navires, tous plus beaux les uns que les autres, voguent sur l'océan, des milliers de mâts s'élèvent vers le ciel. Sur les quais, on peut trouver toute sorte d'entrepôt et de tavernes. Attention cependant, il faudra s'acquitter de la taxe à la capitainerie pour profiter d'une place pour son navire.",
    is_active: true
    },
    {
      name: "Palais royal",
    typeId: 2,
    desc: "Une immense bâtisse de toute beauté, des statues, des jardins, des fenêtres, vous n'avez jamais rien vu d'aussi beau. Dedans, se trouve le seigneur local entouré de toute sa cour. Ils boivent, ils mangent, ils dansent, ce n'est que bonheur et tranquillité. Pourtant, au milieu de toute cette richesse, la politique fait loi. Les courtisans se mettent des bâtons dans les roues en jouant de finesse et de paroles. Les mariages et les intrigues vont bons trains pour gagner en renommé, en pouvoir et en argent...",
    is_active: true
    },
    {
      name: "Manoir de campagne",
    typeId: 2,
    desc: "Petit domaine des plus confortables au milieu de la campagne. Des champs de vignes et de blé s'étendent tout autour d'un superbe manoir. Il y a là de nombreux serviteurs et il semble y faire bon vivre. Pourtant, le seigneur du manoir est en pleine négociation pour son fond de commerce et un coup de main ne serait pas de refus. On dit aussi qu'il possède quelque chose de secret au fond de ses caves...",
    is_active: true
    },
    {
      name: "Manoir hanté",
    typeId: 2,
    desc: "Un manoir à l'allure lugubre au milieu d'une forêt sombre. Plus personne n'ose s'en approcher et c'est peu dire. Il paraît qu'on y entend des rires d'enfant et des pas courir dans les couloirs. Une étrange brume semble toujours recouvrir le domaine. Il paraît qu'autrefois vivait là une famille et qu'elle aurait été maudite, peut-être à cause des actes du père, ou bien est-ce une plus étrange et intrigante histoire qui se cache là-bas ?",
    is_active: true
    },
    {
      name: "Ville aérienne",
    typeId: 2,
    desc: "Dissimulée derrière les nuages, une grande ville s'est construite grâce à un ingénieux système technologique de ballon et de moteurs. La personne qui dirige ce lieu incroyable a réussi à faire son petit empire indépendant ici, loin de tout, et ses sujets sont loyaux. Cependant, comment va-t-il accueillir la venue de nouveau visiteur ? Peut-être en les emprisonnant, ou en leur demandant un coup de main face à quelques problèmes qu'il a : une faction tente de se libérer de son joug et quelques sabotages ont été déclarés.",
    is_active: true
    },
    {
      name: "Désert de sable",
    typeId: 2,
    desc: "A perte de vue, du sable. Des collines de sables chauds forment ce paysage incroyable et terriblement dangereux. La journée, le soleil est de plomb tandis que la nuit s'abat un froid monstrueux. Il y a peu de créature vivante dans ce désert, mais les quelques existants sont mortels : scorpions, serpents et peut-être même vers des sables. On raconte cependant qu'au milieu de ce territoire se cache un ancien temple abandonné qui contiendrait des secrets et des trésors...",
    is_active: true
    },
    {
      name: "Désert de sel",
    typeId: 2,
    desc: "C'est un grand territoire recouvert d'une couche blanche de sel. Le soleil s'y reflète dessus et vient éblouir. Des mares et lacs apparaissent de temps en temps, mais il faut absolument éviter d'y boire dedans. Le sel qu'ils contiennent pourrait tuer. En témoigne les animaux qui y sont tombés dedans : aujourd'hui, ils sont encore momifiés dans la même posture. Est-ce que ce désert de sel est d'origine naturelle ... ou magique ?",
    is_active: true
    },
    {
      name: "Désert de magie",
    typeId: 2,
    desc: "Toute une zone est complètement protégée contre la magie. En y entrant, tous les sorts actifs se dissipent et aucun magicien ne peut en lancer de nouveau. C'est comme si la magie n'avait jamais existé en ce lieu. On dit que les dieux de la nature protège ce lieu, d'autres supposent qu'une malédiction l'en a chassé. En tout cas, ce lieu est très perturbant, mais beaucoup cherche à comprendre son mystère. Imaginez que quelqu'un puisse s'emparer d'un tel pouvoir...",
    is_active: true
    },
    {
      name: "Grotte",
    typeId: 2,
    desc: "Cachée sur les pentes d'une montagne enneigée, se trouve une grotte étrange. À première vue, elle semble inintéressante, mais lorsque l'on regarde de plus près, on découvre des dessins sur les murs et des gravures. Il semble qu'un peuple ancien soit passé par là et y ait laissée sa marque. En fouillant vraiment correctement, on pourrait découvrir une porte dissimulée fermée qui protégerait tout un monde. Qui sait tout ce que l'on pourrait rapporter de là-bas ?",
    is_active: true
    },
    {
      name: "Forêt vivante",
    typeId: 2,
    desc: "Rares sont les personnes qui rentrent encore dans cette sombre et épaisse forêt... On dit que là-bas, on a toujours cette envie de jeter un oeil par-dessus son épaule pour vérifier si personne ne nous suit, on dit qu'on entend des bruits dans les feuilles des arbres, comme s'ils se répondaient, on dit aussi qu'il est difficile de s'y repérer, car les arbres eux-mêmes se déplacent quand on ne regarde pas. Au fond de la forêt, il paraît cependant qu'on peut trouver une vieille dame curieuse capable de jeter des sorts pour vous...",
    is_active: true
    },
    {
      name: "Jungle",
    typeId: 2,
    desc: "Il est compliqué de s'y repérer et même d'y marcher sans un bon équipement, mais l'endroit est impressionnant. Les arbres y sont gigantesques, les lianes épaisses, les fleurs colorées et les animaux... mortels. Il fait chaud et humide et c'est donc difficile de s'y aventurer. En revanche, qui sait ce que la végétation a pu recouvrir ? Des temples anciens ?",
    is_active: true
    },
    {
      name: "Désert rouge",
    typeId: 2,
    desc: "C'est un gigantesque terrain de pierres rouges qui s'étend, plat, jusqu'au pied de hautes et impressionnantes montagnes. Seuls quelques arbres rachitiques au tronc noir y vivent. Un vent fort souffle et soulève une fumée ocre qui s'infiltre dans les bronches et fait tousser. Il paraît que ce fut le lieu d'une grande bataille épique et qu'on peut encore y trouver des armes ou des cadavres. Certains disent même que les morts se relèvent parfois...",
    is_active: true
    },
    {
      name: "Bois agréable",
    typeId: 2,
    desc: "Ce petit bois non loin de la ville est absolument parfait pour se détendre. Les arbres y sont espacés et la lumière peut donc y entrer à flot. Une petite rivière y coule tranquillement tandis que la chasse y est parfaitement possible. Le seul bémol, c'est qu'on peut y rencontrer quelques braconniers.",
    is_active: true
    },
    {
      name: "Forêt enchantée",
    typeId: 2,
    desc: "Au premier abord, elle semble être tout à fait normale. Pourtant, plus on s'y enfonce plus les choses y deviennent étranges. Peut-être qu'il y aura de plus en plus de bruit autour, des créatures plus étonnantes et inconnues et une flore improbable. Finalement, en atteignant son coeur, on pourra y rencontrer de petites fées qui vivent là, amusantes et heureuses. Mais attention, leurs coutumes sont différentes et le moindre écart pourrait les faire entrer dans une fureur noire. Elles sont peut-être petites, mais elles n'en ont pas moins beaucoup de ressources.",
    is_active: true
    },
    {
      name: "Plaine d'herbe",
    typeId: 2,
    desc: "C'est un océan d'herbe qui s'étale ici. Le vent s'y engouffre et donne un mouvement de vague sur les collines vertes. Il faudrait des mois pour traverser ce pays et il est donc préférable d'avoir une monture. Plusieurs peuples vivent-là, notamment des peuples nomades qui suivent les troupeaux de buffles et de bisons. Il sera peut-être nécessaire de négocier son passage...",
    is_active: true
    },
    {
      name: "La libération",
    typeId: 1,
    desc: "Des bandits s'en prennent chaque mois à un pauvre village. On leur vole tout ce qu'ils ont et c'est de plus en plus difficile de s'en sortir. Un groupe de courageux aventuriers pourraient essayer de se débarrasser de cette menace... ou de la rejoindre.",
    is_active: true
    },
    {
      name: "La vengeance",
    typeId: 1,
    desc: "Un homme a perdu sa femme dans un atroce meurtre. Le responsable n'a pas été puni de manière juste et l'homme aimerait donc se venger correctement. Seul, ce sera difficile car le criminel est trop fort ou a trop de pouvoir. Un coup de main serait récompensé.",
    is_active: true
    },
    {
      name: "La protection",
    typeId: 1,
    desc: "Une personne vient demander protection. Elle serait poursuivie par de puissants bandits qui en veulent à sa fortune. Ils ne vont pas tarder à arriver et il va falloir se dépêcher à mettre en place une protection pour la défendre... À moins que finalement, ce soit elle en tord...",
    is_active: true
    },
    {
      name: "Le rêve",
    typeId: 1,
    desc: "Les aventuriers se retrouvent piéger dans un rêve sans même le savoir. Ils vont devoir faire face à leurs propres cauchemars pour s'en sortir et essayer de comprendre comment ils ont pu se retrouver là.",
    is_active: true
    },
    {
      name: "La lettre d'amour",
    typeId: 1,
    desc: "Une lettre est reçue par un des joueurs. Elle est anonyme, mais le message est clair : quelqu'un s'est entiché de cette personne. Comment va-t-elle réagir ? Va-t-elle se rendre au rendez-vous ? Mais est-ce que ce ne serait pas plutôt un piège honteux ?",
    is_active: true
    },
    {
      name: "La disparition",
    typeId: 1,
    desc: "L'enfant d'une personne a disparu du jour au lendemain. Il va falloir le retrouver, mais plusieurs questions se posent : a t-il fugué ? S'est-il fait enlever ? Par qui ? Pourquoi ? Et finalement, est-ce que le ramener est une bonne idée ?",
    is_active: true
    },
    {
      name: "Les familles rivales",
    typeId: 1,
    desc: "Deux familles s'entre-déchirent depuis des siècles. En cause, une sombre histoire de vol dont on ne sait même plus qui est le responsable. Malheureusement, deux membres ont décidé de vivre un amour impossible. Peut-être qu'une aide pourrait leur permettre de s'en sortir.",
    is_active: true
    },
    {
      name: "La maladie",
    typeId: 1,
    desc: "Une étrange maladie s'empare des habitants d'un village. Ils sont soudainement pris de convulsion, tombent sur le sol et leurs yeux prennent une couleur bleutée. Il faut absolument enquêter sur les causes avant que l'ensemble du village ne tombe. Mais est-ce magique ? Naturel ? Y a t-il seulement un fautif ?",
    is_active: true
    },
    {
      name: "Le vol",
      typeId: 1,
      desc: "Un objet puissant ou de valeur se trouve dans un lieu. Il est temps de le récupérer pour sauver le monde ou pour votre enrichissement personnel. mais peut-être va-t-il falloir recruter une équipe, mettre en place un plan et un moyen de s'en tirer vivant. Sans parler des nombreux systèmes de sécurité qu'il va falloir passer, ce ne sera pas une mince affaire.",
      is_active: true
    },
    {
      name: "L'assassinat",
      typeId: 1,
      desc: "Un riche personnage recherche un coup de main discret dans une affaire discrète. En effet, il est temps de se débarrasser de quelqu'un. Mais attention, le bourrinage habituel n'est pas de mise et cette fois, il va falloir en sortir sans bavure. Le meurtre doit être discret et si possible, doit passer pour un accident. On peut supposer que les conséquences d'un échec serait terriblement lourde.",
      is_active: true
    },
    {
      name: "Le convoi",
      typeId: 1,
      desc: "Un groupe de convoyeur vous demande de l'aide pour traverser une zone dangereuse. Des bandits veulent sûrement s'emparer de la chose précieuse transportée et un guet-apens est à prévoir. Après tout, ce qui est transporté a de la valeur ou est très dangereux. Peut-être tellement que même les aventuriers pourraient s'y intéresser.",
      is_active: true
    },
    {
      name: "L'exploration",
      typeId: 1,
      desc: "Un territoire inconnu dont personne n'est jamais revenu vous attend. Qu'est-ce qui peut s'y cacher et comment faire pour combattre tous ces dangers et découvrir toutes ses merveilles ? Peut-être y a t-il un secret bien caché là-bas, ou un monstre d'une toute nouvelle sorte !",
      is_active: true
    },
    {
      name: "L'expédition scientifique",
      typeId: 1,
      desc: "Un groupe de voyageur est appelé pour visiter un territoire, lister sa faune et sa flore, tisser des liens avec la population locale, comprendre leur dialecte, etc. Un grand groupe est nécessaire, aussi bien de protecteur, que de scientifiques ou de diplomate. Un si grand groupe demande une certaine organisation, mais peut aussi créer des tensions d'idéologie...",
      is_active: true
    },
    {
      name: "Le Coin du feu",
    typeId: 1,
    desc: "Les aventuriers ont bien mérité un peu de repos. Entre deux aventures, il y a peut-être l'occasion de se poser autour d'un feu de camps. Il fait chaud et ils sont à l'aise. Peut-être est-ce l'occasion de se raconter des souvenirs, des contes, des poèmes ou des blagues. En tout cas, c'est une bonne occasion de roleplay et de tisser des liens.",
    is_active: true
    },
    {
      name: "La rencontre diplomatique",
    typeId: 1,
    desc: "Une reine puissante pourrait fortement aider les aventuriers. Il va donc falloir la rencontrer et pour ça, suivre le chemin habituel des intrigues de la cour. Et même cela fait, rien n'est joué. La reine est connue pour réagir vite au moindre écart de conduite. Les aventuriers vont devoir gérer la diplomatie, l'élégance et la courtoisie, mais le jeu en vaut la chandelle.",
    is_active: true
    },
    {
      name: "Asora Menor",
    typeId: 3,
    desc: "Prostituée, superbe et cruelle. Asora travaille pour elle-même depuis bien longtemps. Ses clients font partie de la fine fleur de la ville, si bien qu'elle a engrangé richesse et pouvoir depuis bien longtemps. Elle connaît les secrets de beaucoup et elle négocie comme un requin. Attention en l'approchant, son charme est presque surnaturel.",
    is_active: true
    },
    {
      name: "Waris Truden",
    typeId: 3,
    desc: "Enfant, gourmand. Il est jeune et potelé et on pourrait croire qu'il est un bon gamin. Pourtant, sous son sourire enfantin se cache un être sans coeur prêt à tout pour gagner un peu d'argent et survivre à la rue. Il a déjà vécu des choses terribles et c'est sans doute le seul moyen qu'il a trouvé pour faire face au monde qui l'entoure. Méfiez-vous quand même.",
    is_active: true
    },
    {
      name: "Merelda",
    typeId: 3,
    desc: "Vieille médium. Elle tire les cartes en parcourant le monde avec son âne et son chariot. Elle s'installe ensuite dans les villages et même si beaucoup la regarde avec méfiance, son air souriant et les secrets qu'elle dévoile lui apporte de nombreux clients. On se demande encore si elle arnaque ou si ses paroles recouvrent de grandes vérités, mais on ne reste jamais indifférent.",
    is_active: true
    },
    {
      name: "Luvox Elahorn",
    typeId: 3,
    desc: "Majordome loyal. Il travaille pour une duchesse peu douée, mais lui est terriblement loyal. Dans son ombre, c'est lui qui gère en fait le domaine d'une main de maître. Mais cela ne le gêne pas de ne pas tirer les lauriers à lui. Peut-être parcequ'il l'aime tout simplement. Ou peut-être qu'elle lui a rendu un grand service autrefois. En tout cas, Luvox est un homme très efficace dont la loyauté vaut de l'or.",
    is_active: true
    },
    {
      name: "Velour",
      typeId: 3,
      desc: "Orphelin, mature et narquois. Velour a grandit dans les bas quartiers d'une grande ville. Il a rapidement dû apprendre à survivre par tous les moyens et c'est surtout grâce à l'aide d'un bordel qu'il s'en ait tiré. Les femmes de joie sont sa famille et cela fait de lui un gamin qui en sait beaucoup plus que ce qu'il devrait. Il se protège du monde par son air narquois et sa façon de ne rien prendre au sérieux.",
      is_active: true
    },
    {
      name: "Medela",
      typeId: 3,
      desc: "Conteuse, vieille et souriante; Medela connait toutes les histoires du monde. Elle vit loin dans la forêt et il est assez rare de la rencontrer. Cependant, lorsque cela arrive, son sourire et sa gentillesse prennent le dessus. Elle sera ravi de vous raconter quelques choses en échange d'une autre histoire.",
      is_active: true
    },
    {
      name: "Mama Yabba",
      typeId: 3,
      desc: "Vieille dame avec une canne et un panier. Elle vit au milieu d'une forêt et est connue pour être sorcière. Certains pensent qu'elle enlève des enfants, d'autres qu'elle les aide. On dit aussi qu'elle lance des maléfices ou soigne. En tout cas, elle est étrange, parle peu et de façon énigmatique. En plus, il semble que quand on lui demande de l'aide, elle demande aussi quelque chose en échange, et toujours une chose étonnante : ramener un poulet noir, laisser un bibelot sous l'oreiller d'un villageois..",
      is_active: true
    },
    {
      name: "Ferdinand Von Reshtat",
      typeId: 3,
      desc: "Poisson rouge dans un bocal, qui parle. Ferdinand est un poisson qui suite à d'étrange expérience s'est vu gagner la capacité de parler et réfléchir comme un être humain avec un grand QI. Il sait énormément de chose et est capable de répondre à beaucoup de questions. Seul bémol, il est hautain et nécessite que l'on déplace son vocal constamment. C'est donc assez encombrant et son ton désagréable n'aide en rien.",
      is_active: true
    },
    {
      name: "Albert Discplat",
      typeId: 3,
      desc: "Magicien raté, Albert a passé des années a essayer de le devenir. Malgré tout, c'est un échec. Ça ne l'empêche pourtant pas de porter la tenue officielle, ainsi qu'une longue barbe. Il est très vite démasqué si on fouille un peu mais il s'arrange en général pour ne pas aborder le sujet.",
      is_active: true
    }
  ])
})
*/



Route.get('/', 'ItemController.index'); //affiche 3 res random
Route.get('/type', 'TypeController.index'); //affiche les types existants
Route.get('/all/', 'ItemController.getall'); //affiche tous les resultats
Route.get('/all/:type', 'ItemController.getall'); //affiche tous les resultats selon le type
Route.post('/create', 'ItemController.create'); //creer un nouvel item
Route.get('/:id', 'ItemController.get').where('id', /^[0-9]+$/); // affiche le resultat selon l'id
Route.put('/:id', 'ItemController.update').where('id', /^[0-9]+$/); // modifie le resultat selon l'id
Route.delete('/:id', 'ItemController.delete').where('id', /^[0-9]+$/); // supprime le resultat selon l'id
Route.get('/:type', 'ItemController.index'); //affiche un resultat random selon le type




