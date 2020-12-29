<?php


require __DIR__ . '/vendor/autoload.php';


$client = new Google_Client();
$client->setApplicationName('Google Sheets API PHP Quickstart');
$client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
$client->setAccessType('offline');
$client->setAuthConfig( __DIR__ .'/credentials.json');

$service = new Google_Service_Sheets($client);
$spreadsheetId = '1BrrVlpnZJ0KBBVsnaObd18fSGQQjhGWUbepARcJbh4U';

$options = array('valueInputOption' => 'RAW');

$values = [
    [$_POST['fullname'], $_POST['phone'], $_POST['email'],$_POST['project'],$_POST['tellusmore'],$_POST['ProjectType'],$_POST['Packagetype']]
];

$body   = new Google_Service_Sheets_ValueRange(['values' => $values]);

$result = $service->spreadsheets_values->append($spreadsheetId, 'A1:E1', $body, $options);

exit;