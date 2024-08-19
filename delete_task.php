<?php
    include "db.php";

    $id = $_POST['id'];

    $sql = "DELETE FROM `manage_task` WHERE task_no = $id";

    $query = mysqli_query($con , $sql);

    if($query)
    {
        echo "Data Deleted";
    }else{
        echo "Data Not Inserted" ;
        
    }

?>