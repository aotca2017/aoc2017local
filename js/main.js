
$(".radioTitle[name='titleRadio']").click(function () {
    radioListValue = this.value;
    $(".radio .radioListValue").val(radioListValue);

});

$(".radioRegistration[name='registrationRadio']").click(function () {
    radioListValue = this.value;
    $(".registration .radioListValue").val(radioListValue);

});