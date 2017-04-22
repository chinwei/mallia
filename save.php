<!-- MODIFIED BY CHUCK: Page added. -->
<?php
    session_start(); // Causes an error as session has already started in the iframe's parent window

    class SwitchConfig
    {
        public $name;
        public $rocker;
        public $plate;
    }
    // Store all the POST variables into switchConfig classes
    $i = 0;
    $switchConfigArray = array();
    while(isset($_POST["name" . $i]))
    {
        $switchConfig = new SwitchConfig();
        $switchConfig->name = $_POST["name" . $i];
        $switchConfig->rocker = $_POST["rocker" . $i];
        $switchConfig->plate = $_POST["plate" . $i];
        $switchConfigArray[$i] = $switchConfig;
        $i++;
    }

    // If switchConfigArray has been assigned, set as a session for later use
    if($i != 0)
    {
        $_SESSION["SwitchConfigArray"] = $switchConfigArray;
        //echo "<pre>";
        //echo print_r($_SESSION);
        //echo "</pre>";
        //header('Location: save.php');
        exit(); // exit() is needed to preserve the objects in the session variables across pages
    }
?>

<!DOCTYPE html>
<html class='no-js'>
  <head>
    <title></title>
  </head>
  <body>
    <form id="form1" action="save.php" method="post">
        <!-- <input id="form1submit" type="submit" text="submit" /> -->
    </form>
  </body>
</html>