<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Revice post data
$data = json_decode(file_get_contents("php://input"), true);
$emailto = 'spramodgusain@gmail.com';

$subject = 'Query from Ghaziabad Defence Academy';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
// $headers .= 'From: ' . $email . "\r\n" .
//     'Reply-To: ' . $email . "\r\n" .
//     'X-Mailer: PHP/' . phpversion();

$message = '<html><body>';
foreach ($data as $key => $val) {
    $message .= "<p> <strong>" . $key . ":</strong> " . $val . "</p>";
}
$message .= "</table></body></html>'";

if (mail($emailto, $subject, $message, $headers)) {
    $data = "Thank you for filling out your information!";
} else {
    error_log("Somthing went wrong...");
}

echo json_encode(array('status' => 200, 'message' => $data));
?>