<?php

$install = (int)file_get_contents("install.txt");

if($install) {
    header("Location: /requirements/index.php");
} else {
    if($_SERVER['HTTP_HOST'] == "local.lms.sk") {
        $yii=dirname(__FILE__).'/framework.1.1.13/yii.php';
        $config=dirname(__FILE__).'/protected/config/main_local.php';
    } else {
        $yii=dirname(__FILE__).'/framework.1.1.13/yii.php';
        $config=dirname(__FILE__).'/protected/config/main.php';
    }

    // remove the following line when in production mode
    defined('YII_DEBUG') or define('YII_DEBUG',true);

    require_once($yii);
    Yii::createWebApplication($config)->run();
}