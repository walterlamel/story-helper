-- phpMyAdmin SQL Dump
-- version 5.0.4deb2+deb11u1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : sam. 24 sep. 2022 à 14:16
-- Version du serveur :  8.0.30
-- Version de PHP : 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `storyhelper`
--

-- --------------------------------------------------------

--
-- Structure de la table `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `batch` int NOT NULL,
  `migration_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, 'database/migrations/1663313444994_places', 1, '2022-09-21 10:23:29'),
(2, 'database/migrations/1663313510581_intrigues', 1, '2022-09-21 10:23:31'),
(3, 'database/migrations/1663317201345_link_places_intrigues', 1, '2022-09-21 10:23:46'),
(4, 'database/migrations/1663322348221_personnages', 1, '2022-09-21 10:23:50');

-- --------------------------------------------------------

--
-- Structure de la table `adonis_schema_versions`
--

CREATE TABLE `adonis_schema_versions` (
  `version` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `adonis_schema_versions`
--

INSERT INTO `adonis_schema_versions` (`version`) VALUES
(2);

-- --------------------------------------------------------

--
-- Structure de la table `intrigues`
--

CREATE TABLE `intrigues` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `intrigues`
--

INSERT INTO `intrigues` (`id`, `name`, `desc`, `detail`, `img`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Assassinat', 'Quelqu\'un demande aux aventuriers d\'assassiner une cible. Attention, il est préférable que cela se fasse discrètement et proprement. Il pourrait y avoir des conséquences autrement...', NULL, 'https://confesiunileuneifemei539128094.files.wordpress.com/2021/12/b9a4923f5241cfadaebc2ecb7a8b0c816901509877584016685.jpg', 1, '2022-09-21 10:24:35', '2022-09-23 10:08:48'),
(2, 'Convoi', 'Un groupe de convoyeur vous demande de l\'aide pour traverser une zone dangereuse. Des bandits veulent sûrement s\'emparer de la chose précieuse transportée. Peut être même que les aventuriers auront aussi envie de s\'en emparer...', NULL, 'https://i.pinimg.com/564x/8d/3a/80/8d3a8032b2f3aa157b3d77e28260cac3.jpg', 1, '2022-09-21 10:24:35', '2022-09-23 10:14:38'),
(3, 'Exploration', 'Un territoire est inconnu et c\'est aux aventuriers de le parcourir. Les dangers viendront aussi bien des monstres que du terrain lui même.', NULL, 'https://i.pinimg.com/564x/dd/48/5d/dd485d920fa7ef3feee5dd986dd6fa8f.jpg', 1, '2022-09-21 10:24:35', '2022-09-23 10:16:45'),
(4, 'Détruire l\'objet', 'Un objet des forces du mal au pouvoir bien trop puissant doit être détruit. Les aventuriers pourront ils trouver comment le faire et/ou l\'emmener au seul endroit où c\'est possible ?', NULL, 'https://i.pinimg.com/564x/d0/2e/ba/d02ebaff6440010106504a8d7406461e.jpg', 1, '2022-09-21 10:24:35', '2022-09-23 10:15:16'),
(5, 'Retrouver le disparu', 'Quelqu\'un a disparu : la fille d\'un riche seigneur, le médecin de la ville, etc. \nIl va falloir le retrouver rapidement mais sa disparition est très mystérieuse.', NULL, 'https://i.pinimg.com/564x/a7/2d/94/a72d94c0b121fe459430e65503cd146a.jpg', 1, '2022-09-21 10:24:35', '2022-09-23 10:21:24'),
(6, 'Survival', 'Les aventuriers se retrouvent en zone dangereuse et avec très peu d\'outil. Comment vont-il gérer le manque de nourriture et d\'eau dans ce territoire inconnu ?', NULL, 'https://i.pinimg.com/564x/a0/f9/b3/a0f9b32977d8b7e7c47772fe84ee47dc.jpg', 1, '2022-09-21 10:24:35', '2022-09-23 10:27:27'),
(7, 'Protéger', 'Quelqu\'un demande de l\'aide aux aventuriers car il est en danger. Un ennemi en veut à sa peau et  il n\'est pas sûr de passer la nuit sans l\'aide de courageux aventuriers.\nPossibilité : Peut-être que la cible mérite vraiment de mourir...', NULL, 'https://i.pinimg.com/564x/de/70/c1/de70c15c825db696bb8bb442c91e601d.jpg', 1, '2022-09-21 10:24:35', '2022-09-23 10:23:22'),
(8, 'Diriger une guerre', 'Les aventuriers sont appelés à diriger une armée entière pour protéger le pays. Comment vont-ils motiver les troupes ? Quelles stratégies vont-ils adopter ?', NULL, 'https://i.pinimg.com/564x/64/5c/45/645c4582959990cbbddca2004354ab08.jpg', 1, '2022-09-23 10:28:26', '2022-09-23 10:34:41'),
(9, 'Maladie', 'Une maladie étrange s\'empare des habitants d\'un village. Personne ne comprend mais il faut absolument trouver la raison de ce malheur avant que tous les habitants soient morts.', NULL, 'https://i.pinimg.com/564x/e3/d8/57/e3d85747b136fd8ecbfa179e87ca8075.jpg', 1, '2022-09-23 10:29:37', '2022-09-23 10:34:48'),
(10, 'Repos au coin du feu', 'Les aventuriers ont bien mérité un peu de repos entre deux aventures. Peut-être auront-ils de belles histoires, poèmes, chanson ou blagues à raconter aux autres !', NULL, 'https://i.pinimg.com/564x/4e/27/77/4e2777642776bae66948dd43e314f00f.jpg', 1, '2022-09-23 10:31:33', '2022-09-23 10:34:51'),
(11, 'Rencontre diplomatique', 'Le seigneur de ces terres peut aider les aventuriers. Ils vont devoir se rendre à la salle du trône pour faire leur demande : diplomatie, élégance et courtoisie seront de mise face à ce dirigeant colérique.', NULL, 'https://i.pinimg.com/564x/79/a0/ca/79a0ca19b64adb743d902845dc091e3f.jpg', 1, '2022-09-23 10:33:09', '2022-09-23 10:34:45'),
(12, 'Chercher le trésor', 'Un trésor puissant ou très cher est dissimulé derrière de nombreux pièges et ennemis. ', NULL, 'https://cdna.artstation.com/p/assets/images/images/013/029/254/large/hugh-pindur-pindurski-dying-wish-final.jpg?1537732648', 1, '2022-09-23 10:34:30', '2022-09-23 10:34:39'),
(18, 'Capitale d\'un pays', 'Lieu hétéroclite où tout est possible, la capitale regorge d’activités, de commerces et d\'opportunités. C\'est là que l\'on peut trouver le centre politique, juridique et religieux. Mais c\'est aussi là qu\'il peut y avoir les mafias.', NULL, 'https://i.pinimg.com/564x/0f/8b/a6/0f8ba63a0759f7593fb7e124936fbffc.jpg', 1, '2022-09-24 07:59:52', '2022-09-24 08:11:48');

-- --------------------------------------------------------

--
-- Structure de la table `link_places_intrigues`
--

CREATE TABLE `link_places_intrigues` (
  `id` int UNSIGNED NOT NULL,
  `place_id` int UNSIGNED DEFAULT NULL,
  `intrigue_id` int UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personnages`
--

CREATE TABLE `personnages` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `desc` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `personnages`
--

INSERT INTO `personnages` (`id`, `name`, `type`, `desc`, `img`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Asora Menor', 'Méchant', 'Prostituée de luxe : Elle travaille pour elle-même et travaille avec beaucoup talent. Si bien que sa parole fait parfois lois grâce aux nombreux contacts qu\'elle possède.\nElle peut-être dangereuse derrière son visage de douceur.', 'https://i.pinimg.com/564x/37/96/30/379630f2af456e4ccdb09aad1a7f5ffa.jpg', 1, '2022-09-21 10:24:35', '2022-09-23 10:40:11'),
(2, 'Velour', NULL, 'Orphelin de 12 ans avec une jolie bouille un peu sale. Il est né dans un bordel et a donc grandit bien trop vite.', 'https://i.pinimg.com/564x/f6/56/63/f65663e3e9b01c27169116c48dea9731.jpg', 1, '2022-09-21 12:01:19', '2022-09-23 10:37:37'),
(3, 'Waris Truden', NULL, 'Enfant gourmand : du haut de son jeune âge, il faut malgré tout se méfier de lui. Il aime manger correctement et pour ça, il a besoin d\'argent. Il est prêt à tout pour sortir de la rue.', 'https://i.pinimg.com/564x/4b/b4/a7/4bb4a76f1ab7810cd83abc05e45b44d2.jpg', 1, '2022-09-23 10:39:27', '2022-09-23 10:40:19'),
(4, 'Quin Kaljar', NULL, 'Vieille femme de la forêt : elle est très souriante et vit dans la forêt. Elle connait un millier d\'histoire et sans doute aussi de nombreux secrets...', 'https://i.pinimg.com/564x/91/1a/8e/911a8ed74a554c4a4fc3bc98859833ae.jpg', 1, '2022-09-23 10:41:39', '2022-09-23 10:46:15'),
(5, 'Merelda', NULL, 'Vieille medium : Elle tire les cartes en parcourant le monde avec son âne. On se demande encore si elle arnaque ou si ses paroles recouvrent de grandes vérités', 'https://i.pinimg.com/564x/a2/44/59/a2445969d6f1bb03eb7cb780e4a8dbb0.jpg', 1, '2022-09-23 10:43:01', '2022-09-23 10:46:11'),
(6, 'Luvox Elahorn', NULL, 'Majordome loyal : avec son visage avenant et sa force, il est le majordome idéal. Il fera tout pour rendre service. Tellement qu\'il gère bien plus que son maître.', 'https://i.pinimg.com/564x/35/66/6f/35666f0ccaac5f7c10c06e644d367fdd.jpg', 1, '2022-09-23 10:46:00', '2022-09-23 10:46:08');

-- --------------------------------------------------------

--
-- Structure de la table `places`
--

CREATE TABLE `places` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `places`
--

INSERT INTO `places` (`id`, `name`, `desc`, `img`, `is_active`, `created_at`, `updated_at`) VALUES
(26, 'Sous-sol', 'Alias reprehenderit tempora.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:35', '2022-09-21 10:24:35'),
(27, 'Squat', 'Ut ut voluptates.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:35', '2022-09-21 10:24:35'),
(28, 'Grenier', 'Consequatur rerum laboriosam.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:35', '2022-09-21 10:24:35'),
(29, 'Donjon', 'Minus et ipsam.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:35', '2022-09-21 10:24:35'),
(30, 'Place fleurie', 'Ex libero occaecati.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:35', '2022-09-21 10:24:35'),
(31, 'Cul-de-sac', 'Placeat dolorem id.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:35', '2022-09-21 10:24:35'),
(32, 'Prairie de fleurs sauvages', 'Temporibus sit libero.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:35', '2022-09-21 10:24:35'),
(33, 'Placard à balai', 'Dignissimos necessitatibus qui.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:35', '2022-09-21 10:24:35'),
(34, 'Appartement luxueux', 'Non quia autem.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:35', '2022-09-21 10:24:35'),
(35, 'Bordel', 'Nam voluptatem molestiae.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:35', '2022-09-21 10:24:35'),
(36, 'Scène de théâtre/opéra/etc', 'Ad distinctio dolorem.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:35', '2022-09-21 10:24:35'),
(37, 'Théâtre caché', 'Aspernatur possimus quisquam.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:35', '2022-09-21 10:24:35'),
(38, 'Restaurant 5 étoiles', 'Aut quo maxime.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:35', '2022-09-21 10:24:35'),
(39, 'Hôtel', 'Ea autem odit.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(40, 'Motel', 'Ut architecto quae.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(41, 'Taverne', 'Doloremque quia quia.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(42, 'Bureau', 'Nihil et doloribus.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(43, 'Château du moyen âge', 'Dolores aut praesentium.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(44, 'Château de la renaissance', 'Aliquid est totam.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(45, 'Temple', 'Dolores maxime id.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(46, 'Salle d\'attente', 'Velit numquam reprehenderit.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(47, 'Boîte de nuit', 'Sint dolor harum.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(48, 'Club échangiste', 'Ex iusto autem.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(49, 'Marais sombre', 'Officiis dignissimos omnis.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(50, 'Temple dans la jungle', 'Soluta magnam dolores.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(51, 'Rayons d\'un supermarché', 'Consequatur consequatur eum.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(52, 'Garage', 'Beatae reiciendis est.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(53, 'Cimetière', 'Ullam et officiis.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(54, 'Endroit abandonné', 'Error consequatur voluptate.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(55, 'Pont', 'Quam et nulla.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(56, 'Sous l\'eau', 'Dolorem alias tempore.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(57, 'Port', 'Doloribus asperiores voluptas.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(58, 'Ville portuaire', 'Commodi illo ex.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(59, 'Volière', 'Et ullam sunt.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(60, 'Serre', 'Molestias soluta ut.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(61, 'Elevage', 'Facere fugit molestias.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(62, 'Balcon', 'Provident totam est.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(63, 'Fond d\'un jardin', 'Rerum at quod.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(64, 'Cabane dans un arbre', 'Quos rem enim.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(65, 'Galaxie lointaine', 'Iste recusandae et.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(66, 'Espace', 'Et blanditiis alias.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(67, 'Bibliothèque millénaire', 'Sunt molestiae voluptatem.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(68, 'Autre planète', 'Eius sunt rerum.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(69, 'Parc', 'Officiis voluptas velit.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(70, 'Couloir', 'Ipsum rerum tempore.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(71, 'Coin d\'une salle de classe', 'Ea ea minima.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(72, 'Boutique d\'antiquaire', 'Aliquid consequatur aliquid.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(73, 'Centre astronomique', 'Totam doloribus iste.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36'),
(74, 'Usine', 'Magni voluptas molestiae.', 'https://loremflickr.com/640/480/city', 1, '2022-09-21 10:24:36', '2022-09-21 10:24:36');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `intrigues`
--
ALTER TABLE `intrigues`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `intrigues_name_unique` (`name`);

--
-- Index pour la table `link_places_intrigues`
--
ALTER TABLE `link_places_intrigues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `link_places_intrigues_place_id_foreign` (`place_id`),
  ADD KEY `link_places_intrigues_intrigue_id_foreign` (`intrigue_id`);

--
-- Index pour la table `personnages`
--
ALTER TABLE `personnages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `places`
--
ALTER TABLE `places`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `places_name_unique` (`name`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `intrigues`
--
ALTER TABLE `intrigues`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `link_places_intrigues`
--
ALTER TABLE `link_places_intrigues`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `personnages`
--
ALTER TABLE `personnages`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `places`
--
ALTER TABLE `places`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `link_places_intrigues`
--
ALTER TABLE `link_places_intrigues`
  ADD CONSTRAINT `link_places_intrigues_intrigue_id_foreign` FOREIGN KEY (`intrigue_id`) REFERENCES `intrigues` (`id`),
  ADD CONSTRAINT `link_places_intrigues_place_id_foreign` FOREIGN KEY (`place_id`) REFERENCES `places` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
