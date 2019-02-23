<?php

$response = array();
$response['status'] = "warning";

if( (isset($_POST['name']) && $_POST['name'] != "") && (isset($_POST['email']) && $_POST['email'] != "") ) {
    $to = "your@email.com"; // Your email
    $subject = 'New registration!'; // E-mail subject
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Name: '.$_POST['name'].'</p>
                    <p>E-mail: '.$_POST['email'].'</p>
                </body>
            </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; // Charset
    $headers .= "From: BrainsCloud <your@email.com>\r\n"; // Your name and email

    if(mail($to, $subject, $message, $headers)) {
        $response['status'] = "success";
    } else {
        $response['status'] = "error";
    }
}

echo json_encode($response);

?>
