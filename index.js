$("#form-submit").on('click',function (e) {
    e.preventDefault();
    let title = $("#title").val();
    let note = $("#note").val();

    $.ajax({
        url: "form-submit.php",
        type: "POST",
        data: {
            title:title,
            note:note
            },
            success: function(data) {
                console.log(data);
                document.location.reload();
            }
    })
    
})