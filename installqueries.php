<?php
return array(
    'CREATE TABLE IF NOT EXISTS `access_roles` (`id` int(11) NOT NULL auto_increment, `idRole` int(11) NOT NULL, `permissions` varchar(255) NOT NULL, PRIMARY KEY  (`id`))',
    'INSERT INTO `access_roles` (`id`, `idRole`, `permissions`) VALUES (1, 1, \'{"users":"true","admin":"true","tree":"true","languages":"true","pages":"true","lists":"true"}\'), (2, 2, \'{"tree":"true"}\')',
    'CREATE TABLE IF NOT EXISTS `added_fields` (`id` int(11) NOT NULL auto_increment,`fieldname` varchar(255) NOT NULL,`fieldtype` text NOT NULL,PRIMARY KEY  (`id`))',
    'CREATE TABLE IF NOT EXISTS `forms` (`id` int(11) NOT NULL auto_increment,`form_name` varchar(255) NOT NULL,`configuration` text NOT NULL,PRIMARY KEY  (`id`))',
    'INSERT INTO `forms` (`id`, `form_name`, `configuration`) VALUES (1, \'kontakt\', \'{"formName":"kontakt","messageAfter":"Ďakujeme , hneď ako to bude možné sa Vám ozveme","isSendMail":"true","isSendData":"true","recipients":"drla@drla.sk","model":"kontakty","mailText":"Ďakujeme","elements":{"meno":{"dbfield":"varchar(255)","label":"Your name","type":"text","rule":"short","required":"true"},"mail":{"dbfield":"varchar(255)","label":"Your E-mail","type":"text","rule":"mail","required":"true"},"otazka":{"dbfield":"text","label":"Question","type":"textarea","rule":"long","required":"false"}}}\')',
    'CREATE TABLE IF NOT EXISTS `languages` (`id` int(11) NOT NULL auto_increment, `lang_name` varchar(255) NOT NULL,`sufix` varchar(255) NOT NULL,PRIMARY KEY  (`id`))',
    'INSERT INTO `languages` (`id`, `lang_name`, `sufix`) VALUES (1, \'Slovensky\', \'sk\'), (2, \'English\', \'en\')',
    'CREATE TABLE IF NOT EXISTS `pages` (`id` int(11) NOT NULL auto_increment, `page_type_name` varchar(255) NOT NULL, `configuration` text NOT NULL, `preklad` text NOT NULL, `adminfields` text NOT NULL, PRIMARY KEY  (`id`))',
    'CREATE TABLE IF NOT EXISTS `permissions_forms` (`id` int(11) NOT NULL auto_increment,`actions` varchar(255) NOT NULL,`roles` varchar(255) NOT NULL,PRIMARY KEY  (`id`))',
    'INSERT INTO `permissions_forms` (`id`, `actions`, `roles`) VALUES (1, \'admin\', \'{"admin":"true"}\'), (2, \'create\', \'{"admin":"true"}\'), (3, \'update\', \'{"admin":"true"}\'), (4, \'delete\', \'{"admin":"true"}\')',
    'CREATE TABLE IF NOT EXISTS `permissions_languages` (`id` int(11) NOT NULL auto_increment, `actions` varchar(255) NOT NULL, `roles` varchar(255) NOT NULL, PRIMARY KEY  (`id`))',
    'INSERT INTO `permissions_languages` (`id`, `actions`, `roles`) VALUES (1, \'admin\', \'{"admin":"true"}\'), (2, \'create\', \'{"admin":"true"}\'),(3, \'update\', \'{"admin":"true"}\'),(4, \'delete\', \'{"admin":"true"}\')',
    'CREATE TABLE IF NOT EXISTS `permissions_pages` (`id` int(11) NOT NULL auto_increment, `actions` varchar(255) NOT NULL,`roles` varchar(255) NOT NULL,PRIMARY KEY  (`id`))',
    'INSERT INTO `permissions_pages` (`id`, `actions`, `roles`) VALUES (1, \'admin\', \'{"admin":"true"}\'),(2, \'create\', \'{"admin":"true"}\'),(3, \'update\', \'{"admin":"true"}\'),(4, \'delete\', \'{"admin":"true"}\')',
    'CREATE TABLE IF NOT EXISTS `permissions_roles` ( `id` int(11) NOT NULL auto_increment, `actions` varchar(255) NOT NULL, `roles` varchar(255) NOT NULL,PRIMARY KEY  (`id`))',
    'INSERT INTO `permissions_roles` (`id`, `actions`, `roles`) VALUES (1, \'admin\', \'{"admin":"true"}\'), (2, \'create\', \'{"admin":"true"}\'), (3, \'update\', \'{"admin":"true"}\'),(4, \'delete\', \'{"admin":"true"}\')',
    'CREATE TABLE IF NOT EXISTS `permissions_tree` (`id` int NOT NULL primary key auto_increment, `actions` varchar(255) NOT NULL, `roles` text NOT NULL)',
    'INSERT INTO `permissions_tree` (`id`, `actions`, `roles`) VALUES (1,\'admin\', \'{"1":["admin","guest"],"2":["admin","guest"]}\'),(2, \'create\', \'{"1":["admin","guest"],"2":["admin","guest"]}\'),(3, \'update\', \'{"1":["@"],"2":["@"]}\'),(4, \'delete\', \'{"1":["admin","guest"],"2":["admin","guest"]}\'),(5, \'show\', \'{"1":["*"],"2":["*"]}\')',
    'CREATE TABLE IF NOT EXISTS `permissions_users` (`id` int(11) NOT NULL auto_increment, `actions` varchar(255) NOT NULL,`roles` varchar(255) NOT NULL,PRIMARY KEY  (`id`))',
    'INSERT INTO `permissions_users` (`id`, `actions`, `roles`) VALUES (1, \'admin\', \'{"admin":"true"}\'),(2, \'create\', \'{"admin":"true"}\'),(3, \'update\', \'{"admin":"true"}\'),(4, \'delete\', \'{"admin":"true"}\')',
    'CREATE TABLE IF NOT EXISTS `roles` (`id` int(11) NOT NULL auto_increment, `rolename` varchar(255) NOT NULL, PRIMARY KEY  (`id`))',
    'INSERT INTO `roles` (`id`, `rolename`) VALUES (1, \'admin\')',
    'INSERT INTO `roles` (`id`, `rolename`) VALUES (2, \'guest\')',
    'CREATE TABLE IF NOT EXISTS `translation_columns` (`id` int(11) NOT NULL auto_increment,`tables` varchar(255) NOT NULL,`columns` text NOT NULL, PRIMARY KEY  (`id`))',
    'INSERT INTO `translation_columns` (`id`, `tables`, `columns`) VALUES (1, \'tree\', \'{"name":"varchar(255) not null","title":"varchar(255) not null","webcontent":"text not null","meta":"text not null"}\'),(2, \'tree_draft\', \'{"name":"varchar(255) not null","title":"varchar(255) not null","webcontent":"text not null","meta":"text not null"}\'),(3, \'tree_history\', \'{"name":"varchar(255) not null","title":"varchar(255) not null","webcontent":"text not null","meta":"text not null"}\')',
    'CREATE TABLE IF NOT EXISTS `tree` (`id` int(11) NOT NULL auto_increment, `lft` int(11) NOT NULL, `rgt` int(11) NOT NULL, `level` int(11) NOT NULL, `node_type` varchar(255) NOT NULL,`name_sk` varchar(255) NOT NULL, `created` datetime NOT NULL, `updated` datetime NOT NULL,`title_sk` varchar(255) NOT NULL,`webcontent_sk` text NOT NULL,`meta_sk` text NOT NULL,`controller` varchar(100) NOT NULL,`action` varchar(100) NOT NULL,`showinmenu` enum(\'0\',\'1\') default \'1\',`ishome` tinyint(1) default \'0\',`topLevel` tinyint(4) NOT NULL,`template` varchar(255) NOT NULL,`authorId` int(11) NOT NULL,`skupina` tinyint(4) NOT NULL default \'1\',`page_form` int(11) NOT NULL,`configuration` text NOT NULL,`name_en` varchar(255) NOT NULL,`title_en` varchar(255) NOT NULL,`webcontent_en` text NOT NULL,`meta_en` text NOT NULL,PRIMARY KEY  (`id`),KEY `lft` (`lft`),KEY `rgt` (`rgt`),KEY `level` (`level`))',
    'INSERT INTO `tree` (`id`, `lft`, `rgt`, `level`, `name_sk`, `created`, `updated`, `title_sk`, `webcontent_sk`, `meta_sk`, `controller`, `action`, `showinmenu`, `ishome`, `topLevel`, `template`, `authorId`, `skupina`, `page_form`, `configuration`, `name_en`, `title_en`, `webcontent_en`, `meta_en`) VALUES(1, 0, 3, 0, \'\', \'0000-00-00 00:00:00\', \'0000-00-00 00:00:00\', \'\', \'\', \'\', \'\', \'\', \'1\', 0, 0, \'\', 0, 1, 0, \'\', \'\', \'\', \'\', \'\'),(2, 1, 2, 1, \'First course\', \'2010-02-10 15:25:46\', \'2011-08-31 15:26:07\', \'\', \'\', \'\', \'tree/tree\', \'show\', \'1\', 1, 0, \'main.php\', 1, 1, 0, \'\', \'Home\', \'\', \'\', \'\')',
    'CREATE TABLE IF NOT EXISTS `tree_draft` (`id` int(11) NOT NULL auto_increment,`idTree` int(11) NOT NULL,`created` datetime NOT NULL,`updated` datetime NOT NULL,`name_sk` varchar(255) NOT NULL,`title_sk` varchar(255) NOT NULL,`webcontent_sk` text NOT NULL,`meta_sk` text NOT NULL,`contoller` varchar(100) NOT NULL,`action` varchar(100) NOT NULL,`showinmenu` enum(\'0\',\'1\') default \'0\',`ishome` tinyint(1) NOT NULL,`topLevel` tinyint(4) NOT NULL,`template` varchar(255) NOT NULL,`authorId` int(11) NOT NULL,`skupina` tinyint(4) NOT NULL default \'1\',`page_form` int(11) NOT NULL,`configuration` text NOT NULL,`name_en` varchar(255) NOT NULL,`title_en` varchar(255) NOT NULL,`webcontent_en` text NOT NULL,`meta_en` text NOT NULL,PRIMARY KEY  (`id`))',
    'CREATE TABLE IF NOT EXISTS `tree_history` (`id` int(11) NOT NULL auto_increment,`idTree` int(11) NOT NULL,`created` datetime NOT NULL,`updated` datetime NOT NULL,`name_sk` varchar(255) NOT NULL,`title_sk` varchar(255) NOT NULL,`webcontent_sk` text NOT NULL,`meta_sk` text NOT NULL,`contoller` varchar(100) NOT NULL,`action` varchar(100) NOT NULL,`showinmenu` enum(\'0\',\'1\') default \'0\',`ishome` tinyint(1) NOT NULL,`topLevel` tinyint(4) NOT NULL,`template` varchar(255) NOT NULL,`authorId` int(11) NOT NULL,`skupina` tinyint(4) NOT NULL default \'1\',`page_form` int(11) NOT NULL,`configuration` text NOT NULL,`name_en` varchar(255) NOT NULL,`title_en` varchar(255) NOT NULL,`webcontent_en` text NOT NULL,`meta_en` text NOT NULL,PRIMARY KEY  (`id`))',
    'CREATE TABLE IF NOT EXISTS `users` (`id` int(11) NOT NULL auto_increment,`owner_name` varchar(255) NOT NULL,`owner_surname` varchar(255) NOT NULL,`owner_mail` varchar(255) NOT NULL,`owner_password` varchar(255) NOT NULL,`created` datetime NOT NULL,`updated` datetime NOT NULL,`activation` set(\'active\',\'unactive\') default \'unactive\',`roleID` int(11) NOT NULL,PRIMARY KEY  (`id`))'
);
?>