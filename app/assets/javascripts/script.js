$(document).ready(function() {

  // slider
  $('.slider').slider({
    height: '450px',
    transition: 1000,
    indicators: false
  });

  // date picker for booking
  $('.checkin, .checkout').pickadate({
    selectMonths: true,
    selectYears: 6,
    format: 'dd-mm-yyyy',
    min: new Date(Date()),
    max: new Date(2020,11,31)
  });

  // 
  $('.modal-trigger').leanModal({
    dismissible: true,
    opacity: .5,
    in_duration: 300,
    out_duration: 200
  });

  $('.button-collapse').sideNav({
      menuWidth: 350,
      closeOnClick: true
    }
  );

  // booking tabs
  var $act =  $('.step-wrap').on('click', function(e)  {
    var attr = $(this).attr('href');

    $(attr).fadeIn(600)
           .siblings()
           .hide();

    $(this).addClass('active');

    $act.not(this)
        .removeClass('active');

    e.preventDefault();
  });


  $('.hover-effect').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated flipInX',
    offset: 100
  });

});
