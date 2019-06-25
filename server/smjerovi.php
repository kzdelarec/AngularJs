<?php

require "dbc.php";

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    if(isset($_GET[id])) {
        $id = $_GET[id];
        $data = file_get_contents("php://input");
        $objData = json_decode($data);

        $sql = "SELECT s.naziv, s.idSmjera AS idSmjera,u.naziv AS ustanova FROM smjerovi s
                  JOIN ustanove u ON s.idUstanove = u.idUstanove
                  WHERE s.idUstanove=$id";
        $result = mysqli_query($dbc, $sql);

        $data = array();

        if (mysqli_num_rows($result) > 0) {


            while ($row = mysqli_fetch_array($result)) {
                array_push($data, $row);
            }

        }


        echo json_encode($data);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

    $smjer=$objData->smjer;
    //$put=isset($objData->put);


    /*if ($put){

        $sql="UPDATE posts SET comment='$post->comment', timestamp='$post->timestamp' WHERE id=$post->id";
        $result=mysqli_query($dbc,$sql);

        $data=array();

        if ($result) array_push($data,array('status'=>'ok'));


    } else {*/
    $test = array();

    $sql="INSERT INTO smjerovi (naziv, idUstanove) VALUES('$smjer->naziv',$smjer->ustanovaId)";
    $result=mysqli_query($dbc,$sql);
    //}
}