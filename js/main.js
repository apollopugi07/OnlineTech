$(document).ready(function() {

    var result;
    var mode_;

    var tmode;
    var tresult;
  
    $('#rec-compute').on('click', function() {
  
      var length_ = $('#rec-length').val();
      var width_ = $('#rec-width').val();
      mode_ = $('#rec-mode').val();
  
      if (mode_ == 'Rec-Area') {
  
        result = length_ * width_;
  
  
      } else {
  
        result = (2 * length_) + (2 * width_);
  
      }
  
      $('#rec-result').val(result.toFixed(2));
  
    });
  
    $('#rec-mode').on('change', function() {
  
      mode_ = $('#rec-mode').val();
  
        if (mode_ == 'Rec-Area') {
  
          mode_ = 'Rectangle - Area';
  
        } else {
  
          mode_ = 'Rectangle - Perimeter';
  
        }
      
      $('#rec-legend').text(mode_);
  
    });

    $('#tri-compute').on('click', function() {
  
        var base = $('#tri-base').val();
        var height = $('#tri-height').val();
        var side1 = $('#tri-side1').val();
        var side2 = $('#tri-side2').val();
        var side3 = $('#tri-side3').val();
        tmode = $('#tri-mode').val();
    
        if (tmode == 'Tri-Area') {
    
          tresult = .5 * base * height;
    
    
        } else {
    
          tresult = parseFloat(side1)+parseFloat(side2)+parseFloat(side3);

        }
    
        $('#tri-result').val(tresult.toFixed(2));
    
      });

      $('#tri-mode').on('change', function() {
  
        tmode = $('#tri-mode').val();
    
          if (tmode == 'Tri-Area') {
    
            tmode = 'Triangle - Area';
            $('.area-container').show()
            $('.per-container').hide();
    
          } else {
    
            tmode = 'Triangle - Perimeter';
            $('.area-container').hide()
            $('.per-container').show();
    
          }
        
        $('#tri-legend').text(tmode);
    });

    $('#cir-compute').on('click', function() {
  
        var radius = $('#cir-radius').val();
        cirmode = $('#cir-mode').val();
        var cresult 
    
        if (cirmode == 'Cir-Area') {
    
          cresult = math.pow(radius,2) * Math.PI;
    
        } else {
    
          cresult = 2 * math.PI * radius;
    
        }
        console.log(cresult);
    
        $('#cir-result').val(cresult.toFixed(2));
    
      });
    
      $('#cir-mode').on('change', function() {
    
        cirmode = $('#cir-mode').val();
    
          if (cirmode == 'Cir-Area') {
    
            cirmode = 'Circle - Area';
    
          } else {
    
            cirmode = 'Circle - Perimeter';
    
          }
        
        $('#cir-legend').text(cirmode);
    
      });
  
  });