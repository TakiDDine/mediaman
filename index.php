
<?php
// Read REQUEST_URI, suppress errors (gave E_WARNING prior to PHP 5.3.3).
$uriData = @parse_url($_SERVER['REQUEST_URI']);

$path = '';
if ($uriData === false) {
    // Do something?
} else {
    if (isset($uriData['path'])) {
        // We might be in a subdirectory of the webroot.
        // We are only interested in the part starting from this relative root.
        $path = str_replace(DIRECTORY_SEPARATOR, '/', $uriData['path']);
        $relativePath = str_replace(DIRECTORY_SEPARATOR, '/', dirname($_SERVER['SCRIPT_NAME']));
        // Strip the relative path from $path.
        $path = substr($path, strlen($relativePath));
        // Finally, strip any leading/trailing slashes so we end up with a "cleaned" path.
        $path = trim($path, '/');
    }
}


$path = trim(substr($uriData['path'], strlen(dirname($_SERVER['SCRIPT_NAME']))), '/');

?>




<?php


$forbiden = ['creation-video','registration-form','allvideos' , 'package-type' ,'brand-pack' ,  'ecom-pack' ,'thank-you' ,'booking-confirmed' ,'faq' ];

if( ( !in_array($path,$forbiden) ) or ( $path == '' ) ){
    include 'inc/header.php';    
}


if(!empty($path)){
    $file = $path.'.php';
    if(file_exists($file)){
        require_once $file;
    }else {
       require_once 'home.php';
    }
}


else {
      require_once 'home.php';
}


?>
















<?php 

if( !in_array($path,$forbiden) ){
    include 'inc/footer.php';
}

?>