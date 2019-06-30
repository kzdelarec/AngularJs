<?php

require "dbc.php";

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

    $user=$objData->user;
$hashPass = md5($user->password);

$sql="INSERT INTO korisnici (ime, prezime, username, email, password, roleId, smjerId, idUstanove) 
        VALUES('$user->ime', '$user->prezime', '$user->username', '$user->email', '$hashPass', 5, $user->smjer, $user->ustanova)";
$result=mysqli_query($dbc,$sql);

$data=array();

if ($result) array_push($data,array('status'=>'ok', 'insertId'=>mysqli_insert_id($dbc)));

echo json_encode($data);


