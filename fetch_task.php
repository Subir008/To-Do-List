<?php
include 'db.php';

if (isset($_POST['task_no'])) {
  $task_no = $_POST['task_no'];
  $query = "SELECT * FROM manage_task WHERE task_no = $task_no";
  $result = mysqli_query($con, $query);
  
  if ($result) {
    $task = mysqli_fetch_assoc($result);
    echo json_encode($task); // Return the task data as JSON
  } else {
    echo json_encode(['error' => 'Task not found']);
  }
}
?>
