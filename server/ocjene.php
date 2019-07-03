<?php

require "dbc.php";

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    if(isset($_GET['prof'])){
        $id = $_GET['id'];

        $sql = "SELECT z.ocjena, CONCAT(k.ime, \" \", k.prezime) AS student, CONCAT(p.ime, \" \", p.prezime) AS profesor,
                (SELECT AVG(ocjena) FROM zapisi WHERE idProfesora=$id) AS prosjek FROM zapisi z
                JOIN korisnici k ON k.id = z.idStudenta
                JOIN profesori p ON z.idProfesora = p.id
                WHERE p.id=$id";
        $result = mysqli_query($dbc, $sql);

        $data = array();

        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_array($result)) {
                array_push($data, $row);
            }
        }


        echo json_encode($data);
    }

    if(isset($_GET['stud'])){
        $id = $_GET['id'];

        $sql = "SELECT z.ocjena, CONCAT(p.ime, \" \", p.prezime) AS profesor FROM zapisi z
                    JOIN korisnici k ON k.id = z.idStudenta
                    JOIN profesori p ON z.idProfesora = p.id
                    WHERE k.id=$id";
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

/*if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

    $profesor=$objData->profesor;
    //$put=isset($objData->put);


    /*if ($put){

        $sql="UPDATE posts SET comment='$post->comment', timestamp='$post->timestamp' WHERE id=$post->id";
        $result=mysqli_query($dbc,$sql);

        $data=array();

        if ($result) array_push($data,array('status'=>'ok'));


    } else {

        $sql="INSERT INTO profesori (ime, prezime, roleId, smjerId, idUstanove) 
                VALUES('$profesor->ime','$profesor->prezime',$profesor->roleId, $profesor->smjerId, $profesor->idUstanova)";
        echo $sql;
        $result=mysqli_query($dbc,$sql);

    //}
}*/