<?php

    $mysqli = new mysqli();
    $mysqli->connect("localhost","root","", "cefetlink");

    if(mysqli_connect_errno()) {
        echo "Erro de conexão: " .$mysqli->error;
        exit(0);
    }else {
        echo "Conexão realizada";
    }
?>