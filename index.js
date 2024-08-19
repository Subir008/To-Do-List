$(document).ready(function () {
  $("#myTable").DataTable();

  // For Deleting Data
  $(".delete").on("click", function () {
    var taskId = $(this).data("id");
    $("#confirmDelete").data("id", taskId); // Set the ID to the confirm delete button
  });

  $("#confirmDelete").on("click", function () {
    var taskId = $(this).data("id");
    console.log("Task ID to delete: " + taskId);
    $.ajax({
      url: "delete_task.php", 
      type: "POST",
      data: { id: taskId },
      success: function (response) {
        $("#deleteModal").modal("hide");
        document.location.reload();
      },
    });
  });

  $("#cancelDelete").on('click',function () {
    $('#deleteModal').modal('hide'); 
  });


  $('.update').click(function() {
    var taskId = $(this).data('id'); // Get the task id from the data-id attribute

    // Send an AJAX request to fetch the task data
    $.ajax({
      url: 'fetch_task.php', // This is the PHP file that will return the task data
      type: 'POST',
      data: { task_no: taskId },
      success: function(data) {
        var task = JSON.parse(data); // Assuming the PHP file returns JSON data

        // Populate the form fields in the modal with the fetched data
        $('#updateTaskId').val(task.task_no);
        $('#updatetitle').val(task.task_title);
        $('#updatenote').val(task.task_details);

        // Open the modal
        $('#updateModal').modal('show');
      },
      error: function(xhr, status, error) {
        console.error('Error fetching task data:', error);
      }
    });
  });

  // Handle the update form submission
  $('#updateForm').submit(function(e) {
    e.preventDefault();

    // Send an AJAX request to update the task
    $.ajax({
      url: 'update_task.php', // This is the PHP file that will handle the update
      type: 'POST',
      data: $('#updateForm').serialize(), // Send the form data
      success: function(response) {
        // alert('Task updated successfully!');
        document.location.reload(); // Reload the page to reflect the changes
      },
      error: function(xhr, status, error) {
        console.error('Error updating task:', error);
      }
    });
  });

});

  

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
const modalClosed = document.getElementById("modalClosed");

const modal = document.querySelector(".modal");

const del = document.getElementsByClassName("delete");

// For Insertig data 
$("#form-submit").on("click", function (e) {
  e.preventDefault();
  let title = $("#title").val();
  let note = $("#note").val();

  if (title == "") {
    const toast = new bootstrap.Toast(toastLiveExample);
    document.getElementById("liveToast").style.backgroundColor = "#ffc107";
    document.getElementById(
      "toast-body"
    ).innerHTML = `<h6><i class="fa-solid fa-circle-info"> <span style="letter-spacing:1px;"> WARNING</span></i></h6><h6>Add Title</h6>`;
    toast.show();
    return;
  }
  if (note == "") {
    const toast = new bootstrap.Toast(toastLiveExample);
    document.getElementById("liveToast").style.backgroundColor = "#ffc107";
    document.getElementById(
      "toast-body"
    ).innerHTML = `<h6><i class="fa-solid fa-circle-info"> <span style="letter-spacing:1px;"> WARNING</span></i></h6><h6>Add Note</h6>`;
    toast.show();
    return;
  }

  $.ajax({
    url: "form-submit.php",
    type: "POST",
    data: {
      title: title,
      note: note,
    },
    success: function (data) {
      console.log(data);

      if (data == "Data Inserted") {
        const toast = new bootstrap.Toast(toastLiveExample);
        document.getElementById("liveToast").style.backgroundColor = "#1bc5bd";
        document.getElementById(
          "toast-body"
        ).innerHTML = `<h6><i class="fa-regular fa-circle-check"></i> <span>SUCCESS </span> </h6> <h6> Data Inserted Successfully</h6>`;
        toast.show();
        document.location.reload();
      } else {
        const toast = new bootstrap.Toast(toastLiveExample);
        document.getElementById("liveToast").style.backgroundColor = "#dc3545";
        document.getElementById(
          "toast-body"
        ).innerHTML = `<h6 style="color:white"><i class="fa-solid fa-triangle-exclamation"></i> <span>ERROR </span> </h6> <h6 style="color:white"> Something Wrong On Server</h6>`;
        toast.show();
        document.location.reload();
      }
    },
  });
});


// Array.from(del).forEach((element) =>{
//     element.addEventListener('click',function(e){
//         console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
//         tr = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
//         id = tr.getElementsByTagName('td')[3].innerText;
//         const taskNo = tr.querySelector('input[type="hidden"]').value;
//         console.log(taskNo);

//         id = e.target;
//     });

// });


