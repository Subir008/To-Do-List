<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />

  <link rel="stylesheet" href="style.css" />
  <title>To Do List</title>
</head>

<body>
  <?php
      include "db.php";
    ?>
  <div class="container">
    <h1>TO DO LIST</h1>
    <button type="button" class="btn btn-primary add" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Add Notes
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="exampleModalLabel">
              NOTES
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <input type="text" class="form-control mb-2" name="title" id="title"
                  placeholder="Add Your Title Here" />
                <textarea class="form-control" name="note" id="note" rows="10"
                  placeholder="Add Your Note Here"></textarea>
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

    <table class="table table-hover">
      <thead class="table-dark">
        <tr>
          <th scope="col" class="number">#</th>
          <th scope="col" class="task">Task</th>
          <th scope="col" class="action">Action</th>
        </tr>
      </thead>
      <tbody class="bg-warning">
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>
            <button type="button" class="btn btn-outline-danger">
              Danger
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>


  <!-- Optional JavaScript; choose one of the two! -->

  <!-- Option 1: Bootstrap Bundle with Popper -->
  <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
  <script src="index.js"></script>
</body>

</html>