<?php


require "dbc.php";

$data = file_get_contents("php://input");
$objData = json_decode($data);
$hashPass = md5($objData->password);
$sql="SELECT CONCAT(k.ime, ' ', k.prezime) AS ime,r.description as role, k.email as email, k.username as username, 
    k.smjerId, k.idUstanove, s.naziv AS smjer, u.naziv AS ustanova FROM korisnici k
	JOIN smjerovi s ON k.smjerId = s.idSmjera
	JOIN ustanove u ON k.idUstanove = u. idUstanove
	JOIN role r ON k.roleId = r.roleid 
	WHERE username ='$objData->username' AND password='$hashPass'";
$result=mysqli_query($dbc,$sql);

$data=array();

if (mysqli_num_rows($result)>0){


    $row=mysqli_fetch_array($result);
    $row['status']="ok";
    array_push($data,$row);


} else array_push($data,array('status'=>'notok', 'username' => $objData->username));

echo json_encode($data);