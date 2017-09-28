$(document).ready(function() {
    // fancy box
    $(".fancy").fancybox({
      openEffect  : 'none',
      closeEffect : 'none'
    });
    // fancy box
    // nav mobile
    $(".toggle-navigation").on('click', function() {
      if($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(".navigation-menu").removeClass('active').delay(400).fadeOut(0);
        $('html').removeClass('fixed');
      }else {
        $(this).addClass('open');
        $(".navigation-menu").fadeIn(0).addClass('active');
        $('html').addClass('fixed');
      }
      return false;
    });
    //nav mobile
    // laung
    $('.laung-box').hover(
      function(){
        $('.laung-drop').css("visibility",'visible');
      },
      function(){
        $('.laung-drop').css("visibility",'hidden');
      }
    );
    // laung
    // carrers list
    $('.vacancy-butt').on('click',function(){
      $(this).parent().find('.vacancy-list').slideToggle(300);
    });
    // carrers list
    // validate form
    $('.js_validate button[type="submit"]').on("click", function(){
      // $(this).parents(".js_validate").find('.form-group').removeClass('error');
      return validate($(this).parents(".js_validate"));
    }); 
    // validate form
    // map google
    $("#map").gmap3({
      map:{
        options:{
          center:[50.439154, 30.498733],
          zoom: 17,
          navigationControl: true,
          streetViewControl: false,
          scrollwheel: false
        },
      },
      marker:{
        latLng:[50.439154, 30.498733]
      }
    });
    // map google
    // carousel index
    $('.slider').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        nav: true,
        navRewind: false,
        loop:false,
        dots: true,
        // dotsData: true
    });
    var i = 1;
    $('.slider .owl-dot').each(function(){
      $(this).text("0" + i);
      i++;
    });
    // carousel index
    $('input, textarea').placeholder();
    // modal
    $(".modal").on("show.bs.modal", function(){
          var $bodyWidth = $("body").width();
      $("body").css({'overflow-y': "hidden"}).css({'padding-right': ($("body").width()-$bodyWidth)});
    });
    $(".modal").on("hidden.bs.modal", function(){
      $("body").css({'padding-right': "0", 'overflow-y': "auto"});
    });
    // modal
});

// validate form
function validate(form){
    var error_class = "error";
    var norma_class = "pass";
    var item        = form.find("[required]");
    var e           = 0;
    var reg         = undefined;
    var pass        = form.find('.password').val();
    var pass_1      = form.find('.password_1').val();
    function mark (object, expression) {
        if (expression) {
            object.parent('.form-group').removeClass(error_class);
            setTimeout(function(){
              object.parent('div').addClass(error_class);
            },150);
            e++;
        } else
            object.parent('div').addClass(norma_class).removeClass(error_class);
    }
    item.each(function(){
        switch($(this).attr("data-validate")) {
            case undefined:
                mark ($(this), $.trim($(this).val()).length == 0);
            break;
            case "email":
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                mark ($(this), !reg.test($.trim($(this).val())));
            break;
            case "phone":
                reg = /[0-9 -()+]{5}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
            break;
            case "pass":
                reg = /^[a-zA-Z0-9_-]+$/;
                mark ($(this), !reg.test($.trim($(this).val())));
            break;
            case "pass1":
                mark ($(this), pass_1 != pass);
            break;
            default:
                reg = new RegExp($(this).attr("data-validate"), "g");
                mark ($(this), !reg.test($.trim($(this).val())));
            break
        }
    })
    if ($('.js_valid_select').length) {
        if ($('.js_valid_select option:selected').val() == "") {
            $('.js_valid_select').parent('div').addClass(error_class).find('.text_error').css('display','block');
            e==1;
        } else {
            $('.js_valid_select').parent('div').addClass(norma_class).removeClass(error_class).find('.text_error').css('display','none');
        }
    }
    if ($('.js_valid_check').length) {
        if ($('.js_valid_check:checked').length == 0) {
            $('.js_valid_check').parents('.row').addClass(error_class).find('.text_error').css('display','block');
            e==1;
        } else {
            $('.js_valid_check').parents('.row').addClass(norma_class).removeClass(error_class).find('.text_error').css('display','none');
        }
    }
    if ($('.js_valid_radio').length) {
        if ($('.js_valid_radio:checked').length == 0) {
            $('.js_valid_radio').parents('.row').addClass(error_class).find('.text_error').css('display','block');
            e==1;
        } else {
            $('.js_valid_radio').parents('.row').addClass(norma_class).removeClass(error_class).find('.text_error').css('display','none');
        }
    }
    if (e == 0) {
        return true;
    }
    else {
        form.find("."+error_class+" input:first").focus();
        return false;
    }
};
// validate form  
/*! http://mths.be/placeholder v2.0.7 by @mathias */
$(function(window, document, $) {

 // Opera Mini v7 doesn t support placeholder although its DOM seems to indicate so
 var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
 var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
 var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
 var prototype = $.fn;
 var valHooks = $.valHooks;
 var propHooks = $.propHooks;
 var hooks;
 var placeholder;

 if (isInputSupported && isTextareaSupported) {

  placeholder = prototype.placeholder = function() {
   return this;
  };

  placeholder.input = placeholder.textarea = true;

 } else {

  placeholder = prototype.placeholder = function() {
   var $this = this;
   $this
    .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
    .not('.placeholder')
    .bind({
     'focus.placeholder': clearPlaceholder,
     'blur.placeholder': setPlaceholder
    })
    .data('placeholder-enabled', true)
    .trigger('blur.placeholder');
   return $this;
  };

  placeholder.input = isInputSupported;
  placeholder.textarea = isTextareaSupported;

  hooks = {
   'get': function(element) {
    var $element = $(element);

    var $passwordInput = $element.data('placeholder-password');
    if ($passwordInput) {
     return $passwordInput[0].value;
    }

    return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
   },
   'set': function(element, value) {
    var $element = $(element);

    var $passwordInput = $element.data('placeholder-password');
    if ($passwordInput) {
     return $passwordInput[0].value = value;
    }

    if (!$element.data('placeholder-enabled')) {
     return element.value = value;
    }
    if (value == '') {
     element.value = value;
     // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
     if (element != safeActiveElement()) {
      // We can't use `triggerHandler` here because of dummy text/password inputs :(
      setPlaceholder.call(element);
     }
    } else if ($element.hasClass('placeholder')) {
     clearPlaceholder.call(element, true, value) || (element.value = value);
    } else {
     element.value = value;
    }
    // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
    return $element;
   }
  };

  if (!isInputSupported) {
   valHooks.input = hooks;
   propHooks.value = hooks;
  }
  if (!isTextareaSupported) {
   valHooks.textarea = hooks;
   propHooks.value = hooks;
  }

  $(function() {
   // Look for forms
   $(document).delegate('form', 'submit.placeholder', function() {
    // Clear the placeholder values so they don't get submitted
    var $inputs = $('.placeholder', this).each(clearPlaceholder);
    setTimeout(function() {
     $inputs.each(setPlaceholder);
    }, 10);
   });
  });

  // Clear placeholder values upon page reload
  $(window).bind('beforeunload.placeholder', function() {
   $('.placeholder').each(function() {
    this.value = '';
   });
  });

 }

 function args(elem) {
  // Return an object of element attributes
  var newAttrs = {};
  var rinlinejQuery = /^jQuery\d+$/;
  $.each(elem.attributes, function(i, attr) {
   if (attr.specified && !rinlinejQuery.test(attr.name)) {
    newAttrs[attr.name] = attr.value;
   }
  });
  return newAttrs;
 }

 function clearPlaceholder(event, value) {
  var input = this;
  var $input = $(input);
  if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
   if ($input.data('placeholder-password')) {
    $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
    // If `clearPlaceholder` was called from `$.valHooks.input.set`
    if (event === true) {
     return $input[0].value = value;
    }
    $input.focus();
   } else {
    input.value = '';
    $input.removeClass('placeholder');
    input == safeActiveElement() && input.select();
   }
  }
 }

 function setPlaceholder() {
  var $replacement;
  var input = this;
  var $input = $(input);
  var id = this.id;
  if (input.value == '') {
   if (input.type == 'password') {
    if (!$input.data('placeholder-textinput')) {
     try {
      $replacement = $input.clone().attr({ 'type': 'text' });
     } catch(e) {
      $replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
     }
     $replacement
      .removeAttr('name')
      .data({
       'placeholder-password': $input,
       'placeholder-id': id
      })
      .bind('focus.placeholder', clearPlaceholder);
     $input
      .data({
       'placeholder-textinput': $replacement,
       'placeholder-id': id
      })
      .before($replacement);
    }
    $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
    // Note: `$input[0] != input` now!
   }
   $input.addClass('placeholder');
   $input[0].value = $input.attr('placeholder');
  } else {
   $input.removeClass('placeholder');
  }
 }

 function safeActiveElement() {
  // Avoid IE9 `document.activeElement` of death
  // https://github.com/mathiasbynens/jquery-placeholder/pull/99
  try {
   return document.activeElement;
  } catch (err) {}
 }
 

}(this, document, jQuery));


