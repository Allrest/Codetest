<?php
    $data = json_decode($_POST['data'], true);
    $name = $data['name'];
    $vehicle = $data['vehicle'];
    echo "Welcome {$vehicle}-driving $name!";
?>