
$(".radioTitle[name='titleRadio']").click(function () {
    radioListValue = this.value;
    $(".radio .radioListValue").val(radioListValue);

});

$(".radioRegistration[name='registrationRadio']").click(function () {
    radioListValue = this.value;
    $(".registration .radioListValue").val(radioListValue);

});


$("#form-content").submit(function(){
    $("#ss-submit").attr("disabled", true);
    setTimeout(function(){
        $("#ss-submit").attr("disabled", false);
    }, 1000);
});

$("#hidden_iframe").on('load',function () {
    $("#myModal").modal('show');
    $("#form-content")[0].reset();
    setTimeout(function(){
        $("#myModal").modal('hide');
    }, 2000);
});