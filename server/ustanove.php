<?php

require "dbc.php";

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(isset($_GET['idUstanove'])){
        $id = $_GET['idUstanove'];
        $sql = "SELECT naziv FROM ustanove WHERE idUstanove=$id";
        $result = mysqli_query($dbc, $sql);

        $data = array();

        if (mysqli_num_rows($result) > 0) {


            while ($row = mysqli_fetch_array($result)) {
                array_push($data, $row);
            }

        }
    } else {
        $sql = "SELECT * FROM ustanove";
        $result = mysqli_query($dbc, $sql);

        $data = array();

        if (mysqli_num_rows($result) > 0) {


            while ($row = mysqli_fetch_array($result)) {
                array_push($data, $row);
            }

        }
    }


    echo json_encode($data);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

    $ustanova=$objData->ustanova;
    //$put=isset($objData->put);


    /*if ($put){

        $sql="UPDATE posts SET comment='$post->comment', timestamp='$post->timestamp' WHERE id=$post->id";
        $result=mysqli_query($dbc,$sql);

        $data=array();

        if ($result) array_push($data,array('status'=>'ok'));


    } else {*/

        $sql="INSERT INTO ustanove (naziv, adresa, oib) VALUES('$ustanova->naziv','$ustanova->adresa','$ustanova->oib')";
        $result=mysqli_query($dbc,$sql);

    //}
}