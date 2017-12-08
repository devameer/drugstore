$(function(){
 
 /*Firing WOW animation library*/
  new WOW().init();

 /*Firing nice scroll library */
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

  /*Click event to shooping cart page*/
  $('.cart-btn, .add-btn').on('click',function(){
    $(location).attr('href','cart.html');
  });

 /*Click event to medicineDetails page*/
  $('.shopping-btn').on('click',function(){
  $(location).attr('href','medicineDetails.html');
  });

  /*Remove product from shopping cart*/
  $(".delaet-item i").on('click', function(){
    $('.cart-content').css("display", "none");
    $('.messages').css("display", "block");
  });

  /*Move to about us section*/
  $('.main-menu .r-menu li:nth-child(4)').click(function(){
    $('html , body').animate({ 
     scrollTop: $('.about-us').offset().top}, 500);
  });

  /*Move to client section*/ 
   $('.main-menu .r-menu li:nth-child(3)').click(function(){
    $('html , body').animate({ 
     scrollTop: $('.clients').offset().top}, 500);
	});
  
  /*Move to services section*/ 
   $('.main-menu .r-menu li:nth-child(5)').click(function(){
    $('html , body').animate({ 
     scrollTop: $('.services').offset().top}, 500);
	});

  /*Move to add comment section */ 
   $('.article-info  .comment').click(function(){
    $('html , body').animate({ 
     scrollTop: $('.comment-section').offset().top}, 500);
  });
 
 /*show/hide hamburger menu*/ 
  $('.hamburger-btn').on('click',function(){ 
  	$('.mobile-menu').slideToggle(500);	
  });

 /*show/hide Account mnu*/
  $('.l-menu').hover(function(){
    $('.sub-menu').slideDown().show(500);    
    },function(){
      $('.sub-menu').slideUp().hide(500);       
  });

  /*show/hide user comments*/
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
    if($('.spinner input').val() == 1){
  $('.spinner input').val(parseInt($('.spinner input').val(), 10)) == 1;
    }else{
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
    }  
  });
/* Increament */

  $('.medicine-details-wrap').hide();  
  $('a.details').click(function(){
  $('.medicine-details-wrap').show(1000);
  });


/* show blogs */
  $('.hidden-article').hide();
  $('.more-btn').click(function(){
    $('.blogs-details .hidden-article').toggle(1000);
  });
/* show blods */

/*Change arrow*/
  $('.hidden-arrow').click(function(){
    $('.box-products').toggle(1000); 
      if($('.hidden-arrow').hasClass('fa fa-chevron-down')){
        $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
      }else{
        $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down')
      }     
  });
/*Change arrow*/

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

/*stop a default event in footer section */
  $('.footer-section a').on('click',function(e){ 
    e.preventDefault(); 
  });
/*stop a default event in footer section */

/*Function to animate slider captions*/ 
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
/*Function to animate slider captions*/ 
  
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
         return false;    
      } 
});
/* Register Form validation using bootstrap validation register page*/

});


/* Preloder Page */

$(window).on("load",function(){
  $(".preloader img").fadeOut(1000,function(){
  $(".preloader").fadeOut(100);
 });

});

