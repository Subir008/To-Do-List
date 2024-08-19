<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
  <link rel="stylesheet" href="//cdn.datatables.net/2.1.4/css/dataTables.dataTables.min.css">
  <link rel="stylesheet" href="style.css" />
  <title>To Do List</title>
</head>

<body>
  <?php
      include "db.php";
    ?>
  <div class="container">
    <h1>TO DO LIST</h1>
    <button type="button" id="myModal" class="btn btn-primary add" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <i class="fa-solid fa-circle-plus" style="color: #FFD43B;"></i>
      Add Notes
    </button>

    <!-- Note Add Modal Start -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="exampleModalLabel">
              NOTES
            </h5>
            <button type="button" class="btn-close" id="modalClosed" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <input type="text" class="form-control mb-2" name="title" id="title"
                  placeholder="Add Your Title Here" / required>
                <textarea class="form-control" name="note" id="note" rows="10"
                  placeholder="Add Your Note Here" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary note-submit" id="form-submit">
                Submit
              </button>
            </form>
          </div>
          <!-- <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div> -->
        </div>
      </div>
    </div>
    <!-- Note Add Modal End -->

    <table class="table table-hover" id="myTable">
      <thead class="table-dark">
        <tr>
          <th scope="col" class="number">#</th>
          <th scope="col" class="title">Title</th>
          <th scope="col" class="task">Task</th>
          <th scope="col" class="action">Action</th>
        </tr>
      </thead>
      <tbody class="bg-warning">
        <?php
          $query = "SELECT * FROM manage_task ORDER BY task_no" ;
          $result = mysqli_query($con, $query);
          $no = 0;
          while($row = mysqli_fetch_assoc($result)){
            $no++;
        ?>
            <tr>
              <td><?php echo $no ?></td> 
              <td><?php echo $row['task_title'] ?></td> 
              <td><?php echo $row['task_details'] ?></td> 
              <td><button type="button" class="btn btn-outline-danger">
                <i class="fa-solid fa-trash"></i>
                Delete
              </button></td>   
            </tr>
        <?php
          }
          ?>
      </tbody>
    </table>


  </div>

  <!-- Toaster Start -->
  <div class="position-fixed bottom-0 end-0 p-3 me-2" style="z-index: 9999; opacity: 99;">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <!-- <div class="toast-header">
        <img src="..." class="rounded me-2" alt="...">
        <strong class="me-auto">Bootstrap</strong>
        <small class="text-muted">just now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div> -->
      <div class="toast-body p-4" id="toast-body" >
       
      </div>
    </div>
  </div>
  <!-- Toaster End -->

  <!-- Optional JavaScript; choose one of the two! -->

  <!-- Option 1: Bootstrap Bundle with Popper -->
  <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
  crossorigin="anonymous"></script>
  <script src="//cdn.datatables.net/2.1.4/js/dataTables.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/e1275c01b3.js" crossorigin="anonymous"></script>
  <script src="index.js"></script>
</body>

</html>