$("#sendData").on("click",function() {
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();

    $("#errorMess").text("");

    //Передача данных с помощью ajax
    $.ajax({
        url:'ajax/data.php',
        type: 'POST',
        cache: false,
        data: { 'name':name, 'phone':phone},
        dataType:'html',
        beforeSend: function() {
            $("#sendData").prop("disabled", true);
        },
        success: function(data) {
            if(!data) {
                alert("Ошибка, сообщение не отправлено");
            } else {
                $('.container').html(data);   
                $("#form").trigger("reset");
            }
             $("#sendData").prop("disabled", false);
        }
    });
});
