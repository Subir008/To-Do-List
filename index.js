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
        document.getElementById('toast-body').innerHTML =`<h6><i class="fa-solid fa-circle-info"> WARNING</i></h6><h6>ADD TITLE</h6>`
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
                    document.getElementById('liveToast').style.backgroundColor="rgb(169, 255, 104)";
                    document.getElementById('toast-body').innerHTML = "<h6>Data Inserted Successfully</h6>"
                    toast.show();
                    document.location.reload();
                }else{
                    alert(data);
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
  