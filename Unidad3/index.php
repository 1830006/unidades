<?php

    $tabla=0;
    $mul=0;

    if(isset($_GET["tabla"])){
        $tabla=$_GET["tabla"];
    }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tablas de Multiplicar</title>
</head>
<body>
<?php 
        for($i=$tabla; $i<=10;$i++){
           
          
    ?> 
          <h2> <?php echo $tabla;?> x <?php echo $i;?> = <?php echo $tabla * $i;?> </h2>
          <?php  
        }  

        ?>
</body>
</html>