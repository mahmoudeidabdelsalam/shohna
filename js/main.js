$(function() {                       //run when the DOM is ready
  $(".clickable").click(function() { 
    $(".clickable").removeClass("active"); // remove all class beefore add this
    $(this).addClass("active");      //add the class to the clicked element
  });

  $(".for-comparing").click(function() { 
    $("#comparing").removeClass("active"); // remove all class beefore add this
    $("#comparing").addClass("active");      //add the class to the clicked element
  });

  // script for tab steps
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

      var href = $(e.target).attr('href');
      var $curr = $(".process-model  a[href='" + href + "']").parent();

      $('.process-model li').removeClass();

      $curr.addClass("active");
      $curr.prevAll().addClass("visited");

      $('[data-toggle="tab"]').on('click', function (event) {
        $('.design-process-content form .btn').removeClass('active');
        event.preventDefault()
        $(this).tab('show')
      })
      
  });





  // Slider Time
  $("#slider-range").slider({
    range: true,
    min: 540,
    max: 1080,
    step: 6,
    values: [540, 1080],
    slide: function(e, ui) {
      var hours1 = Math.floor(ui.values[0] / 60);
      var minutes1 = ui.values[0] - (hours1 * 60);
  
      if (hours1.length == 1) hours1 = '0' + hours1;
      if (minutes1.length == 1) minutes1 = '0' + minutes1;
      if (minutes1 == 0) minutes1 = '00';
      if (hours1 >= 12) {
        if (hours1 == 12) {
          hours1 = hours1;
          minutes1 = minutes1 + "PM";
        } else {
          hours1 = hours1 - 12;
          minutes1 = minutes1 + "PM";
        }
      } else {
        hours1 = hours1;
        minutes1 = minutes1 + "AM";
      }
      if (hours1 == 0) {
        hours1 = 12;
        minutes1 = minutes1;
      }
  
      $('.slider-time').html(hours1 + ':' + minutes1);
  
      var hours2 = Math.floor(ui.values[1] / 60);
      var minutes2 = ui.values[1] - (hours2 * 60);
  
      if (hours2.length == 1) hours2 = '0' + hours2;
      if (minutes2.length == 1) minutes2 = '0' + minutes2;
      if (minutes2 == 0) minutes2 = '00';
      if (hours2 >= 12) {
        if (hours2 == 12) {
          hours2 = hours2;
          minutes2 = minutes2 + "PM";
        } else if (hours2 == 24) {
          hours2 = 11;
          minutes2 = "59PM";
        } else {
          hours2 = hours2 - 12;
          minutes2 = minutes2 + "PM";
        }
      } else {
        hours2 = hours2;
        minutes2 = minutes2 + "AM";
      }
  
      $('.slider-time2').html(hours2 + ':' + minutes2);
  
  
      document.getElementById("formrange").value = hours1 + ':' + minutes1 + ' - ' + hours2 + ':' + minutes2;
    }
  });





  $('#staticBackdrop').modal('show');
  $('#protection').modal('show');
// end  script for tab steps
});