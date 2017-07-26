
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

$('.radioRegistration[name=registrationRadio]').on('click',function () {
    console.log($(this).val());
    $(".declaration").val(this.value);
});



$(function () {
    var inputs = document.querySelectorAll( 'input[type=text], input[type=email], input[type=number]' );
    for (i = 0; i < inputs.length; i ++) {
        var inputEl = inputs[i];
        if( inputEl.value.trim() !== '' ) {
            inputEl.parentNode.classList.add( 'input--filled' );
        }
        inputEl.addEventListener( 'focus', onFocus );
        inputEl.addEventListener( 'blur', onBlur );
    }

    function onFocus( ev ) {
        ev.target.parentNode.classList.add( 'inputs--filled' );
    }

    function onBlur( ev ) {
        if ( ev.target.value.trim() === '' ) {
            ev.target.parentNode.classList.remove( 'inputs--filled' );
        } else if ( ev.target.checkValidity() == false ) {
            ev.target.parentNode.classList.add( 'inputs--invalid' );
            ev.target.addEventListener( 'input', liveValidation );
        } else if ( ev.target.checkValidity() == true ) {
            ev.target.parentNode.classList.remove( 'inputs--invalid' );
            ev.target.addEventListener( 'input', liveValidation );
        }
    }

    function liveValidation( ev ) {
        if ( ev.target.checkValidity() == false ) {
            ev.target.parentNode.classList.add( 'inputs--invalid' );
        } else {
            ev.target.parentNode.classList.remove( 'inputs--invalid' );
        }
    }

    var submitBtn = document.querySelector( 'button[type=submit]' );
    submitBtn.addEventListener( 'click', onSubmit );

    function onSubmit( ev ) {
        var inputsWrappers = ev.target.parentNode.querySelectorAll( 'span' );
        for (i = 0; i < inputsWrappers.length; i ++) {
            input = inputsWrappers[i].querySelector( 'input[type=text], input[type=email], input[type=number]' );
            if ( input.checkValidity() == false ) {
                inputsWrappers[i].classList.add( 'inputs--invalid' );
            } else if ( input.checkValidity() == true ) {
                inputsWrappers[i].classList.remove( 'inputs--invalid' );
            }
        }
    }
});