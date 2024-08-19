$(document).ready(function () {
    $('#myTable').DataTable();
});

const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');
const modalClosed = document.getElementById('modalClosed');

const modal = document.querySelector(".modal");

$("#form-submit").on('click',function (e) {
    e.preventDefault();
    let title = $("#title").val();
    let note = $("#note").val();

    if(title == "")
    {
        const toast = new bootstrap.Toast(toastLiveExample);
        document.getElementById('liveToast').style.backgroundColor="#ffc107";
        document.getElementById('toast-body').innerHTML =`<h6><i class="fa-solid fa-circle-info"> <span style="letter-spacing:1px;"> WARNING</span></i></h6><h6>Add Title</h6>`
        toast.show();
        return;
    }
    if(note == "")
    {
        const toast = new bootstrap.Toast(toastLiveExample);
        document.getElementById('liveToast').style.backgroundColor="#ffc107";
        document.getElementById('toast-body').innerHTML =`<h6><i class="fa-solid fa-circle-info"> <span style="letter-spacing:1px;"> WARNING</span></i></h6><h6>Add Note</h6>`
        toast.show();
        return;
    }

    $.ajax({
        url: "form-submit.php",
        type: "POST",
        data: {
            title:title,
            note:note
            },
            success: function(data) {
                console.log(data);

                if(data == "Data Inserted")
                {
                    const toast = new bootstrap.Toast(toastLiveExample);
                    document.getElementById('liveToast').style.backgroundColor="#1bc5bd";
                    document.getElementById('toast-body').innerHTML = `<h6><i class="fa-regular fa-circle-check"></i> <span>SUCCESS </span> </h6> <h6> Data Inserted Successfully</h6>`
                    toast.show();
                    document.location.reload();
                }else{
                    const toast = new bootstrap.Toast(toastLiveExample);
                    document.getElementById('liveToast').style.backgroundColor="#dc3545";
                    document.getElementById('toast-body').innerHTML = `<h6 style="color:white"><i class="fa-solid fa-triangle-exclamation"></i> <span>ERROR </span> </h6> <h6 style="color:white"> Something Wrong On Server</h6>`
                    toast.show();
                    document.location.reload();
                }
            }
    })
    
})





// if (toastTrigger) {
//     toastTrigger.addEventListener('click', () => {
//      
//     });
//   }
// const toast = new bootstrap.Toast(toastLiveExample, {
//     delay: 5000, // stays for 5 seconds
//     autohide: true // automatically hides after the delay
//   });
  