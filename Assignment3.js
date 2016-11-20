/**
 * Created by chandrasekar on 20/11/16.
 */

var EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function validateform(){

           var name = document.validationform.name.value;
           var email = document.validationform.email.value;
           var phoneNumber = document.validationform.phoneNumber.value;
           var address = document.validationform.address.value;

            // var name = "dsfd";
            // var email = "chaanadru@gmail.ccm";
            // var phoneNumber = "dsfdf";
            // var address = "";

            var fieldsArray = [name, email, phoneNumber];

            if(isFieldsNotNull(fieldsArray)){
                if(EMAIL_REGEX.test(email)){
                    console.log("Verification Success");
                }else{
                    console.log("Invalid Email ID");

                }
            }else {
                console.log("Name, email and phone number should not be empty");

            }
}

function isFieldsNotNull(param){

    for(var x in param){
         return !(param[x] == "" || param[x] == null)
    }

}

validateform();