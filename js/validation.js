
jQuery.validator.addMethod("noSpace", function(value, element) { 
    return value == '' || value.trim().length != 0;  
  }, "No space please and don't leave it empty");
  jQuery.validator.addMethod("customEmail", function(value, element) { 
  return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
  }, "Please enter valid email address!");
  $.validator.addMethod("numeric", function(value, element) {
    return this.optional(element) || value == value.match(/^[0-9]+$/);
  }, "Numbers Only");
  $.validator.addMethod( "alphanumeric", function( value, element ) {
  return this.optional( element ) || value == value.match(/^[a-zA-Z\s]+$/);
  }, "Letters only" );
  
$(document).ready(function(){
$("#form").validate({
    rules:{
        name:{
            required:true,
            minlength:4,
            alphanumeric: true
        },
        mail: {
            required: true,
            customEmail: true
        },
        subject:{

            required: true,
        },
        message:{

            required: true,
        }
    },
    messages:{
        
        name: {
            //error message for the required field
            required: 'Please Enter Your Name'
        },
        mail: {
            required: 'Please Enter Your mail id',
            alphanumeric:'Please Enter only charractors'
        },
        mobile: {
            required: 'Please Enter  Your Phone Number',
            maxlength:'Enter only 10 numbers',
            minlength:'Enter minimum 10 numbers'
        },
        subject:{

            required: 'Please Enter  Your Subject',
        },
        message:{

            required: 'Please Enter  Your Message',
        }
        
    },

}) 
$("#form").submit((e)=>{
    e.preventDefault();
    if(!$("form").valid())return;
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbygScMQLEClitos99mMQXD4P2DSZyJSFlmW_Tg3/exec",
        data:$("#form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
})
