<?php


require __DIR__ . '/vendor/autoload.php';


$client = new Google_Client();
$client->setApplicationName('Google Sheets API PHP Quickstart');
$client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
$client->setAccessType('offline');
$client->setAuthConfig( __DIR__ .'/credentials.json');

$service = new Google_Service_Sheets($client);
$spreadsheetId = '1FNmTZ2biySC6YqJoYyqpdmN4AY-P6Bkd8S6NnGimOgY';

$options = array('valueInputOption' => 'RAW');

$values = [
    [$_POST['fullname'], $_POST['phone'], $_POST['email'],$_POST['pack'],$_POST['upsell'],$_POST['packprice'],$_POST['upsellprice'],$_POST['coupon']]
];

$body   = new Google_Service_Sheets_ValueRange(['values' => $values]);

$result = $service->spreadsheets_values->append($spreadsheetId, 'A1:E1', $body, $options);

exit;