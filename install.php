<?php
/*
 * Tento script ma za ulohu nainstalovat GINGERS LMS a sice :
 * 1.) Ziskat informaciu kde sa nachadza Databaza, kde bude ulozene cele LMS
 * 
 */

$request = trim($_POST['fce']);
$install = new install();
$install->$request();

class install {
    public $lang;
    public $results = array();
    
    public function __construct() {
        $this->lang = $this->getPreferredLanguage();
    }
    
    public function createAdmin() {
        
        $errors = 0;
        $errorMessage = array();
        
        $adminName = trim($_POST['adminName']);
        $adminSurname = trim($_POST['adminSurname']);
        $adminLogin = trim($_POST['adminLogin']);
        $adminPassword = trim($_POST['adminPassword']);
        $retypePassword = trim($_POST['retypePassword']);
        
        $jsonData = array();
        
        if(!$this->requiredValidator($adminName)) {
            $errors++;
            $errorMessage[] = $this->t('yii','Attribute').' '.$this->t('yii','Name').' '.$this->t('yii','can not be empty');
        }
        
        if(!$this->requiredValidator($adminSurname)) {
            $errors++;
            $errorMessage[] = $this->t('yii','Attribute').' '.$this->t('yii','Surname').' '.$this->t('yii','can not be empty');
        }
        
        if(!$this->requiredValidator($adminLogin)) {
            $errors++;
            $errorMessage[] = $this->t('yii','Attribute').' '.$this->t('yii','Login (e-mail)').' '.$this->t('yii','can not be empty');
        }
        
        if(!$this->emailValidator($adminLogin)) {
            $errors++;
            $errorMessage[] = $this->t('yii','Attribute').' '.$this->t('yii','Login (e-mail)').' '.$this->t('yii','is not a valid e-mail address');
        }
        
        if(!$this->requiredValidator($adminPassword)) {
            $errors++;
            $errorMessage[] = $this->t('yii','Attribute').' '.$this->t('yii','Password').' '.$this->t('yii','can not be empty');
        }
        
        if(!$this->requiredValidator($retypePassword)) {
            $errors++;
            $errorMessage[] = $this->t('yii','Attribute').' '.$this->t('yii','Retype password').' '.$this->t('yii','can not be empty');
        }
        
        if(!$this->compareValidator($adminPassword,$retypePassword)) {
            $errors++;
            $errorMessage[] = $this->t('yii','Attributes').' '.$this->t('yii','Password').' '.$this->t('yii','and').' '.$this->t('yii','Retype password').' '.$this->t('yii','are not the same');
        }
        
        if($errors > 0) {
            $jsonData['errors'] = $errors;
            $jsonData['errorMessage'] = $errorMessage;
        } else {
            $jsonData['errors'] = $errors;
            $jsonData['hash'] = md5("defaultadmin");
        }
        
        echo json_encode($jsonData);
    }
    
    public function accountForm() {
        $form = "
        <form id='accountForm'>
            <table>
                <tr>
                    <td>".$this->t('yii','Name')." <span class='error'>*</span></td>
                    <td> : <input type='text' name='adminName' id='adminName'/></td>
                </tr>
                <tr>
                    <td>".$this->t('yii','Surname')." <span class='error'>*</span></td>
                    <td> : <input type='text' name='adminSurname' id='adminSurname'/></td>
                </tr>
                <tr>
                    <td>".$this->t('yii','Login (e-mail)')." <span class='error'>*</span></td>
                    <td> : <input type='text' name='adminLogin' id='adminLogin'/></td>
                </tr>
                <tr>
                    <td>".$this->t('yii', 'Password')." <span class='error'>*</span></td>
                    <td> : <input type='password' name='adminPassword' id='adminPassword'/></td>
                </tr>
                <tr>
                    <td>".$this->t('yii', 'Retype password')." <span class='error'>*</span></td>
                    <td> : <input type='password' name='retypePassword' id='retypePassword'/></td>
                </tr>
            </table>
        </form>";
        
        $header = "<h3>".$this->t('yii','Set up admin account')."</h3>";
        $button = "<input type='button' value='".$this->t('yii', 'Create account')."' onclick='javascript: createAdmin()' style='font-weight: bold' /> <span id='loader'><img src='../images/web/ajax-loader.gif' /></span>";
        
        $jsonData = array();
        $jsonData['form'] = $form;
        $jsonData['header'] = $header;
        $jsonData['button'] = $button;
        echo json_encode($jsonData);
    }
    
    public function makedb() {
        $dbhost = trim($_POST['dbhost']);
        $dbname = trim($_POST['dbname']);
        $dbuser = trim($_POST['dbuser']);
        $dbpass = trim($_POST['dbpass']);
        
        //try
        
        try {
            
            $connect = mysql_connect($dbhost, $dbuser, $dbpass);
            
            if(!$connect) {
                $this->results['connect'] = $this->t('yii','Could not connect to database');
            } else {
                $this->results['connect'] = $this->t('yii','OK');
            }
             
        } catch (Exception $e) {
            $this->results['connect'] = $e->getMessage();
        }
        
        if(mysql_select_db($dbname)) {
            
            $this->results['selectdb'] = $this->t('yii', 'OK');
        } else {
            $this->results['selectdb'] = $this->t('yii','Could not select DB');
        }
        
        if($this->results['connect'] == 'OK' && $this->results['selectdb'] == 'OK') {
            
            $sql1 = "ALTER DATABASE ".$dbname." CHARACTER SET utf8 COLLATE utf8_unicode_ci";
            $result = mysql_query($sql1);
            
            $sql2 = "SET NAMES utf8";
            $result2 = mysql_query($sql2);
            
            if($result) {
                $file_name = "install.sql";
                
                //$queries = explode(";",file_get_contents($file_name));
                $queries = include("installqueries.php");
                $qerrors = 0;
                
                $result = mysql_query(trim($sql));
                
                foreach ($queries as $sql) {                    
                    $result = mysql_query(trim($sql));
                    if(!$result) {
                        $qerrors++;
                    } else {
                        
                    }
                }
                
                if($qerrors > 0) {
                    $this->results['installquery'] = $this->t('yii','Installation queries failed, contact administrator please');
                } else {
                    @chmod("install.txt", 777);
                    
                    $fp = fopen("install.txt", "w+");
                    fwrite($fp, '0');
                    fclose($fp);
                    
                    @$newconfig = require_once './requirements/configTemplate.php';
                    
                    @chmod("./protected/config/main.php", 777);
                    
                    $fp1 = fopen("./protected/config/main.php", "w+");
                    fwrite($fp1, $newconfig);
                    fclose($fp1);
                   
                    $this->results['process'] = $this->t('yii','Installation complete, set up administrator account');
                }
            } else {
                // nepodarilo sa nastavit utf8 
                $this->results['setdbcharset'] = $this->t('yii','Could not set character set');
            }                  
            
        }
            
        echo json_encode($this->results);        
        
    }
    
    function getPreferredLanguage()
    {
	if(isset($_SERVER['HTTP_ACCEPT_LANGUAGE']) && ($n=preg_match_all('/([\w\-]+)\s*(;\s*q\s*=\s*(\d*\.\d*))?/',$_SERVER['HTTP_ACCEPT_LANGUAGE'],$matches)) > 0)
	{
		$languages=array();
		for($i=0; $i < $n; ++$i)
			$languages[$matches[1][$i]]=empty($matches[3][$i]) ? 1.0 : floatval($matches[3][$i]);
		arsort($languages);
		foreach($languages as $language=>$pref)
			return strtolower(str_replace('-','_',$language));
	}
	return false;
    }
    
    function t($category,$message,$params=array())
    {
	static $messages;

	if($messages === null)
	{
		$messages=array();
		if(($this->lang) !== false)
		{
			$file=dirname(__FILE__)."/requirements/messages/$this->lang/yii.php";
			if(is_file($file))
				$messages=include($file);
		}
	}

	if(empty($message))
		return $message;

	if(isset($messages[$message]) && $messages[$message] !== '')
		$message=$messages[$message];

	return $params !== array() ? strtr($message,$params) : $message;
    }
    
    public function emailValidator($value) {
        $pattern='/^[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/';

        
        if(is_string($value) && strlen($value)<=254 && (preg_match($pattern,$value))) {
            return TRUE;
        } else {
            return FALSE;
        }
    }
    
    public function requiredValidator($value) {
        if(strlen(trim($value)) > 0)
        {
            return TRUE;
            
        } else {
            return FALSE;
        }

    }
    
    public function compareValidator($value1,$value2) {
        if(trim($value1) != trim($value2)) {
            return FALSE;
        } else {
            return TRUE;
        }
    }
}
?>