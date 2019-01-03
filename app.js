var $textAk = $(".aknowledgement").hide();
var $form = $(".form-control")
var $formval = $(".form-control").val();


$('#button-addon2').submit(function(e){
    alert( "Handler for .submit() called.");
    e.preventDefault();
    console.log($formval);
    console.log(emailValidate("tawandamavondo@gmail.com"));
    
})

function emailValidate (email){
    if (email.length < 1) {
        $textAk.text("This Field is required").show("slow");
      } else {
        var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
        var validEmail = regEx.test(email);
        if (!validEmail) {
         $textAk.text("Please enter a valid Email Address").show("slow");
        }
        else{
            $textAk.show("slow");
            console.log(email);
        }
      }

      return email;
}