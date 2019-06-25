<?php

require "dbc.php";



if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    if (isset($_GET['id'])){

        $id=$_GET['id'];

        $sql="DELETE FROM posts WHERE id='$id'";
        $result=mysqli_query($dbc,$sql);

        $data=array();

        if ($result) array_push($data,array('status'=>'ok'));


    } else {

        $sql="SELECT CONCAT(p.ime, ' ', p.prezime) AS ime, p.id as id, s.naziv AS smjer, u.naziv AS ustanova FROM profesori p
JOIN smjerovi s ON p.smjerId = s.idSmjera
JOIN ustanove u ON p.idUstanove = u. idUstanove
WHERE p.idUstanove=1 AND p.smjerId=4";
        $result=mysqli_query($dbc,$sql);

        $data=array();

        if (mysqli_num_rows($result)>0){


            while($row=mysqli_fetch_array($result)){
                array_push($data,$row);
            }

        }

    }

} else if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

    $post=$objData->post;
    $put=isset($objData->put);


    if ($put){

        $sql="UPDATE posts SET comment='$post->comment', timestamp='$post->timestamp' WHERE id=$post->id";
        $result=mysqli_query($dbc,$sql);

        $data=array();

        if ($result) array_push($data,array('status'=>'ok'));


    } else {

        $sql="INSERT INTO posts (userId, timestamp, comment) VALUES($post->user,'$post->timestamp','$post->comment')";
        $result=mysqli_query($dbc,$sql);

        $data=array();

        if ($result) array_push($data,array('status'=>'ok', 'insertId'=>mysqli_insert_id($dbc)));

    }




}


echo json_encode($data);


