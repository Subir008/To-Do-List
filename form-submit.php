<?php
    include "db.php";

    $note = $_POST['note'];
    $title = $_POST['title'];

    $sql = "INSERT INTO `manage_task` (`task_title`, `task_details`, `delete_task`) VALUES ( '$title', '$note',  'No')";

    $query = mysqli_query($con , $sql);

    if($query)
    {
        echo "Data Inserted";
    }else{
        echo "Data Not Inserted" ;
        
    }

?>