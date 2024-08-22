$(document).ready(function () {
  $("#myTable").DataTable();

  const loader = document.querySelector(".loader");
  const loaderwrapper = document.querySelector(".loader-wrapper");

  // For Deleting Data
  $(document).on("click", ".delete", function () {
    var taskId = $(this).data("id");
    $("#confirmDelete").data("id", taskId); // Set the ID to the confirm delete button
  });

  $("#confirmDelete").on("click", function () {
    var taskId = $(this).data("id");
    console.log("Task ID to delete: " + taskId);

    $(".loader-wrapper").css("visibility", "visible");
    $(".loader").show();
    $.ajax({
      url: "delete_task.php",
      type: "POST",
      data: { id: taskId },
      success: function (response) {
        $("#deleteModal").modal("hide");
        const toast = new bootstrap.Toast(toastLiveExample);
        document.getElementById("liveToast").style.backgroundColor = "#1aa179";
        document.getElementById(
          "toast-body"
        ).innerHTML = `<h6 style="color:white"><i class="fa-regular fa-circle-check"></i> <span>SUCCESS </span> </h6> <h6 style="color:white"> Data Deleted Successfully</h6>`;
        toast.show();
        $(".loader").hide();
        $(".loader-wrapper").hide();
        $(".loader-wrapper").css("visibility", "hidden");
        document.location.reload();
      },
    });
  });

  $("#cancelDelete").on("click", function () {
    $("#deleteModal").modal("hide");
  });

  // For Updating Data
  $(document).on("click", ".update", function () {
    var taskId = $(this).data("id"); // Get the task id from the data-id attribute

    console.log(taskId);

    $(".loader-wrapper").css("visibility", "visible").show();
    $(".loader").css("visibility", "visible").show();
    // Send an AJAX request to fetch the task data
    $.ajax({
      url: "fetch_task.php", // This is the PHP file that will return the task data
      type: "POST",
      data: { task_no: taskId },
      success: function (data) {
        var task = JSON.parse(data); // Assuming the PHP file returns JSON data

        // Populate the form fields in the modal with the fetched data
        $("#updateTaskId").val(task.task_no);
        $("#updatetitle").val(task.task_title);
        $("#updatenote").val(task.task_details);

        // Open the modal
        $("#updateModal").modal("show");
        $(".loader").hide();
        $(".loader-wrapper").hide();
        $(".loader-wrapper").css("visibility", "hidden");
      },
      error: function (xhr, status, error) {
        console.error("Error fetching task data:", error);
      },
    });
  });

  // Handle the update form submission
  $("#updateForm").submit(function (e) {
    e.preventDefault(); // Prevent default form submission
    $(".loader-wrapper").css("visibility", "visible").show();
    $(".loader").css("visibility", "visible").show();
    // Send an AJAX request to update the task
    $.ajax({
      url: "update_task.php", // This is the PHP file that will handle the update
      type: "POST",
      data: $("#updateForm").serialize(), // Send the form data
      success: function (response) {
        const toast = new bootstrap.Toast(toastLiveExample);
        document.getElementById("liveToast").style.backgroundColor = "#1aa179";
        document.getElementById(
          "toast-body"
        ).innerHTML = `<h6 style="color:white"><i class="fa-regular fa-circle-check"></i> <span>SUCCESS </span> </h6> <h6 style="color:white"> Data Updated Successfully </h6>`;
        $(".loader").hide();
        $(".loader-wrapper").hide();
        $(".loader-wrapper").css("visibility", "hidden");
        toast.show();

        document.location.reload(); // Reload the page to reflect the changes
      },
      error: function (xhr, status, error) {
        console.error("Error updating task:", error);
      },
    });
  });
});

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
const modalClosed = document.getElementById("modalClosed");

const modal = document.querySelector(".modal");

const del = document.getElementsByClassName("delete");

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
  $(".loader-wrapper").css("visibility", "visible");
  $(".loader").show();

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
        $(".loader").hide();
        $(".loader-wrapper").hide();
        $(".loader-wrapper").css("visibility", "hidden");
        document.getElementById("liveToast").style.backgroundColor = "#1bc5bd";
        document.getElementById(
          "toast-body"
        ).innerHTML = `<h6><i class="fa-regular fa-circle-check"></i> <span>SUCCESS </span> </h6> <h6> Data Inserted Successfully</h6>`;
        toast.show();
        document.location.reload();
      } else {
        const toast = new bootstrap.Toast(toastLiveExample);
        $(".loader").hide();
        $(".loader-wrapper").hide();
        $(".loader-wrapper").css("visibility", "hidden");
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
