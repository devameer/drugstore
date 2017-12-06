$(function(){

  new WOW().init();

	
 var scroll= function(){$("html").niceScroll({
     	cursorcolor: "#89C532",
     	cursorwidth: "10px",
     	cursorborder: "1 solid #f7600e",
     	cursorborderradius: "0px",

     });
}

scroll();


//Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('#myBtn').fadeIn();
    } else {
      $('#myBtn').fadeOut();
    }
  });
  
  //Click event to scroll to top
  $('#myBtn').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });


$('.cart-btn, .add-btn').on('click',function(){
  $(location).attr('href','cart.html');
});



$('.shopping-btn').on('click',function(){
  $(location).attr('href','medicineDetails.html');

});

$(".delaet-item i").on('click', function(){
  $('.cart-content').css("display", "none");
  $('.messages').css("display", "block");
});




   /*$('.main-menu .r-menu li:nth-child(2)').click(function(){
    $('html , body').animate({ 
     scrollTop: $('.articles').offset().top}, 500);
	}); 

    $('.main-menu .r-menu li:nth-child(6)').click(function(){
    $('html , body').animate({ 
     scrollTop: $('.footer-section , .newsletter').offset().top}, 500);
  });


   */

  $('.main-menu .r-menu li:nth-child(4)').click(function(){
    $('html , body').animate({ 
     scrollTop: $('.about-us').offset().top}, 500);
  });





   $('.main-menu .r-menu li:nth-child(3)').click(function(){
    $('html , body').animate({ 
     scrollTop: $('.clients').offset().top}, 500);
	});
  

   $('.main-menu .r-menu li:nth-child(5)').click(function(){
    $('html , body').animate({ 
     scrollTop: $('.services').offset().top}, 500);
	});

 
   $('.article-info  .comment').click(function(){
    $('html , body').animate({ 
     scrollTop: $('.comment-section').offset().top}, 500);
  });
 

    /*$('.mobile-menu').hide();*/
    $('.hamburger-btn').on('click',function(){ 
    	   $('.mobile-menu').slideToggle(500);	
    });

  

  $('.l-menu').hover(function(){
      $('.sub-menu').slideDown().show(500);
        
    },function(){
      $('.sub-menu').slideUp().hide(500);       
    });



$('.comment-box.hide-comment-box').hide();

$('.comment-section .arrow i').click(function(){

    $('.comment-box.hide-comment-box').toggle(1000); 

      if($('.arrow i').hasClass('fa fa-chevron-down')){
        $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
      }else{
        $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down')
      }   
    
  });

  
  /* Increament */

  $('.spinner .btn:first-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
  });
  $('.spinner .btn:last-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
  });

/* Increament */

$('.medicine-details-wrap').hide();
 
$('a.details').click(function(){
$('.edicine-details-wrap').show(1000);
});


/* show blogs */
$('.hidden-article').hide();
 $('.more-btn').click(function(){
    $('.blogs-details .hidden-article').toggle(1000);
   });

/* show blods */

$('.hidden-arrow').click(function(){

    $('.box-products').toggle(1000); 

      if($('.hidden-arrow').hasClass('fa fa-chevron-down')){
        $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
      }else{
        $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down')
      }   
    
  });

/* open tab */

  $('.medicine-tab .tab-link ').on("click",function(e){
    var tab_id = $(this).attr('data-tab');

    $('.medicine-tab .tab-link').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
     e.preventDefault()

  });

/* open tab */


  $('.footer-section a').on('click',function(e){ 
         e.preventDefault(); 
    });

 ///Function to animate slider captions 
  function doAnimations( elems ) {
    //Cache the animationend event in a variable
    var animEndEv = 'webkitAnimationEnd animationend';
    
    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data('animation');
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }
  
  //Variables on page load 
  var $myCarousel = $('#myCarousel'),
    $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
    
  //Initialize carousel 
  $myCarousel.carousel();
  
  //Animate captions in first slide on page load 
  doAnimations($firstAnimatingElems);
  
  //Pause carousel  
  $myCarousel.carousel('pause');
  
  
  //Other slides to be animated on carousel slide event 
  $myCarousel.on('slide.bs.carousel', function (e) {
    var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });  
  
/* validation */

/* validation for contact form */
 $('#contactForm').bootstrapValidator({
        container: '#messages',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            fullName: {
                validators: {
                /* stringLength:{
                         min:5
                              },*/
                    notEmpty: {
                        message:'قم بإدخالك اسمك بالكامل'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'قم بإدخال بريدك الإلكتروني'
                    },
                    emailAddress: {
                        message: 'عنوان البريد الإلكتروني غير صالح'
                    }
                }
            },
            content: {
                validators: {
                    notEmpty: {
                        message: 'قم بإدخال نص الرسالة'
                    },
                    stringLength: {
                        max: 500,
                        message: 'يجب ألا يزيد طول نص الرسالة عن 500 حرف '
                    }
                }
              }
            }
      
    });


/* validation for contact form */

/* validation for comment form */

 $('#commentForm').bootstrapValidator({
     button: {
          selector: '[type="submit"]',
      },
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            fullName: {
                validators: {
                /* stringLength:{
                         min:5
                              },*/
                    notEmpty: {
                        message:'قم بإدخالك اسمك بالكامل'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'قم بإدخال بريدك الإلكتروني'
                    },
                    emailAddress: {
                        message: 'عنوان البريد الإلكتروني غير صالح'
                    }
                }
            },
            content: {
                validators: {
                    notEmpty: {
                        message: 'قم بكتابة محتوى التعليق'
                    },
                    stringLength: {
                        max: 500,
                        message: 'يجب ألا يزيد طول التعليق عن 500 حرف '
                    }
                }
              }
            },
       submitHandler: function(validator, form, submitButton) {
        $('#success_message').show(); 
        return false; 
         }


    });


/* validation for comment form  */


/* Register Form validation using bootstrap validation register page*/

$('#registerForm').bootstrapValidator({
        button: {
        selector: '[type="submit"]',
    },
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        message: 'الإسم الأول يجب أن يتكون من 5 أحرف على الأقل',   
                        min: 5,
                    },
                        notEmpty: {
                        message: 'ادخل الإسم الأول'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                      message: 'إسم العائلة يجب أن يتكون من 5 أحرف على الأقل',
                        min: 2,
                    },
                    notEmpty: {
                        message: 'أدخل إسم العائلة'
                    }
                }
            },
            user_name: {
                validators: {
                     stringLength: {
                       message: 'إسم المستخد يجب أن يتكون من 5 أحرف على الأقل',
                        min: 8,
                    },
                    notEmpty: {
                        message: 'أدخل إسم المستخدم'
                    }
                }
            },
            user_password: {
                validators: {
                     stringLength: {
                        message:'كلمة المرور يجب أن تتكون من 8 خانات على الأقل',
                        min: 8,
                    },
                    notEmpty: {
                        message: 'أدخل كلمة المرور'
                    }
                }
            },
           confirm_password: {
                validators: {
                     stringLength: {
                      message:'كلمة المرور يجب أن تتكون من 8 أحرف على الأقل',
                        min: 8,
                    },
                    notEmpty: {
                        message: 'أدخل كلمة المرور'
                    },
                    identical: {
                   field: 'user_password',
                   message: 'كلمة المرور وتأكيدها غير متطابقة'
                }

                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'أدخل بريدك الإلكتورني'
                    },
                    emailAddress: {
                        message: 'عنوان البريد الإلكتروني غير صالح'
                    }
                }
            }
          },
    submitHandler: function(validator, form, submitButton) {
         $('#success_message').show();
         var delay = 2000; 
        setTimeout(function(){$(location).attr('href','home.html');}, delay);
         //e.preventDefault(); 
        /*validator.defaultSubmit();*/             
        return false;    

    } 

});

/*.on('success.form.bv', function(e) {

            //alert("ggg");
            $('#success_message').slideDown({ opacity: "show" }, "slow");// Do something ...
                $('#registerForm').data('bootstrapValidator').resetForm();

           // Prevent form submission
           e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });*/

/* Register Form validation*/ 

/*Register Form validation test page
$('#first_name_error_mess').hide();
$('#last_name_error_mess').hide();
$('#username_error_mess').hide();
$('#password_error_mess').hide();
$('#confirm_password_error_mess').hide();
$('#email_error_mess').hide();


var error_first_name = false;
var error_last_name = false;
var error_username = false;
var error_password = false;
var error_confirm_password = false;
var error_email= false;


$('#first_name').focusout(function(){
   check_firstname();

});

$('#last_name').focusout(function(){
   check_lastname();

});

$('#user_name').focusout(function(){
   check_username();

});

$('#user_password').focusout(function(){
   check_password();

});

$('#confirm_password').focusout(function(){
   check_confirmpassword();

});

$('#email').focusout(function(){
   check_email();

});


function check_firstname(){
  var firstname_length = $('#first_name').val().length;
  if(firstname_length <5){
    $('#first_name_error_mess').html('الإسم الأول يجب أن يتكون من 5 أحرف على الأقل');
    $('#first_name_error_mess').show();
    error_first_name = true;
  }else{
     $('#first_name_error_mess').hide();
  }

}


function check_lastname(){
  var lastname_length = $('#last_name').val().length;
   if(lastname_length < 5){
    $('#last_name_error_mess').html('إسم العائلة يجب أن يتكون من 5 أحرف على الأقل');
    $('#last_name_error_mess').show();
    error_last_name = true;
  }else{
     $('#last_name_error_mess').hide();
  }

}

function  check_username(){
  var username_length = $('#user_name').val().length;
   if(username_length < 5){
    $('#username_error_mess').html('إسم المستخدم يجب أن يتكون من 5 أحرف على الأقل');
    $('#username_error_mess').show();
    error_username = true;
  }else{
     $('#username_error_mess').hide();
  }

}


function  check_password(){
  var password_length = $('#user_password').val().length;
   if(password_length < 8){
    $('#password_error_mess').html('كلمة المرور يجب أن يتكون من 8 أحرف على الأقل');
    $('#password_error_mess').show();
    error_password = true;
  }else{
     $('#password_error_mess').hide();
  }

}


function  check_confirmpassword(){
  var password = $('#user_password').val();
  var confirmpassword = $('#confirm_password').val();

   if(password != confirmpassword){
    $('#confirm_password_error_mess').html('كلمة المرور غير متطابقة');
    $('#confirm_password_error_mess').show();
    error_confirm_password = true;
  }else{
     $('#confirm_password_error_mess').hide();
  }

}

function  check_email(){
  var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if(pattern.test($('#email').val())){
    $('#email_error_mess').hide();
    
  }else{
     $('#email_error_mess').html('عنوان البريد الإلكتروني غير صالح');
    $('#email_error_mess').show();
    error_email = true;
  }

}


$('#register-btn').on('click',function(){
    var error_first_name = false;
    var error_last_name = false;
    var error_username = false;
    var error_password = false;
    var error_confirm_password = false;
    var error_email= false;
   
    check_firstname();
    check_lastname();
    check_username();
    check_password();
    check_confirmpassword();
    check_email();

   if(error_first_name == false && error_last_name == false &&
    error_username == false && error_password == false && error_confirm_password == false &&
    error_email == false){

     return true;

   }else{
    //console.log('dd');
   $('#success_message').show();
     return false;

   }

  
});


Register Form validation */
});


/* Preloder Page */

$(window).on("load",function(){
$(".preloader img").fadeOut(2000,function(){
$(".preloader").fadeOut(100);
 });

});

