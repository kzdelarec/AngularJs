<?php

require "dbc.php";

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    if(isset($_GET['delete'])){

        $id = $_GET['id'];

        $sql = "UPDATE korisnici SET active = 0 WHERE id=$id";
        $result = mysqli_query($dbc, $sql);
        
    } else {
        $sql = "SELECT k.ime, k.prezime, k.username, k.email, k.id, r.description AS rola, r.roleid AS rId,
            u.naziv AS ustanova, u.idUstanove AS idU, s.naziv AS smjer, s.idSmjera AS idS FROM korisnici k
                JOIN role r ON k.roleId = r.roleid
                JOIN smjerovi s ON k.smjerId = s.idSmjera
                JOIN ustanove u ON k.idUstanove = u.idUstanove
                WHERE k.active > 0";
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

    $korisnik=$objData->korisnik;
    $put=isset($objData->put);


    if ($put){

        $sql="UPDATE korisnici SET 
                ime='$korisnik->ime', 
                prezime='$korisnik->prezime', 
                email='$korisnik->email', 
                roleId='$korisnik->rId', 
                smjerId='$korisnik->idS', 
                idUstanove='$korisnik->idUstanove' 
                WHERE id=$korisnik->id";
        $result=mysqli_query($dbc,$sql);

        $data=array();

        if ($result) array_push($data,array('status'=>'ok'));


    } /*else {

        $sql="INSERT INTO profesori (ime, prezime, roleId, smjerId, idUstanove) 
                VALUES('$profesor->ime','$profesor->prezime',$profesor->roleId, $profesor->smjerId, $profesor->idUstanova)";
        echo $sql;
        $result=mysqli_query($dbc,$sql);

    }*/
}