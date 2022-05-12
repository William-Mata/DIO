<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Segundo site do curso DIO em PHP</title>

    <style type="text/css">
        .linha {
            font-weight: bold;
            color: blue;
            padding-left: 10px;
            line-height: 50px;
        }
    </style>

</head>

<body>
    
    <?php
    for ($i = 0; $i < 10; $i++) {
        print("<span class='linha'>Linha número" . $i . "</span>\n");
    }
    ?>


    <script type="text/javascript">
        alert("Wooho")
    </script>
</body>

</html>