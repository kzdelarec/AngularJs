<?php

require "dbc.php";

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    if(isset($_GET['delete'])){
        $id = $_GET['id'];

        $sql = "DELETE FROM zapisi WHERE idzapisi=$id";
        $result = mysqli_query($dbc, $sql);
    }

    else if(isset($_GET['prof'])){
        $id = $_GET['id'];

        $sql = "SELECT z.ocjena, CONCAT(k.ime, \" \", k.prezime) AS student, CONCAT(p.ime, \" \", p.prezime) AS profesor,
                (SELECT AVG(ocjena) FROM zapisi WHERE idProfesora=$id) AS prosjek, z.idzapisi as id FROM zapisi z
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

    else if(isset($_GET['stud'])){
        $id = $_GET['id'];

        $sql = "SELECT z.ocjena, CONCAT(p.ime, \" \", p.prezime) AS profesor, z.idzapisi as id FROM zapisi z
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
    } else {

        $idU = $_GET['idU'];
        $idS = $_GET['idS'];
        $idSt = $_GET['idSt'];
        $sql="SELECT CONCAT(p.ime, ' ', p.prezime) AS ime, p.id AS id, s.naziv AS smjer, u.naziv AS ustanova FROM profesori p
                JOIN smjerovi s ON p.smjerId = s.idSmjera
                JOIN ustanove u ON p.idUstanove = u. idUstanove
                WHERE p.idUstanove=$idU AND p.smjerId=$idS AND p.id NOT IN (SELECT idProfesora FROM zapisi where idStudenta=$idSt)";
        $result=mysqli_query($dbc,$sql);

        $data=array();

        if (mysqli_num_rows($result)>0){


            while($row=mysqli_fetch_array($result)){
                array_push($data,$row);
            }

        }

        echo json_encode($data);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

    $zapis=$objData->zapis;
    $put=isset($objData->put);


    if ($put){

        $sql="UPDATE zapisi SET ocjena='$zapis->ocjena' WHERE idzapisi=$zapis->id";
        $result=mysqli_query($dbc,$sql);

        $data=array();

        if ($result) array_push($data,array('status'=>'ok'));


    } else {

        $sql="INSERT INTO zapisi (idStudenta, idProfesora, ocjena) 
                VALUES('$zapis->idSt','$zapis->id',$zapis->ocjena)";
        echo $sql;
        $result=mysqli_query($dbc,$sql);

    }
}