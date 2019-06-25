<?php

require "dbc.php";

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $sql = "SELECT CONCAT(p.ime, ' ', p.prezime) AS ime, s.naziv AS smjer, s.idSmjera AS idS, u.naziv AS ustanova, u.idUstanove AS idUstanove , 
            r.description AS titula FROM profesori p
                JOIN role r ON p.roleId = r.roleid
                JOIN smjerovi s ON p.smjerId = s.idSmjera
                JOIN ustanove u ON s.idUstanove = u.idUstanove";
    $result = mysqli_query($dbc, $sql);

    $data = array();

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_array($result)) {
            array_push($data, $row);
        }
    }


    echo json_encode($data);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

    $profesor=$objData->profesor;
    //$put=isset($objData->put);


    /*if ($put){

        $sql="UPDATE posts SET comment='$post->comment', timestamp='$post->timestamp' WHERE id=$post->id";
        $result=mysqli_query($dbc,$sql);

        $data=array();

        if ($result) array_push($data,array('status'=>'ok'));


    } else {*/

        $sql="INSERT INTO profesori (ime, prezime, roleId, smjerId, idUstanove) 
                VALUES('$profesor->ime','$profesor->prezime',$profesor->roleId, $profesor->smjerId, $profesor->idUstanova)";
        echo $sql;
        $result=mysqli_query($dbc,$sql);

    //}
}