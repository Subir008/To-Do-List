<?php
// Database Credentials
$servername = "localhost";
$username = "root";
$password = "";
$database = "to_do_list";

// Create the connection with dB
$con = mysqli_connect($servername, $username, $password, $database);

// Check the connection
/*
if ($con) {
    echo "Connection Established Successfully";
    echo "<br>";
} else {
    echo "Connection Couldn't Established Due to ... <br>";
    die(mysqli_connect_error());
}
*/

// Create a table in dB
$table_create = "CREATE TABLE `manage_task` ( `task_no` INT(50) NOT NULL AUTO_INCREMENT , `task_title` VARCHAR(100) , `task_details` LONGTEXT NOT NULL ,  `entry_timestamp` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,  `delete_task` ENUM('Yes','No') NOT NULL default 'No' ,    PRIMARY KEY  (`task_no`)) ";

$table_query = mysqli_query($con , $table_create);

// Check table creation
/*
if($table_query){
    echo "Table Created Successfully <br>";
}else{
    echo "Table Creation Failure Due To ... <br>";
    die(mysqli_error($con));
}
*/


?>