<?php


require __DIR__ . '/vendor/autoload.php';


$client = new Google_Client();
$client->setApplicationName('Google Sheets API PHP Quickstart');
$client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
$client->setAccessType('offline');
$client->setAuthConfig( __DIR__ .'/credentials.json');

$service = new Google_Service_Sheets($client);
$spreadsheetId = '1zIBwpiD-WOFoyneo5Fwb9Augp4Eah6nQWk7husiaJ_Q';

$options = array('valueInputOption' => 'RAW');

$values = [
    [$_POST['fullname'], $_POST['phone'], $_POST['email'],$_POST['pack'],$_POST['qty']]
];

$body   = new Google_Service_Sheets_ValueRange(['values' => $values]);

$result = $service->spreadsheets_values->append($spreadsheetId, 'A1:E1', $body, $options);

exit;