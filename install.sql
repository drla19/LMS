-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Hostiteľ: localhost
-- Vygenerované:: 07.Mar, 2012 - 14:15
-- Verzia serveru: 5.1.44
-- Verzia PHP: 5.3.1


--
-- Databáza: `test`
--

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `access_roles`
--

CREATE TABLE IF NOT EXISTS `access_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idRole` int(11) NOT NULL,
  `permissions` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM  AUTO_INCREMENT=5 ;

--
-- Sťahujem dáta pre tabuľku `access_roles`
--

INSERT INTO `access_roles` (`id`, `idRole`, `permissions`) VALUES
(1, 1, '{"users":"true","admin":"true","tree":"true","languages":"true","pages":"true","lists":"true"}'),
(2, 2, '{"tree":"true"}'),
(3, 3, '{}'),
(4, 4, '{}');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `added_fields`
--

CREATE TABLE IF NOT EXISTS `added_fields` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fieldname` varchar(255) NOT NULL,
  `fieldtype` text NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM AUTO_INCREMENT=1 ;

--
-- Sťahujem dáta pre tabuľku `added_fields`
--


-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `courses`
--

CREATE TABLE IF NOT EXISTS `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `name_sk` text NOT NULL,
  `name_en` text NOT NULL,
  `creator` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM  AUTO_INCREMENT=3 ;

--
-- Sťahujem dáta pre tabuľku `courses`
--

INSERT INTO `courses` (`id`, `created`, `updated`, `name_sk`, `name_en`, `creator`) VALUES
(1, '2012-03-07 14:28:49', '0000-00-00 00:00:00', 'Bussiness úver express', '', 1),
(2, '2012-03-07 14:43:33', '0000-00-00 00:00:00', 'Kreditné karty', '', 1);

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `course_nodes`
--

CREATE TABLE IF NOT EXISTS `course_nodes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `node_type` varchar(255) NOT NULL,
  `name_sk` varchar(255) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `title_sk` varchar(255) NOT NULL,
  `webcontent_sk` text NOT NULL,
  `meta_sk` text NOT NULL,
  `controller` varchar(100) NOT NULL,
  `action` varchar(100) NOT NULL,
  `showinmenu` enum('0','1') DEFAULT '1',
  `ishome` tinyint(1) DEFAULT '0',
  `topLevel` tinyint(4) NOT NULL,
  `template` varchar(255) NOT NULL,
  `authorId` int(11) NOT NULL,
  `skupina` tinyint(4) NOT NULL DEFAULT '1',
  `configuration` text NOT NULL,
  `name_en` varchar(255) NOT NULL,
  `title_en` varchar(255) NOT NULL,
  `webcontent_en` text NOT NULL,
  `meta_en` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `level` (`level`)
) TYPE=MyISAM AUTO_INCREMENT=1 ;

--
-- Sťahujem dáta pre tabuľku `course_nodes`
--


-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `forms`
--

CREATE TABLE IF NOT EXISTS `forms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `form_name` varchar(255) NOT NULL,
  `configuration` text NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM  AUTO_INCREMENT=2 ;

--
-- Sťahujem dáta pre tabuľku `forms`
--

INSERT INTO `forms` (`id`, `form_name`, `configuration`) VALUES
(1, 'kontakt', '{"formName":"kontakt","messageAfter":"Ďakujeme , hneď ako to bude možné sa Vám ozveme","isSendMail":"true","isSendData":"true","recipients":"drla@drla.sk","model":"kontakty","mailText":"Ďakujeme","elements":{"meno":{"dbfield":"varchar(255)","label":"Your name","type":"text","rule":"short","required":"true"},"mail":{"dbfield":"varchar(255)","label":"Your E-mail","type":"text","rule":"mail","required":"true"},"otazka":{"dbfield":"text","label":"Question","type":"textarea","rule":"long","required":"false"}}}');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `languages`
--

CREATE TABLE IF NOT EXISTS `languages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lang_name` varchar(255) NOT NULL,
  `sufix` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM  AUTO_INCREMENT=3 ;

--
-- Sťahujem dáta pre tabuľku `languages`
--

INSERT INTO `languages` (`id`, `lang_name`, `sufix`) VALUES
(1, 'Slovensky', 'sk'),
(2, 'English', 'en');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `page_type_name` varchar(255) NOT NULL,
  `configuration` text NOT NULL,
  `preklad` text NOT NULL,
  `adminfields` text NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM AUTO_INCREMENT=1 ;

--
-- Sťahujem dáta pre tabuľku `pages`
--


-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `permissions_forms`
--

CREATE TABLE IF NOT EXISTS `permissions_forms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actions` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM  AUTO_INCREMENT=5 ;

--
-- Sťahujem dáta pre tabuľku `permissions_forms`
--

INSERT INTO `permissions_forms` (`id`, `actions`, `roles`) VALUES
(1, 'admin', '{"admin":"true"}'),
(2, 'create', '{"admin":"true"}'),
(3, 'update', '{"admin":"true"}'),
(4, 'delete', '{"admin":"true"}');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `permissions_languages`
--

CREATE TABLE IF NOT EXISTS `permissions_languages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actions` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM  AUTO_INCREMENT=5 ;

--
-- Sťahujem dáta pre tabuľku `permissions_languages`
--

INSERT INTO `permissions_languages` (`id`, `actions`, `roles`) VALUES
(1, 'admin', '{"admin":"true"}'),
(2, 'create', '{"admin":"true"}'),
(3, 'update', '{"admin":"true"}'),
(4, 'delete', '{"admin":"true"}');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `permissions_pages`
--

CREATE TABLE IF NOT EXISTS `permissions_pages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actions` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM  AUTO_INCREMENT=5 ;

--
-- Sťahujem dáta pre tabuľku `permissions_pages`
--

INSERT INTO `permissions_pages` (`id`, `actions`, `roles`) VALUES
(1, 'admin', '{"admin":"true"}'),
(2, 'create', '{"admin":"true"}'),
(3, 'update', '{"admin":"true"}'),
(4, 'delete', '{"admin":"true"}');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `permissions_roles`
--

CREATE TABLE IF NOT EXISTS `permissions_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actions` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM  AUTO_INCREMENT=5 ;

--
-- Sťahujem dáta pre tabuľku `permissions_roles`
--

INSERT INTO `permissions_roles` (`id`, `actions`, `roles`) VALUES
(1, 'admin', '{"admin":"true"}'),
(2, 'create', '{"admin":"true"}'),
(3, 'update', '{"admin":"true"}'),
(4, 'delete', '{"admin":"true"}');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `permissions_tree`
--

CREATE TABLE IF NOT EXISTS `permissions_tree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actions` varchar(255) NOT NULL,
  `roles` text NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM  AUTO_INCREMENT=6 ;

--
-- Sťahujem dáta pre tabuľku `permissions_tree`
--

INSERT INTO `permissions_tree` (`id`, `actions`, `roles`) VALUES
(1, 'admin', '{"1":["admin","guest"],"2":["admin","guest"],"3":["admin","guest"],"4":["admin","guest"],"5":["admin","guest"],"6":["admin","guest"],"7":["admin","guest"]}'),
(2, 'create', '{"1":["admin","guest"],"2":["admin","guest"],"3":["admin","guest"],"4":["admin","guest"],"5":["admin","guest"],"6":["admin","guest"],"7":["admin","guest"]}'),
(3, 'update', '{"1":["@"],"2":["@"],"3":["@"],"4":["@"],"5":["@"],"6":["@"],"7":["@"]}'),
(4, 'delete', '{"1":["admin","guest"],"2":["admin","guest"],"3":["admin","guest"],"4":["admin","guest"],"5":["admin","guest"],"6":["admin","guest"],"7":["admin","guest"]}'),
(5, 'show', '{"1":["*"],"2":["admin"],"3":["*"],"4":["*"],"5":["*"],"6":["*"],"7":["*"]}');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `permissions_users`
--

CREATE TABLE IF NOT EXISTS `permissions_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actions` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM  AUTO_INCREMENT=5 ;

--
-- Sťahujem dáta pre tabuľku `permissions_users`
--

INSERT INTO `permissions_users` (`id`, `actions`, `roles`) VALUES
(1, 'admin', '{"admin":"true"}'),
(2, 'create', '{"admin":"true"}'),
(3, 'update', '{"admin":"true"}'),
(4, 'delete', '{"admin":"true"}');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rolename` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM  AUTO_INCREMENT=5 ;

--
-- Sťahujem dáta pre tabuľku `roles`
--

INSERT INTO `roles` (`id`, `rolename`) VALUES
(1, 'admin'),
(2, 'guest'),
(3, 'manazer'),
(4, 'lektor');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `translation_columns`
--

CREATE TABLE IF NOT EXISTS `translation_columns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tables` varchar(255) NOT NULL,
  `columns` text NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM  AUTO_INCREMENT=4 ;

--
-- Sťahujem dáta pre tabuľku `translation_columns`
--

INSERT INTO `translation_columns` (`id`, `tables`, `columns`) VALUES
(1, 'tree', '{"name":"varchar(255) not null","title":"varchar(255) not null","webcontent":"text not null","meta":"text not null"}'),
(2, 'tree_draft', '{"name":"varchar(255) not null","title":"varchar(255) not null","webcontent":"text not null","meta":"text not null"}'),
(3, 'tree_history', '{"name":"varchar(255) not null","title":"varchar(255) not null","webcontent":"text not null","meta":"text not null"}');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `tree`
--

CREATE TABLE IF NOT EXISTS `tree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lft` int(11) NOT NULL,
  `rgt` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `node_type` varchar(255) NOT NULL,
  `name_sk` varchar(255) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `title_sk` varchar(255) NOT NULL,
  `webcontent_sk` text NOT NULL,
  `meta_sk` text NOT NULL,
  `controller` varchar(100) NOT NULL,
  `action` varchar(100) NOT NULL,
  `showinmenu` enum('0','1') DEFAULT '1',
  `ishome` tinyint(1) DEFAULT '0',
  `topLevel` tinyint(4) NOT NULL,
  `template` varchar(255) NOT NULL,
  `authorId` int(11) NOT NULL,
  `skupina` tinyint(4) NOT NULL DEFAULT '1',
  `page_form` int(11) NOT NULL,
  `configuration` text NOT NULL,
  `name_en` varchar(255) NOT NULL,
  `title_en` varchar(255) NOT NULL,
  `webcontent_en` text NOT NULL,
  `meta_en` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `lft` (`lft`),
  KEY `rgt` (`rgt`),
  KEY `level` (`level`)
) TYPE=MyISAM  AUTO_INCREMENT=8 ;

--
-- Sťahujem dáta pre tabuľku `tree`
--

INSERT INTO `tree` (`id`, `lft`, `rgt`, `level`, `node_type`, `name_sk`, `created`, `updated`, `title_sk`, `webcontent_sk`, `meta_sk`, `controller`, `action`, `showinmenu`, `ishome`, `topLevel`, `template`, `authorId`, `skupina`, `page_form`, `configuration`, `name_en`, `title_en`, `webcontent_en`, `meta_en`) VALUES
(1, 0, 13, 0, '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '', '', '', '', '1', 0, 0, '', 0, 1, 0, '', '', '', '', ''),
(2, 3, 12, 1, '1', 'treti course', '2010-02-10 15:25:46', '2011-11-21 12:31:28', '', '', '', 'tree/tree', 'show', '1', 1, 0, 'main.php', 1, 1, 0, '{"galleries":null}', 'Home', '', '', ''),
(3, 6, 11, 2, '2', 'Chapter 1', '2011-09-26 16:08:19', '2011-11-21 12:32:34', '', '', '', 'tree/tree', 'show', '1', 0, 0, 'main.php', 1, 1, 0, '{"galleries":null}', '', '', '', ''),
(4, 4, 5, 2, '2', 'Chapter 1', '2011-09-26 16:09:05', '2011-11-21 12:31:49', '', '', '', 'tree/tree', 'show', '1', 0, 0, 'main.php', 1, 1, 0, '{"galleries":null}', '', '', '', ''),
(5, 1, 2, 1, '1', 'Second', '2011-09-26 16:15:32', '2011-09-26 16:15:44', '', '', '', 'tree/tree', 'show', '1', 0, 0, 'main.php', 1, 1, 0, '{"galleries":null}', '', '', '', ''),
(7, 7, 8, 3, '', 'Nová stránka', '2011-11-21 12:56:20', '0000-00-00 00:00:00', '', '', '', 'tree/tree', 'show', '1', 0, 0, '', 0, 1, 0, '', '', '', '', ''),
(6, 9, 10, 3, '', '1.1 Slide 1', '2011-11-02 11:40:01', '2011-11-02 11:40:13', '', '', '', 'tree/tree', 'show', '1', 0, 0, '.svn', 1, 1, 0, '{"galleries":null}', '', '', '', '');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `tree_draft`
--

CREATE TABLE IF NOT EXISTS `tree_draft` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idTree` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `name_sk` varchar(255) NOT NULL,
  `title_sk` varchar(255) NOT NULL,
  `webcontent_sk` text NOT NULL,
  `meta_sk` text NOT NULL,
  `contoller` varchar(100) NOT NULL,
  `action` varchar(100) NOT NULL,
  `showinmenu` enum('0','1') DEFAULT '0',
  `ishome` tinyint(1) NOT NULL,
  `topLevel` tinyint(4) NOT NULL,
  `template` varchar(255) NOT NULL,
  `authorId` int(11) NOT NULL,
  `skupina` tinyint(4) NOT NULL DEFAULT '1',
  `page_form` int(11) NOT NULL,
  `configuration` text NOT NULL,
  `name_en` varchar(255) NOT NULL,
  `title_en` varchar(255) NOT NULL,
  `webcontent_en` text NOT NULL,
  `meta_en` text NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM  AUTO_INCREMENT=6 ;

--
-- Sťahujem dáta pre tabuľku `tree_draft`
--

INSERT INTO `tree_draft` (`id`, `idTree`, `created`, `updated`, `name_sk`, `title_sk`, `webcontent_sk`, `meta_sk`, `contoller`, `action`, `showinmenu`, `ishome`, `topLevel`, `template`, `authorId`, `skupina`, `page_form`, `configuration`, `name_en`, `title_en`, `webcontent_en`, `meta_en`) VALUES
(1, 3, '2011-09-26 16:08:19', '2011-11-21 12:32:34', '', '', '', '', '', '', '0', 0, 0, '', 1, 1, 0, '{"galleries":null}', '', '', '', ''),
(2, 4, '2011-09-26 16:09:05', '2011-11-21 12:31:49', '', '', '', '', '', '', '0', 0, 0, '', 1, 1, 0, '{"galleries":null}', '', '', '', ''),
(3, 5, '2011-09-26 16:15:32', '2011-09-26 16:15:44', '', '', '', '', '', '', '0', 0, 0, '', 1, 1, 0, '{"galleries":null}', '', '', '', ''),
(4, 6, '2011-11-02 11:40:01', '2011-11-02 11:40:13', '', '', '', '', '', '', '0', 0, 0, '', 1, 1, 0, '{"galleries":null}', '', '', '', ''),
(5, 2, '2010-02-10 15:25:46', '2011-11-21 12:31:28', '', '', '', '', '', '', '0', 0, 0, '', 1, 1, 0, '{"galleries":null}', '', '', '', '');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `tree_history`
--

CREATE TABLE IF NOT EXISTS `tree_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idTree` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `name_sk` varchar(255) NOT NULL,
  `title_sk` varchar(255) NOT NULL,
  `webcontent_sk` text NOT NULL,
  `meta_sk` text NOT NULL,
  `contoller` varchar(100) NOT NULL,
  `action` varchar(100) NOT NULL,
  `showinmenu` enum('0','1') DEFAULT '0',
  `ishome` tinyint(1) NOT NULL,
  `topLevel` tinyint(4) NOT NULL,
  `template` varchar(255) NOT NULL,
  `authorId` int(11) NOT NULL,
  `skupina` tinyint(4) NOT NULL DEFAULT '1',
  `page_form` int(11) NOT NULL,
  `configuration` text NOT NULL,
  `name_en` varchar(255) NOT NULL,
  `title_en` varchar(255) NOT NULL,
  `webcontent_en` text NOT NULL,
  `meta_en` text NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM  AUTO_INCREMENT=9 ;

--
-- Sťahujem dáta pre tabuľku `tree_history`
--

INSERT INTO `tree_history` (`id`, `idTree`, `created`, `updated`, `name_sk`, `title_sk`, `webcontent_sk`, `meta_sk`, `contoller`, `action`, `showinmenu`, `ishome`, `topLevel`, `template`, `authorId`, `skupina`, `page_form`, `configuration`, `name_en`, `title_en`, `webcontent_en`, `meta_en`) VALUES
(1, 3, '2011-09-26 16:08:19', '2011-09-26 16:09:00', 'Chapter 1', '', '', '', '', 'show', '0', 0, 0, 'main.php', 1, 1, 0, '{"galleries":null}', '', '', '', ''),
(2, 4, '2011-09-26 16:09:05', '2011-09-26 16:09:14', 'Chapter 2', '', '', '', '', 'show', '0', 0, 0, 'main.php', 1, 1, 0, '{"galleries":null}', '', '', '', ''),
(3, 5, '2011-09-26 16:15:32', '2011-09-26 16:15:44', 'Second', '', '', '', '', 'show', '0', 0, 0, 'main.php', 1, 1, 0, '{"galleries":null}', '', '', '', ''),
(4, 3, '2011-09-26 16:08:19', '2011-11-02 11:39:43', '1 Chapter 1', '', '', '', '', 'show', '0', 0, 0, 'main.php', 1, 1, 0, '{"galleries":null}', '', '', '', ''),
(5, 6, '2011-11-02 11:40:01', '2011-11-02 11:40:13', '1.1 Slide 1', '', '', '', '', 'show', '0', 0, 0, '.svn', 1, 1, 0, '{"galleries":null}', '', '', '', ''),
(6, 2, '2010-02-10 15:25:46', '2011-11-21 12:31:28', 'treti course', '', '', '', '', 'show', '0', 1, 0, 'main.php', 1, 1, 0, '{"galleries":null}', '', '', '', ''),
(7, 4, '2011-09-26 16:09:05', '2011-11-21 12:31:49', 'Chapter 1', '', '', '', '', 'show', '0', 0, 0, 'main.php', 1, 1, 0, '{"galleries":null}', '', '', '', ''),
(8, 3, '2011-09-26 16:08:19', '2011-11-21 12:32:34', 'Chapter 1', '', '', '', '', 'show', '0', 0, 0, 'main.php', 1, 1, 0, '{"galleries":null}', '', '', '', '');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_name` varchar(255) NOT NULL,
  `owner_surname` varchar(255) NOT NULL,
  `owner_mail` varchar(255) NOT NULL,
  `owner_password` varchar(255) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `activation` set('active','unactive') DEFAULT 'unactive',
  `roleID` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) TYPE=MyISAM  AUTO_INCREMENT=2 ;

--
-- Sťahujem dáta pre tabuľku `users`
--

INSERT INTO `users` (`id`, `owner_name`, `owner_surname`, `owner_mail`, `owner_password`, `created`, `updated`, `activation`, `roleID`) VALUES
(1, 'Anton', 'Andrla', 'andrla@mediator.sk', '5cb8f7006104ea254e255bbde21a0ab5', '2011-09-26 16:06:11', '0000-00-00 00:00:00', 'active', 1);
