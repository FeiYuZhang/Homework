<?php
// Require the core Temboo PHP SDK and required libraries
require_once('php/temboo.php');

// Instantiate the session and Choreo
$session = new Temboo_Session('siephe', 'myFirstApp', '819d4f4d49b64ffc8fde91f131a594ab');
$listSearchResultsChoreo = new YouTube_Search_ListSearchResults($session);

// Act as a proxy on behalf of the JavaScript SDK
$tembooProxy = new Temboo_Proxy();

// Add Choreo proxy with an ID matching that specified by the JS SDK client
$tembooProxy->addChoreo('jsListSearchResults', $listSearchResultsChoreo);

// Set default input values
$tembooProxy->allowUserInputs('jsListSearchResults', 'Query')->allowUserInputs('jsListSearchResults', 'MaxResults');

// Execute the Choreo
echo $tembooProxy->execute($_POST['temboo_proxy']);
?>