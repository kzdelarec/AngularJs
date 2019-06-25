<?php

require "dbc.php";

    $data = file_get_contents("php://input");
    $objData = json_decode($data);

    $sql = "SELECT * FROM role";
    $result = mysqli_query($dbc, $sql);

    $data = array();

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_array($result)) {
            array_push($data, $row);
        }
    }


    echo json_encode($data);
