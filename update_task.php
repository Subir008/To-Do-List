<?php
include 'db.php';

if (isset($_POST['task_no'])) {
  $task_no = $_POST['task_no'];
  $title = $_POST['updatetitle'];
  $note = $_POST['updatenote'];

  $query = "UPDATE manage_task SET task_title = '$title', task_details = '$note' WHERE task_no = $task_no";
  
  if (mysqli_query($con, $query)) {
    echo 'Task updated successfully';
  } else {
    echo 'Error updating task: ' . mysqli_error($con);
  }
}
?>
